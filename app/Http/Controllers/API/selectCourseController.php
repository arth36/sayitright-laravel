<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Models\selectedcourses;
use Illuminate\Http\Request;

class selectCourseController extends Controller
{
    //
    public function store(Request $request){
        $course = selectedcourses::where('coursesection', $request->coursesection)->where('studentemail', $request->studentemail)->first();

        if(!$course){

            $course = new selectedcourses;

            $course->studentemail = $request->input('studentemail');
            $course->course = $request->input('course');
            $course->coursesection = $request->input('coursesection');
            $course->courseprof = $request->input('courseprof');
            
            $course->save();

            return response()->json([
                'status'=>200,
                'message'=>'Selected Course added successfully',
                'course'=>$course
            ]);
        }else{
            return ["error"=>"course section exist already in users profile"];
        }

    }

    public function getselectedcourses(Request $request){
        $course = selectedcourses::where('studentemail', $request->studentemail)->get();

        if($course){

            return response()->json([
                'status'=>200,
                'message'=>'Selected Course found successfully',
                'course'=>$course
            ]);
        }else{
            return ["error"=>"course section exist already in users profile"];
        }

    }

    public function deleteselectedcourses(Request $request){
        $course = selectedcourses::where('studentemail', $request->studentemail)->where('coursesection', $request->coursesection)->delete();

        if($course){

            return response()->json([
                'status'=>200,
                'message'=>'Selected Course found successfully',
                'course'=>$course
            ]);
        }else{
            return ["error"=>"error while deteling course from users profile"];
        }

    }
}
