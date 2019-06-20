<?php

use App\Http\Controllers\Frontend\HomeController;
use App\Http\Controllers\Frontend\ContactController;
use App\Http\Controllers\Frontend\User\CarController;
use App\Http\Controllers\Frontend\Rides\RideController;
use App\Http\Controllers\Frontend\User\AccountController;
use App\Http\Controllers\Frontend\User\ProfileController;
use App\Http\Controllers\Frontend\User\DashboardController;
use App\Http\Controllers\Frontend\Rides\Booking\BookingController;


/*
 * Frontend Controllers
 * All route names are prefixed with 'frontend.'.
 */
Route::get('/', [HomeController::class, 'index'])->name('index');
Route::get('contact', [ContactController::class, 'index'])->name('contact');
Route::post('contact/send', [ContactController::class, 'send'])->name('contact.send');
Route::get('rides', [BookingController::class, 'rides'])->name('rides.index');








/*
 * These frontend controllers require the user to be logged in
 * All route names are prefixed with 'frontend.'
 * These routes can not be hit if the password is expired
 */
Route::group(['middleware' => ['auth', 'password_expires']], function () {
    Route::group(['namespace' => 'User', 'as' => 'user.'], function () {
        // User Dashboard Specific
        Route::get('dashboard', [DashboardController::class, 'index'])->name('dashboard');

        // User Account Specific
        Route::get('account', [AccountController::class, 'index'])->name('account');
        Route::get('account/settings', [AccountController::class, 'settings'])->name('account.settings');
        // View All Cars
        Route::get('/user/cars', [CarController::class, 'showCars'])->name('account.cars.index');
        Route::post('account/settings/car/save', [CarController::class, 'save'])->name('account.settings.car.save');
        Route::delete('account/settings/{car}/delete', [CarController::class, 'delete'])->name('account.settings.car.delete');
        Route::patch('account/settings/{car}/update', [CarController::class, 'update'])->name('account.settings.car.update');
        Route::post('account/settings/location/save', [AccountController::class, 'saveBaseLocation'])->name('account.settings.baseLocation.save');
        Route::get('/booking', [BookingController::class, 'index'])->name('account.booking');

        // User Profile Specific
        Route::patch('profile/update', [ProfileController::class, 'update'])->name('profile.update');

// Homepage Request Form
Route::post('/booking/session/request', [BookingController::class, 'storeSessionData'])->name('ride.session.request');
// Booking Page
/* 
Route::get('ride/confirm/{token}', [ConfirmRideController::class, 'confirm'])->name('ride.confirm'); */

//Submit Ride
Route::post('/ride/submit', [RideController::class, 'createRide'])->name('ride.create');
//Single Ride
Route::get('/rides/{ride}', [RideController::class, 'index'])->name('ride.show');
//Join as a Passenger
Route::post('/{ride}/passenger/join', [RideController::class, 'joinAsPassenger'])->name('ride.passenger.join');
//Join as A Driver
Route::post('/{ride}/driver/join', [RideController::class, 'joinAsDriver'])->name('ride.driver.join');




    });
});
