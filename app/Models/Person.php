<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Person extends Model
{
    use HasFactory;
    protected $table = 'users';
    protected $fillable = [
        'fname',
        'lname',
        'email',
        'dob',
        'gender',
        'role',
        'password'
    ];
    protected $hidden = [
        'password',
        'remember_token'
    ];
}
