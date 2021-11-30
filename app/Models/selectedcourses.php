<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class selectedcourses extends Model
{
    use HasFactory;
    protected $table = 'selectedcourses';
    protected $fillable = [
        'studentemail',
        'course',
        'coursesection',
        'courseprof'
    ];
}
