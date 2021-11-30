<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Course;
use Illuminate\Support\Facades\Hash;

class CourseController extends Controller
{

    public function index(){
        $courses = Course::all();
        return response()->json([
            'status'=>200,
            'courses'=>$courses
        ]);
    }

    public function store(Request $request){
        $course = Course::where('coursesection', $request->coursesection)->first();

        if(!$course){

            $course = new Course;

            $course->course = $request->input('course');
            $course->coursesection = $request->input('coursesection');
            $course->courseprof = $request->input('courseprof');
            
            $course->save();

            return response()->json([
                'status'=>200,
                'message'=>'User added successfully',
                'course'=>$course
            ]);
        }else{
            return ["error"=>"course section exist already"];
        }

    }

    public function delete(Request $request){
        $course = Course::where('coursesection', $request->coursesection)->delete();
        if($course){
            return response()->json([
                'status'=>200,
                'result'=>"Course has been deleted"
            ]);
        }else{
            return ["result"=>"Operation failed"];
        }
    }

    public function edit(Request $request){
        $course = Course::where('coursesection', $request->coursesection)->first();
        if($course){
            $course->course = $request->course;
            $course->courseprof = $request->courseprof;
            $course->save();

            return response()->json([
                'status'=>200,
                'course'=>$course
            ]);
        }else{
            return ["result"=>"Operation failed"];
        }
    }
}
