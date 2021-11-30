<?php

use App\Http\Controllers\API\UserController;
use App\Http\Controllers\API\CourseController;
use App\Http\Controllers\api\selectCourseController;
use App\Http\Controllers\api\studentRecordingController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


Route::post('/users', [UserController::class, 'index']);
Route::post('/register', [UserController::class, 'store']);
Route::post('/login', [UserController::class, 'login']);
Route::post('/edit-user', [UserController::class, 'edit']);
Route::post('/delete-user', [UserController::class, 'delete']);
Route::post('/getadmin', [UserController::class, 'getadmin']);
Route::post('/getstudent', [UserController::class, 'getstudent']);
Route::post('/getadvisor', [UserController::class, 'getadvisor']);
Route::post('/getprof', [UserController::class, 'getprof']);


Route::post('/courses', [CourseController::class, 'index']);
Route::post('/create-course', [CourseController::class, 'store']);
Route::post('/edit-course', [CourseController::class, 'edit']);
Route::post('/delete-course', [CourseController::class, 'delete']);


Route::post('/create-select-course', [selectCourseController::class, 'store']);
Route::post('/get-selected-courses', [selectCourseController::class, 'getselectedcourses']);
Route::post('/delete-selected-courses', [selectCourseController::class, 'deleteselectedcourses']);


Route::post('/create-student-recording', [studentRecordingController::class, 'store']);
Route::post('/get-student-recordings', [studentRecordingController::class, 'getstudentrecordings']);


Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
