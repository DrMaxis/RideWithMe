<?php

namespace App\Http\Controllers\Frontend\RideRequests;


use FarhanWazir\GoogleMaps\GMaps;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Session;
use App\Http\Requests\Frontend\Session\RideSessionRequest;

/**
 * Class RideRequestController.
 */
class RideRequestController extends Controller
{
    /**
     * @return \Illuminate\View\View
     */
    public function index()
    {
       
        
   
        $map = new GMaps();
        

        

         //To Location Map
         $map_3_config['center'] = 'Kumasi, Ghana';
         $map_3_config['zoom'] = '14';
         $map_3_config['map_height'] = '500px';
         $map_3_config['geocodeCaching'] = true;
         $map_3_config['map_name'] = 'bookingMap';
         $map_3_config['places'] = TRUE;
         $map_3_config['placesAutocompleteBoundsMap'] = TRUE; // set results biased towards the maps viewport
         $map_3_config['scrollwheel'] = false;
         $map_3_config['map_div_id'] = 'map_canvas_one';
         $map_3_config['scaleControlPosition'] = 'BOTTOM_RIGHT';

    

         $map->initialize($map_3_config);
         $data['bookingMap'] =  $map->create_map();
       

        return view('frontend.booking')->with('data', $data);
    }


    public function storeSessionData(RideSessionRequest $request) {

        $rideRequestSessionData = $request->only('passenger_name', 'phone_number', 'pickup_location', 'dropoff_location', 'request_date');

        Session::put('rideRequestSessionData', $rideRequestSessionData);

        /* dd(Session::get('rideRequestSessionData')); */

        return redirect()->route('frontend.booking.index');

    }
}
