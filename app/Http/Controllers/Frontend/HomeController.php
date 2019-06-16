<?php

namespace App\Http\Controllers\Frontend;


use App\Models\Auth\Rides\Ride;
use FarhanWazir\GoogleMaps\GMaps;
use App\Http\Controllers\Controller;

/**
 * Class HomeController.
 */
class HomeController extends Controller
{
    /**
     * @return \Illuminate\View\View
     */
    public function index()
    {
       
        $rides = Ride::all();


        return view('frontend.index')->with(['rides' => $rides]);
    }
}
