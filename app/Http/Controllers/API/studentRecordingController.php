<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Models\student_recordings;
use Illuminate\Http\Request;

class studentRecordingController extends Controller
{
    //

    public function getstudentrecordings(Request $request){
        $recordings = student_recordings::all();
        return response()->json([
            'status'=>200,
            'recordings'=>$recordings
        ]);
    }

    public function store(Request $request){
        $recording = student_recordings::where('student_email', $request->student_email)->first();

        if(!$recording){

            $recording = new student_recordings;

            $recording->student_name = $request->input('student_name');
            $recording->student_email = $request->input('student_email');
            $recording->recording_url = $request->input('recording_url');
            
            $recording->save();

            return response()->json([
                'status'=>200,
                'message'=>'Recording uploaded successfully',
                'course'=>$recording
            ]);
        }else{

            $recording->student_name = $request->student_name;
            $recording->student_email = $request->student_email;
            $recording->recording_url = $request->recording_url;
            
            $recording->save();

            return response()->json([
                'status'=>200,
                'message'=>'Recording updated successfully',
                'course'=>$recording
            ]);
        }

    }
}
