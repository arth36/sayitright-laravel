<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Person;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{

    public function index(){
        $users = Person::all();
        return response()->json([
            'status'=>200,
            'users'=>$users
        ]);
    }

    public function store(Request $request){
        $user = Person::where('email', $request->email)->first();

        if(!$user || !Hash::check($request->password, $user->password)){

            $person = new Person;

            $person->fname = $request->input('fname');
            $person->lname = $request->input('lname');
            $person->email = $request->input('email');
            $person->dob = $request->input('dob');
            $person->gender = $request->input('gender');
            $person->role = $request->input('role');
            $person->password =  Hash::make($request->input('password'));
            $person->save();

            return response()->json([
                'status'=>200,
                'message'=>'User added successfully',
                'user'=>$person
            ]);
        }else{
            return ["error"=>"Email id exist already"];
        }

    }

    public function login(Request $request){
        $user = Person::where('email', $request->email)->first();
        if(!$user || !Hash::check($request->password, $user->password)){
            return ["error"=>"Email or password is not correct"];
        }

        return response()->json([
            'status'=>200,
            'user'=>$user
        ]);
    }

    public function getadmin(Request $request){
        $user = Person::where('role', 'Admin')->get();
        if(!$user){
            return ["error"=>"There is no admin"];
        }

        return response()->json([
            'status'=>200,
            'user'=>$user
        ]);
    }

    public function getstudent(Request $request){
        $user = Person::where('role', 'Student')->get();
        if(!$user){
            return ["error"=>"There is no student"];
        }

        return response()->json([
            'status'=>200,
            'user'=>$user
        ]);
    }

    public function getadvisor(Request $request){
        $user = Person::where('role', 'Advisor')->get();
        if(!$user){
            return ["error"=>"There is no advisor"];
        }

        return response()->json([
            'status'=>200,
            'user'=>$user
        ]);
    }

    public function getprof(Request $request){
        $user = Person::where('role', 'Professor')->get();
        if(!$user){
            return ["error"=>"There is no admin"];
        }

        return response()->json([
            'status'=>200,
            'user'=>$user
        ]);
    }

    public function delete(Request $request){
        $user = Person::where('email', $request->email)->delete();
        echo $user;
        if($user){
            return response()->json([
                'status'=>200,
                'result'=>"User has been deleted"
            ]);
        }else{
            return ["result"=>"Operation failed"];
        }
    }

    public function edit(Request $request){
        $user = Person::where('email', $request->email)->first();
        $user->fname = $request->fname;
        $user->lname = $request->lname;
        $user->dob = $request->dob;
        $user->gender = $request->gender;
        $user->role = $request->role;
        $user->save();

        return response()->json([
            'status'=>200,
            'user'=>$user
        ]);
    }
}
