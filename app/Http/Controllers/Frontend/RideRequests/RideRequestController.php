<?php

namespace App\Http\Controllers\Frontend\RideRequests;


use App\Models\Auth\User;
use App\Models\Auth\Rides\Ride;
use FarhanWazir\GoogleMaps\GMaps;
use App\Http\Controllers\Controller;
use App\Models\Auth\Accounts\Account;
use Illuminate\Support\Facades\Session;
use App\Events\Frontend\Auth\Rides\RideCreated;
use App\Repositories\Frontend\Ride\RideRepository;
use App\Http\Requests\Frontend\Rides\CreateRideRequest;
use App\Http\Requests\Frontend\Session\RideSessionRequest;

/**
 * Class RideRequestController.
 */
class RideRequestController extends Controller
{



    /**
     * @var RideRepository
     */
    protected $rideRepository;

    /**
     * RideRequestController constructor.
     *
     * @param RideRepository $rideRepository
     */
    public function __construct(RideRepository $rideRepository)
    {
        $this->rideRepository = $rideRepository;
    }


    /**
     * Where to redirect users after login.
     *
     * @return string
     */
    public function redirectPath($slug)
    {
        return single_ride($slug);
    }



    /**
     * @return \Illuminate\View\View
     */
    public function index()
    {



        $map = new GMaps();




        //To Location Map
        $map_3_config['center'] = session()->get('rideRequestSessionData')['pickup_location'] ?? 'Accra, Ghana';
        $map_3_config['zoom'] = '14';
        $map_3_config['map_height'] = '500px';
        $map_3_config['geocodeCaching'] = true;
        $map_3_config['places'] = TRUE;
        $map_3_config['placesAutocompleteBoundsMap'] = TRUE; // set results biased towards the maps viewport
        $map_3_config['placesAutocompleteInputID'] = 'pickup_location_input';
        $map_3_config['placesAutocompleteOnChange'] = 'createMarker_map({ map: map, position:event.latLng });';
        $map_3_config['scrollwheel'] = false;
        /*   $map_3_config['map_div_id'] = 'map_canvas_one'; */
        $map_3_config['scaleControlPosition'] = 'BOTTOM_RIGHT';



        $map->initialize($map_3_config);
        $data['bookingMap'] =  $map->create_map();


        return view('frontend.booking')->with('data', $data);
    }






    public function storeSessionData(RideSessionRequest $request)
    {

        $rideRequestSessionData = $request->only('passenger_name', 'phone_number', 'pickup_location', 'dropoff_location', 'request_date');

        Session::put('rideRequestSessionData', $rideRequestSessionData);

        /* dd(Session::get('rideRequestSessionData')); */

        return redirect()->route('frontend.booking.index');
    }


    public function createRide(CreateRideRequest $request)
    {

        $data = $request->only('ride_name', 'ride_notes', 'pickup_location', 'dropoff_location', 'request_date', 'total_distance', 'travel_time');

        $ride = $this->rideRepository->create($data);

        event(new RideCreated($ride));
        return redirect($this->redirectPath($ride->slug));
    }

    public function show($slug)
    {
$ride = Ride::where('slug', '=', $slug)->first();

        $map = new GMaps();
        $mapConfig['center'] = $ride->pickup_location ?? 'Accra, Ghana';
        $mapConfig['zoom'] = '14';
        $mapConfig['map_height'] = '500px';
        $mapConfig['geocodeCaching'] = true;
        $mapConfig['directions'] = TRUE;
        $mapConfig['directionsStart'] = $ride->pickup_location;
        $mapConfig['directionsEnd'] = $ride->dropoff_location;
        $mapConfig['directionsDivID'] = 'directionsDiv';
        $mapConfig['scrollwheel'] = false;
        $mapConfig['scaleControlPosition'] = 'BOTTOM_RIGHT';
        $map->initialize($mapConfig);
        $rideMap =  $map->create_map();


        

        $passengers = $ride->users;

        $ride_creator = User::find($ride->user_id)->first();
        $ride_driver = User::where('uuid', '=', $ride->driver)->first();

       $rideData = array('passengers' => $passengers, 'rideCreator' => $ride_creator);

      /*  dd($rideData); */

        return view('frontend.singleRide')->with([
            'ride' => $ride,
           'ride_creator' => $ride_creator,
           'ride_driver' => $ride_driver,
           'passengers' => $passengers,
           'rideMap' => $rideMap
            
            ]);
    }
}
