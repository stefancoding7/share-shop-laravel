<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function register(Request $request)
    {
        $fields = $request->validate([
            'name' => 'required|string',
            'email' => 'required|string|unique:users,email',
            'password' => 'required|string|confirmed'
        ]);

        $user = User::create([
            'name' => $fields['name'],
            'email' => $fields['email'],
            'password' => bcrypt($fields['password'])
        ]);

        $token = $user->createToken('shareShopToken')->plainTextToken;

        $response = [
            'user' => $user,
            'token' => $token
        ];

        return response($response, 201);
    }

    

    public function login(Request $request)
    {
        $fields = $request->validate([
            
            'email' => 'required|string',
            'password' => 'required|string'
        ]);

       $user = User::where('email', $fields['email'])->first();

        if(!$user || !Hash::check($fields['password'], $user->password)) {
            return response([
                'message' => 'No mutches'
            ], 401);
        } 

        $token = $user->createToken('shareShopToken')->plainTextToken;

        $response = [
            'user' => Auth::id(),
            'token' => $token
        ];

        

        return response($response, 201);
    }

    public function logout(Request $request) {
        $authUser = Auth::user();

        if($authUser) {
            $authUser->tokens()->delete();
            return [
                'message' => 'Logged Out',
                'user' => $authUser
            ];
        } else {
            return response() ->json([
                'message' => 'User not found'
            ]);
        }

        // return response()->json([
        //     'message' => 'okey'
        // ]);
     
        
    }
}
