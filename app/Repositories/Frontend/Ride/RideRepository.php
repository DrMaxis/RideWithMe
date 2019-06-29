<?php

namespace App\Repositories\Frontend\Ride;


use Carbon\Carbon;

use App\Models\Auth\User;
use App\Models\Auth\Rides\Ride;
use Illuminate\Support\Facades\DB;
use App\Exceptions\GeneralException;
use App\Repositories\BaseRepository;
use App\Models\Auth\Amenities\Amenity;
use App\Models\Auth\RideUser\RideUser;
use App\Models\Auth\RidePickups\RidePickup;
use App\Models\Auth\AmenityRide\AmenityRide;
use App\Events\Frontend\Auth\Rides\RideConfirmed;
use App\Models\Auth\RidePassengers\RidePassenger;
use App\Events\Frontend\Auth\Rides\PassengerConfirmed;

/**
 * Class RideRepository.
 */
class RideRepository extends BaseRepository
{
    /**
     * @return string
     */
    public function model()
    {
        return Ride::class;
    }


    /**
     * @param $uuid
     *
     * @throws GeneralException
     * @return mixed
     */
    public function findByUuid($uuid)
    {
        $ride = $this->model
            ->uuid($uuid)
            ->first();

        if ($ride instanceof $this->model) {
            return $ride;
        }

        throw new GeneralException('Ride not found');
    }



    /**
     * @param array $data
     *
     * @throws \Exception
     * @throws \Throwable
     * @return \Illuminate\Database\Eloquent\Model|mixed
     */
    public function create(array $data)
    {



        return DB::transaction(function () use ($data) {
            $user = auth()->user();
            $now = Carbon::now()->toDateTimeString();

            if ($data['rideOption'] == 'Driver') {
                $ride = parent::create([
                    'ride_notes' => $data['rideNotes'],
                    'slug' =>  slugify($data['pickupLocation'] . ' to ' . $data['dropoffLocation']) . '-' . mt_rand(),
                    'user_id' => $user->id,
                    'driver_id' => $user->id,
                    'driver_name' => $user->name,
                    'driver_phone' => $user->phone_number,
                    'creator_name' => $user->name,
                    'creator_phone' => $user->phone_number,
                    'pickup_location' => $data['pickupLocation'],
                    'dropoff_location' => $data['dropoffLocation'],
                    'scheduled_time' => $data['scheduledTime'],
                    'scheduled_date' => $data['scheduledDate'],
                    'total_distance' => $data['totalDistance'] / 1000,
                    'travel_time' => $data['travelTime'] / 60,
                    'available_seats' => $data['availableSeats'],
                    'max_seats' => $data['availableSeats'],
                    'asking_price_option' =>  $data['askingPriceOption'] ?? null,
                    'asking_price_offer' =>   $data['askingPriceOffer'] ?? 0.00,
                    'car_id' => $data['car'],
                    'luggage_space_available' => $data['luggageSpaceAvailable'],
                    'pickup_price' => $data['pickupPrice'],
                    'pickups_offerd' => $data['pickupsOfferd']



                ]);

                foreach ($data['ameninityOptions'] as $option) {
                    $amenity = Amenity::where('uuid', '=', $option)->first();

                    AmenityRide::create([
                        'amenity_id' => $amenity->id,
                        'ride_id' => $ride->id,
                    ]);
                }

                RideUser::create([
                    'user_id' => $user->id,
                    'ride_id' => $ride->id,
                ]);
            } elseif ($data['rideOption'] == 'Passenger') {
                $ride = parent::create([
                    'ride_notes' => $data['rideNotes'],
                    'slug' => slugify($data['pickupLocation'] . ' to ' . $data['dropoffLocation']) . '-' . mt_rand(),
                    'user_id' => $user->id,
                    'creator_name' => $user->name,
                    'creator_phone' => $user->phone_number,
                    'pickup_location' => $data['pickupLocation'],
                    'dropoff_location' => $data['dropoffLocation'],
                    'scheduled_time' => $data['scheduledTime'],
                    'scheduled_date' => $data['scheduledDate'],
                    'total_distance' => $data['totalDistance'] / 1000,
                    'travel_time' => $data['travelTime'] / 60,
                    'asking_price_option' =>  $data['askingPriceOption'] ?? null,
                    'asking_price_offer' =>   $data['askingPriceOffer'] ?? 0.00,
                    'luggage_space_needed' => $data['luggageSpaceNeeded'],
                    'child_seats' => $data['childSeatsNeeded'],
                    'seats_needed' => $data['seatsNeeded'],
                    'pickups_needed' => 1,


                ]);

                RideUser::create([
                    'user_id' => $user->id,
                    'ride_id' => $ride->id,
                ]);

                RidePassenger::create([
                    'user_id' => $user->uuid,
                    'ride_id' => $ride->id,
                    'passenger_name' => $user->name,
                    'passenger_email' => $user->email,
                    'phone_number' => $user->phone_number,
                    'confirmation_code' => generateSixDigitCode(4),
                    
                ]);
               /*  $this->sendRideConfirmation($ride, $user); */
            } else {
                throw new GeneralException('An Ride option must be selected');
            }



            // account created event

            /*   throw new GeneralException('Bank Account not found'); */
            // Return the user object
            return $ride;
        });
    }




