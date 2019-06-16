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
use App\Models\Auth\AmenityRide\AmenityRide;
use App\Events\Frontend\Auth\Rides\RideConfirmed;
use App\Models\Auth\RidePassengers\RidePassenger;

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
                    'confirmation_code' => md5(uniqid(mt_rand(), true)),
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
                    'slug' => slugify($data['pickupLocation'] . ' to ' . $data['dropoffLocation']) . '-' . $now,
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
                    'confirmation_code' => md5(uniqid(mt_rand(), true)),


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
                ]);
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


    public function joinAsPassenger($id, array $input)
    {

        $ride = Ride::find($id);
        $user = User::where('phone_number', '=', $input['passenger_phone_number'])->first();

        if ($ride->available_seats > 0) {
            $seats = $ride->available_seats - 1;
        } else {
            $seats = 0;
        }

        $ride->available_seats = $seats;

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
        ]);

        return $ride->save();
    }



    public function joinAsDriver($id, array $input)
    {


        $ride = Ride::where('id', '=', $id)->first();
        $user = auth()->user();
        $ride->driver_id = $user->id;
        $ride->driver_name = $user->name;
        $ride->driver_phone = $user->phone_number;
        $ride->leave_time = $input['leave_time'];
        $ride->ride_price = calculateRidePrice($ride->estimated_fare, $input['price_option']);
        $ride->max_seats = $input['available_seats'];
        $ride->car_id = $input['car_id'];
        RideUser::create([
            'user_id' => $user->id,
            'ride_id' => $ride->id,
        ]);




        return $ride->save();
    }
    


    /**
     * @param $code
     *
     * @throws GeneralException
     * @return bool
     */
    public function confirm($code, $user)
    {
        
        $ride = $this->findByConfirmationCode($code);
        $passenger = RidePassenger::where('user_id', '=', $user->id)->where('ride_id', '=', $ride->id)->first();

        if ($passenger->confirmed === true) {
            throw new GeneralException(__('exceptions.frontend.auth.confirmation.already_confirmed'));
        }

        if ($ride->confirmation_code === $code) {
            $passenger->confirmed = true;

            event(new RideConfirmed($ride, $user));

            return $passenger->save();
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
        $ride = $this->model
            ->where('confirmation_code', $code)
            ->first();

        if ($ride instanceof $this->model) {
            return $ride;
        }

        throw new GeneralException(__('exceptions.backend.access.users.not_found'));
    }


}
