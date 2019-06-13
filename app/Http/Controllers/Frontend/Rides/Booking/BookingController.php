<?php

namespace App\Http\Controllers\Frontend\Rides\Booking;


use App\Models\Auth\User;
use App\Models\Auth\Rides\Ride;
use FarhanWazir\GoogleMaps\GMaps;
use App\Http\Controllers\Controller;
use App\Models\Auth\Accounts\Account;
use App\Models\Auth\Amenities\Amenity;
use Illuminate\Support\Facades\Session;
use App\Models\Auth\TimeOptions\TimeOption;
use App\Models\Auth\PriceOptions\PriceOption;
use App\Events\Frontend\Auth\Rides\RideCreated;
use App\Repositories\Frontend\Ride\RideRepository;
use App\Http\Requests\Frontend\Rides\CreateRideRequest;
use App\Http\Requests\Frontend\Session\RideSessionRequest;

/**
 * Class BookingController.
 */
class BookingController extends Controller
{





    /**
     * @return \Illuminate\View\View
     */
    public function index()
    {
        $map = new GMaps();
        $mapConfig['center'] = 'auto';
        $mapConfig['zoom'] = '14';
        $mapConfig['map_height'] = '500px';
        $mapConfig['geocodeCaching'] = true;
        $mapConfig['places'] = TRUE;
        $mapConfig['placesAutocompleteBoundsMap'] = TRUE; // set results biased towards the maps viewport
        $mapConfig['placesAutocompleteInputID'] = 'pickup_location_input';
        $mapConfig['placesAutocompleteOnChange'] = 'createMarker_map({ map: map, position:event.latLng });';
        $mapConfig['scrollwheel'] = false;
        $mapConfig['scaleControlPosition'] = 'BOTTOM_RIGHT';
        $map->initialize($mapConfig);
        $data['bookingMap'] =  $map->create_map();

        $priceOptions = PriceOption::all();
        $timeOptions = TimeOption::all();
        $amenities = Amenity::all();
        return view('frontend.user.account.ride')->with([
           'data' => $data,
           'priceOptions' => $priceOptions,
           'timeOptions' => $timeOptions,
           'amenities' => $amenities
        ]);
    }





    /**
     * @return Illuminate\Routing\Redirector::route
     */
    public function storeSessionData(RideSessionRequest $request)
    {

        $rideRequestSessionData = $request->only('pickup_location', 'dropoff_location', 'request_date');

        Session::put('rideRequestSessionData', $rideRequestSessionData);



        return redirect()->route('frontend.user.booking.index');
    }


    public function listAllRides()
    {

        $rides = Ride::all();
        $places = array();
        $rideLocations = array();




        foreach ($rides as $ride) {

            $dropoff_location = $ride->dropoff_location;
            $location_array = explode(',', $dropoff_location);
            $city = $location_array[1];
            $state = $location_array[2];


            $places[] = $city . ',' . $state;
        }

        foreach ($places as $place) {
            

            $locations = Ride::where('dropoff_location', 'LIKE', '%' . $place . '%')->get();

            $placeCount = count($locations);

            $rideLocations[$place] = [
                'place' => $place,
                'count' => $placeCount,
            ];
        }

        


        return view('frontend.rides')->with([
            
            'rides' =>  $rides,
            'rideLocations' => $rideLocations,
        
        
        ]);
    }
}
