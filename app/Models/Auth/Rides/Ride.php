<?php

namespace App\Models\Auth\Rides;

use App\Models\Traits\Uuid;
use Illuminate\Database\Eloquent\Model;
use App\Models\Auth\Rides\Traits\Method\RideMethod;
use App\Models\Auth\Rides\Traits\Relationship\RideRelationship;





/**
 * Class RideRequest.
 */
class Ride extends Model
{
    use RideRelationship, Uuid, RideMethod;


    /**
     * The database table used by the model.
     *
     * @var string
     */


    protected $table = 'rides';


    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */



    protected $fillable = [
        'ride_name',
        'ride_notes',
        'slug',
        'user_id',
        'stauts',
        'passengers',
        'driver_id',
        'driver_name',
        'driver_phone',
        'creator_name',
        'creator_phone',
        'pickup_location',
        'dropoff_location',
        'available_seats',
        'max_seats',
        'ride_price',
        /* 'pickup_location_latitude',
        'pickup_location_longitude',
        'dropoff_location_latitude',
        'dropoff_location_longitude', */
       /*  ,
        'pickup_time',
        'scheduled', */
        'scheduled_pickup_time',
        'estimated_fare',
        'calculated_fare',
        'total_distance',
        'travel_time',
        'fare_split',
       /*  'accepted_by_driver',
        'canceled_by_driver',
        'confirmed_pickup_by_driver',
        'confirmed_dropoff_by_driver', */
      /*   'confirmed_pickup',
        'confirmed_dropoff', */
       /*  'payment_sent', */
        /* 'transaction_id', */
        'canceled',
        'cancel_reason',
        /* 'allow_others',
        'accepted_terms', */
        'completed',
        'rating',
        'last_updated',
    ];


    
    /**
     * Auto update created_at and updated_at
     *
     * @var array
     */


    public $timestamps = true;
}
