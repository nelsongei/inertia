<?php

use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\CustomerController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\ItemController;
use App\Http\Controllers\UserController;
use App\Models\User;
use Illuminate\Support\Facades\Request;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/


Route::get('login',[LoginController::class,'create'])->name('login');
Route::post('login',[LoginController::class,'store']);
Route::post('logout',[LoginController::class,'destroy'])->middleware('auth');
Route::middleware('auth')->group(function () {
    Route::get('/dashboard', DashboardController::class)->name('dashboard');
    Route::get('/customers',[CustomerController::class,'index'])->name('customers');
    Route::post('/customers',[CustomerController::class,'store']);
    Route::get('/customers/create',[CustomerController::class,'create'])->name('customers.create');
    Route::get('customers/{customer}/edit',[CustomerController::class,'edit'])->name('customers.edit');
    Route::get('/items',[ItemController::class,'index'])->name('items');
    Route::get('/items/create',[ItemController::class,'create']);


    Route::get('/', function () {
        return Inertia::render('Home');
    });
    Route::get('/users', [UserController::class,'index']);
    Route::get('/users/create', function () {
        return Inertia::render('Users/Create');
    })->can('create','App\Models\User');
    Route::post('/users', function () {
        //validate
        $attributes = Request::validate([
            'name' => 'required',
            'email' => ['required', 'email', 'unique:users'],
            'password' => ['required', 'min:6']
        ]);
        //create
        User::create($attributes);
        //redirect
        return redirect('/users');
    });
    Route::get('/settings', function () {
        return Inertia::render('Settings');
    });
});
