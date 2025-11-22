<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Http;

class StoreLeadsRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'first_name' => ['required', 'string', 'max:255'],
            'last_name' => ['required', 'string', 'max:255'],
            'phone' => ['required', 'string', 'max:20'],
            'email' => ['required', 'email', 'max:255', 'unique:leads,email'],
            'captcha' => ['required', 'string'],
        ];
    }

    public function passedValidation()
    {
        $response = Http::timeout(5)->asForm()->post(
            'https://www.google.com/recaptcha/api/siteverify',
            [
                'secret' => env('RECAPTCHA_SECRET_KEY'),
                'response' => $this->captcha,
            ]
        );

        if (! ($response->json()['success'] ?? false)) {
            abort(response()->json([
                'status' => false,
                'message' => 'Captcha validation failed.',
            ], 422));
        }
    }
}
