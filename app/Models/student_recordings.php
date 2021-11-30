<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class student_recordings extends Model
{
    use HasFactory;
    protected $table = 'student_recordings';
    protected $fillable = [
        'student_name',
        'student_email',
        'recording_url'
    ];
}
