<?php

namespace App\Http\Controllers\Frontend\Rides;


use App\Models\Auth\User;
use App\Models\Auth\Rides\Ride;
use FarhanWazir\GoogleMaps\GMaps;
use App\Exceptions\GeneralException;
use App\Http\Controllers\Controller;
use App\Models\Auth\Accounts\Account;
use Illuminate\Support\Facades\Session;
use App\Events\Frontend\Auth\Rides\RideCreated;
use App\Events\Frontend\Auth\Rides\DriverJoined;
use App\Repositories\Frontend\Ride\RideRepository;
use App\Events\Frontend\Auth\Rides\PassengerJoined;
use App\Http\Requests\Frontend\Rides\CreateRideRequest;
use App\Http\Requests\Frontend\Session\RideSessionRequest;
use App\Http\Requests\Frontend\Rides\Passenger\JoinRideRequest;
use App\Http\Requests\Frontend\Rides\Driver\JoinAsDriverRequest;

/**
 * Class RideController.
 */
class RideController extends Controller
{



    /**
     * @var RideRepository
     */
    protected $rideRepository;

    /**
     * RideController constructor.
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
    public function index($slug) {
        
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
        $mapConfig['places'] = TRUE;
        $mapConfig['placesAutocompleteInputID'] = 'pickup_location_input';
        $mapConfig['scrollwheel'] = false;
        $mapConfig['scaleControlPosition'] = 'BOTTOM_RIGHT';
        $map->initialize($mapConfig);
        $rideMap =  $map->create_map();

/*         $autoCompleteInputMap['center'] = 'Ghana';
        $autoCompleteInputMap['geocodeCaching'] = true;
        $autoCompleteInputMap['places'] = TRUE;
        $autoCompleteInputMap['placesAutocompleteInputID'] = 'pickup_location_input'; */
       
/*       
        $map->initialize($autoCompleteInputMap);
        $autocompleteInput =  $map->create_map();
 */
      /*   $passengers = $ride->users->where('id', '!=', $ride->user_id); */
        $passengers = $ride->users;
        $ride_creator = User::where('id','=',$ride->user_id)->first();
        $ride_driver = User::where('uuid', '=', $ride->driver)->first();

       $rideData = array('passengers' => $passengers, 'rideCreator' => $ride_creator);

      /*  dd($rideData); */

        return view('frontend.singleRide')->with([
            'ride' => $ride,
           'ride_creator' => $ride_creator,
           'ride_driver' => $ride_driver,
           'passengers' => $passengers,
           'rideMap' => $rideMap,
           /* 'autocompleteInput' => $autocompleteInput */
            
            ]);
    }
    


 



    public function createRide(CreateRideRequest $request)
    {

        $data = $request->only(

        'pickupLocation',
        'dropoffLocation',
        'driverScheduledDateTime',
        'scheduledTime',
        'scheduledDate',
        'rideNotes',
        'rideOption',
        'travelTime' ,
        'totalDistance',
        'priceInput',
        'priceOffer',
        'availableSeats',
        'seatsNeeded',
        'car',
        'ameninityOptions',
        'luggageSpaceAvailable',
        'luggageSpaceNeeded',
        'childSeatsNeeded',
        'askingPriceOption',
        'askingPriceOffer',
        'pickupPrice',
        'pickupsOfferd'
    
    );

        $ride = $this->rideRepository->create($data);


        if($ride) {
              event(new RideCreated($ride));



return response()->json('Ride Created:'.$ride->name);
        } else {
            return response()->json(['errors'=>$ride->errors()->all()]);
        }
      
       
    }


    public function joinAsPassenger(JoinRideRequest $request, $slug)  {


        $passenger = auth()->user();
        $ride = Ride::where('slug','=', $slug)->first();
        $data = array('pickupLocation' => $request['pickupLocation'], 'seatsNeeded' => $request['seatsNeeded'], 'luggageSpaceNeeded' => $request['luggageSpaceNeeded']);


        $update = $this->rideRepository->joinAsPassenger($ride, $data, $passenger->id);



   if ($update) {
            event(new PassengerJoined($ride, $passenger));
        } else {
             //  Throw Exeception
            throw new GeneralException('Failed to add you to the ride');
        }

       

    
        return redirect()->back()->withFlashSuccess(__('You\'ve Been Added To this Ride'));


    } 

    public function joinAsDriver(JoinAsDriverRequest $request, $slug) {

        $driver = auth()->user();
        $ride = Ride::where('slug','=', $slug)->first();
        $data = $request->only('car_id','driverArrivalTime');
        $update = $this->rideRepository->joinAsDriver($ride, $data, $driver->id);

        if ($update) {
            event(new DriverJoined($ride, $driver));
        } else {
             //  Throw Exeception
            throw new GeneralException('Failed to add you to the ride');
        }

    }

  



}
