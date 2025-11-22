<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreLeadsRequest;
use App\Http\Requests\UpdateLeadsRequest;
use App\Models\Leads;

class LeadsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreLeadsRequest $request)
    {
        try {
            $lead = Leads::create($request->validated());

            return response()->json([
                'status' => true,
                'message' => 'Registration completed successfully.',
                'payload' => $lead,
            ]);

        } catch (\Illuminate\Database\UniqueConstraintViolationException $e) {
            return response()->json([
                'status' => false,
                'message' => 'This email has already been registered.',
            ], 422);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(Leads $leads)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Leads $leads)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateLeadsRequest $request, Leads $leads)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Leads $leads)
    {
        //
    }
}
