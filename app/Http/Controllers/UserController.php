<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Request;
use Inertia\Inertia;


class UserController extends Controller
{
    //
    public function index()
    {
        return Inertia::render('Users/Index', [
            'users' => User::query()
                ->when(Request::input('search'), function ($query, $search) {
                    $query->where('firstname', 'like', "%{$search}%");
                })
                ->paginate(10)
                ->withQueryString()
                ->through(fn($user) => [
                    'id' => $user->id,
                    'firstname' => $user->firstname,
                    'lastname'=>$user->lastname,
                    'email'=>$user->email,
                    'can'=>[
                        'edit'=>Auth::user()->can('edit',$user)
                    ]
                ]),
            'filters' => Request::only(['search']),
            'can'=>[
                'createUser'=>Auth::user()->can('create',User::class)
            ]
        ]);
    }
}
