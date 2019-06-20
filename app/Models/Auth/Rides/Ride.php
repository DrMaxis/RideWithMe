<?php

namespace App\Models\Auth\Rides;

use App\Models\Traits\Uuid;
use Illuminate\Database\Eloquent\Model;
use App\Models\Auth\Rides\Traits\Method\RideMethod;
use App\Models\Auth\Rides\Traits\Relationship\RideRelationship;
use App\Models\Auth\Rides\Traits\Attribute\RideAttribute;

/**
 * Class RideRequest.
 */
class Ride extends Model
{
    use RideRelationship, Uuid, RideMethod, RideAttribute;


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
        'confirmation_code',
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
        'leave_time',
        'car_id', 
        'scheduled_time',
        'scheduled_date',
        'luggage_space_needed',
        'luggage_space_available',
        'asking_price_option',
        'asking_price_offer',
        'child_seats',
        'pickups_offerd',
        'pickups_needed',
        'pickup_price',
        'seats_needed',
        'estimated_fare',
        'calculated_fare',
        'total_distance',
        'travel_time',
        'fare_split',
        'canceled',
        'cancel_reason',
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
