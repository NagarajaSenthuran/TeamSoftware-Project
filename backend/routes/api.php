<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\VehicleController;
use App\Http\Controllers\BookingController;

Route::group([
    'middleware' => 'api',
    'prefix' => 'auth'

], function ($router) {
    Route::post('login', 'AuthController@login');
    Route::post('register', 'AuthController@register');
    Route::post('logout', 'AuthController@logout');
    Route::post('refresh', 'AuthController@refresh');
    Route::get('user-profile', 'AuthController@userProfile');
});


//vehicle
Route::post('vehicles', [ VehicleController::class, 'addVehicle']);
Route::get('vehicles', [ VehicleController::class, 'getAllVehicle']);
Route::get('vehicles/{id}', [ VehicleController::class, 'getVehicle']);
Route::put('vehicles', [ VehicleController::class, 'updateVehicle']);
Route::delete('vehicles/{id}', [ VehicleController::class, 'deleteVehicle']);

//booking
Route::post('bookings', [ BookingController::class, 'store']);
Route::get('bookings', [ BookingController::class, 'index']);
Route::get('bookings/{id}', [ BookingController::class, 'getbyId']);
Route::put('bookings', [ BookingController::class, 'updateVehicle']);
Route::delete('bookings/{id}', [ BookingController::class, 'deleteVehicle']);