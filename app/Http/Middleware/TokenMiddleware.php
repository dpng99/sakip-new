<?php

namespace App\Http\Middleware;

use App\Models\User;
use Closure;
use Illuminate\Http\Request;
use Illuminate\Routing\Events\ResponsePrepared;
use Symfony\Component\HttpFoundation\Response;

class TokenMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        $token = $request->header('Authorization');
        if(!$token){
            return response()->json(['error' => 'Unauthorized'], 401);
        }
        $user = User::where('token', $token)->first();
        if(!$user){
            return response()->json(['error' => 'Unauthorized'], 401);
        }
        auth()->login($user);
        return $next($request);
    }
}
