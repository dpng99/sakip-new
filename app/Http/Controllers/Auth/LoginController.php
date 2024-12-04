<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use Inertia\Response;
use App\Models\User;

class LoginController extends Controller
{
    // Render the login page using Inertia and React
    public function create(): Response
    {
        return Inertia::render('Auth/Login', [
            'canResetPassword' => Route::has('password.request'),
            'status' => session('status'),
        ]);
    }

    // Login logic
    public function login(Request $request)
    {
        // Validate incoming request
        $request->validate([
            'id_satker' => 'required|string',
            'password' => 'required|string',
        ]);

        // Map password to password for Auth::attempt to work correctly
        $credentials = [
            'id_satker' => $request->id_satker,
            'password' => $request->password,
        ];

        // Attempt login with id_satker and password (hashed in the database)
        if (Auth::attempt($credentials)) {
            $user = Auth::User();
            
            // Generate token for session handling
            $token = $user->generateToken();
            
            return Inertia::render('Dashboard', [
                'userdata' => $user->satkernama,
            ]);
          
        }

        // If login fails, return unauthorized error
        return response()->json(['error' => 'Unauthorized'], 401);
    }

    // Logout logic
    public function logout(Request $request)
    {
        $user = Auth::user();
        
        // Clear the token if the user is authenticated
        if ($user) {
            $user->clearToken();
        }

        // Return successful logout response
        return response()->json(['message' => 'Logged out successfully']);
    }
}
