<?php

use App\Http\Controllers\Frontend\HomeController;
use App\Http\Controllers\Frontend\ContactController;
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
Route::get('rides', [BookingController::class, 'listAllRides'])->name('rides.all');








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

        // User Profile Specific
        Route::patch('profile/update', [ProfileController::class, 'update'])->name('profile.update');


Route::post('/booking/session/request', [BookingController::class, 'storeSessionData'])->name('ride.session.request');
Route::get('/booking', [BookingController::class, 'index'])->name('booking.index');
Route::post('/ride/submit', [RideController::class, 'createRide'])->name('ride.create');
Route::get('/rides/{ride}', [RideController::class, 'index'])->name('ride.show');

Route::post('/{ride}/join', [RideController::class, 'joinAsPassenger'])->name('ride.passenger.join');


    });
});