    /**
     * @param       $id
     * @param array $input
     * @param bool|UploadedFile  $image
     *
     * @throws GeneralException
     * @return array|bool
     */ /* ;*/
    public function joinAsPassenger(Ride $ride, array $input, $passengerID)
    {


        $user = User::where('id', '=', $passengerID)->first();

        if ($ride->available_seats > 0) {
            $seats = $ride->available_seats - $input['seatsNeeded'];
        } else {
            $seats = 0;
        }

        $ride->available_seats = $seats;

        RideUser::create([
            'user_id' => $user->id,
            'ride_id' => $ride->id,
        ]);

        $passenger = RidePassenger::create([
            'user_id' => $user->uuid,
            'ride_id' => $ride->id,
            'passenger_name' => $user->name,
            'passenger_email' => $user->email,
            'phone_number' => $user->phone_number,
            'confirmation_code' => generateSixDigitCode(4),
        ]);

        if ($input['pickupLocation']) {

            RidePickup::create([
                'ride_id' => $ride->id,
                'user_id' => $passengerID,
                'pickup_location' => $input['pickupLocation'],
                'seats_needed' => $input['seatsNeeded'],
                'luggage_space_needed' => $input['luggageSpaceNeeded'],
                'pickup_price' => $ride->pickup_price ?? 0.00,
                'passenger' => auth()->user()->uuid,

            ]);
        } else {

            RidePickup::create([
                'ride_id' => $ride->id,
                'user_id' => $passengerID,
                'pickup_location' => $ride->pickup_location,
                'seats_needed' => $input['seatsNeeded'],
                'luggage_space_needed' => $input['luggageSpaceNeeded'],
                'pickup_price' => $ride->pickup_price ?? 0.00,
                'passenger' => auth()->user()->uuid,

            ]);
        }
        //send ride passenenger confirmation
      /*   $this->sendRideConfirmation($ride, $passenger); */
        //Send Notification to Driver that a passenger has joined.
        $this->sendPassengerJoinToDriver($ride, $passenger);

        return $ride->save();
    }




    public function joinAsDriver(Ride $ride, array $input, $driverID)
    {
        $user = User::where('id', '=', $driverID)->first();
        $ride->driver_id = $user->id;
        $ride->driver_name = $user->name;
        $ride->driver_phone = $user->phone_number;
        $ride->driver_arrive_time = $input['driverArrivalTime'];
        $ride->car_id = $input['car_id'];

        RideUser::create([
            'user_id' => $user->id,
            'ride_id' => $ride->id,
        ]);
        RidePickup::create([
            'ride_id' => $ride->id,
            'user_id' => $ride->user_id,
            'pickup_location' => $ride->pickup_location,
            'pickup_price' => $ride->pickup_price ?? 0.00,
            'passenger' => User::where('id', '=', $ride->user_id)->first()->uuid,
            'seats_needed' => $ride->seats_needed,
            'luggage_space_needed' => $ride->luggage_space_needed

        ]);



        //send Notification to Ride Creator that a driver has joined
        $this->sendDriverJoinToRequestor($ride->creator, $user, $ride);
        return $ride->save();
    }


    public function sendRideConfirmation($ride, $passenger)
    {
        

        $code = $passenger->confirmation_code;
        $client = app('Nexmo\Client');
        $client->message()->send([
            'to' => $passenger->phone_number,
            'from' => env('BUISNESS_PHONE_NUMBER'),
            'text' => 'You have Joined a Ride on RideWithMe'.$code .'  Please Visit'.route('frontend.user.ride.show', $ride->slug) . ' to confirm and verify your existance on the ride!',
        ]);


        return $client;
    }

    public function sendPassengerJoinToDriver($ride, $passenger)
    {
        
        if ($ride->driver) {
            
            $driver = User::where('id', '=', $ride->driver_id)->first();
            $client = app('Nexmo\Client');
            $client->message()->send([
                'to' => $driver->phone_number,
                'from' => env('BUISNESS_PHONE_NUMBER'),
                'text' =>  $passenger->name . ' Has Joined Your Ride to' . $ride->dropoff_location . ' Scheduled For ' . $ride->scheduled_date . ' Please make sure to verfify that this passenger is on your ride before leaving the pickup location.',
            ]);
            return $client;
        } else {
            throw new GeneralException('A Driver is not present on this ride!');
        }
    }

    public function sendDriverJoinToRequestor($creator, $driver, $ride)
    {

        $client = app('Nexmo\Client');
        $client->message()->send([
            'to' => $creator->phone_number,
            'from' => env('BUISNESS_PHONE_NUMBER'),
            'text' => $driver->name . 'Has Accpeted and Joined Your Ride Request to' . $ride->dropoff_location . ' And has determined that they will arrive at' . $ride->driver_arrive_time . ' Please Make sure to be at the pickup location at the designated time.',
        ]);

        return $client;
    }
    /**
     * @param $code
     *
     * @throws GeneralException
     * @return bool
     */
    public function confirmPassenger($code, $passenger)
    {

        $ridePassenger = $this->findByConfirmationCode($code);
        $ride = Ride::where('id', '=', $ridePassenger->ride_id)->first();
        $now = Carbon::now()->toDateTimeString();
        if ($ridePassenger->confirmed === true) {
            throw new GeneralException(__('exceptions.frontend.auth.confirmation.already_confirmed'));
        }

        if ($ridePassenger->confirmation_code === $code) {
            $ridePassenger->confirmed = true;
            $ridePassenger->confirmation_code = 'Confirmed at ' . $now;

            event(new PassengerConfirmed($ride, $passenger));


            return $ridePassenger->save();
        }

        throw new GeneralException(__('exceptions.frontend.auth.confirmation.mismatch'));
    }





    /**
     * @param $code
     *
     * @throws GeneralException
     * @return mixed
     */
    public function findByConfirmationCode($code)
    {
        $passenger = RidePassenger::where('confirmation_code', '=', $code)->first();

        if ($passenger) {
            return $passenger;
        } else {
            throw new GeneralException(__('exceptions.backend.access.users.not_found'));
        }
    }
}
