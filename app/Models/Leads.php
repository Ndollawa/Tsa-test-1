<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Leads extends Model
{
    /** @use HasFactory<\Database\Factories\LeadsFactory> */
    use HasFactory;

     protected $fillable = [
        'first_name',
        'last_name',
        'phone',
        'email',
    ];
}
