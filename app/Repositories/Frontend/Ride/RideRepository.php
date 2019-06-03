<?php

namespace App\Repositories\Frontend\Ride;


use Carbon\Carbon;

use App\Models\Auth\Rides\Ride;
use Illuminate\Support\Facades\DB;
use App\Exceptions\GeneralException;
use App\Repositories\BaseRepository;
use App\Models\Auth\RideUser\RideUser;


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

            if ($data['option'] == 'Driver') {
                $ride = parent::create([
                    'ride_name' => $data['ride_name'],
                    'ride_notes' => $data['ride_notes'],
                    'slug' => slugify($data['ride_name']),
                    'user_id' => $user->id,
                    'driver_id' => $user->uuid,
                    'driver_name' => $user->name,
                    'driver_phone' => $user->phone_number,
                    'creator_name' => $user->name,
                    'creator_phone' => $user->phone_number,
                    'pickup_location' => $data['pickup_location'],
                    'dropoff_location' => $data['dropoff_location'],
                    'scheduled_pickup_time' => $data['request_date'] ?? $now,
                    'total_distance' => $data['total_distance'] / 1000,
                    'travel_time' => $data['travel_time'] / 60,

                ]);

                RideUser::create([
                    'user_id' => $user->id,
                    'ride_id' => $ride->id,
                ]);
            } elseif ($data['option'] == 'Passenger') {
                $ride = parent::create([
                    'ride_name' => $data['ride_name'],
                    'ride_notes' => $data['ride_notes'],
                    'slug' => slugify($data['ride_name']),
                    'user_id' => $user->id,
                    'creator_name' => $user->name,
                    'creator_phone' => $user->phone_number,
                    'passengers' => json_encode($user->uuid),
                    'pickup_location' => $data['pickup_location'],
                    'dropoff_location' => $data['dropoff_location'],
                    'scheduled_pickup_time' => $data['request_date'] ?? $now,
                    'total_distance' => $data['total_distance'] / 1000,
                    'travel_time' => $data['travel_time'] / 60,

                ]);

                RideUser::create([
                    'user_id' => $user->id,
                    'ride_id' => $ride->id,
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
  

    public function update($id, array $input)
    {

    
        $ride = Ride::where('id','=',$id)->first();
        $user = User::where('phone_number','=', $input['passenger_phone_number'])->first();

        if($ride->passengers) {
            $ridePassengers = $ride->passengers;
            $addedPassenger = $user->uuid;
            $passengers = json_encode($ridePassengers.$addedPassenger);
        } 

        if($ride->available_seats > 0 ) {
            $seats = $ride->available_seats - 1; 
        } else {
            $seats = 0;
        }

        $ride->passengers = $passengers;
        $ride->available_seats = $seats;

        RideUser::create([
            'user_id' => $user->id,
            'ride_id' => $ride->id,
        ]);
  


        return $ride->save();
    }
}
