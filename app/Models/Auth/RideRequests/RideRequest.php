<?php

namespace App\Models\Auth\RideRequests;

use App\Models\Traits\Uuid;
use Illuminate\Database\Eloquent\Model;
use App\Models\Auth\RideRequests\Traits\Method\RideRequestMethod;
use App\Models\Auth\RideRequests\Traits\Relationship\RideRequestRelationship;





/**
 * Class RideRequest.
 */
class RideRequest extends Model
{
    use RideRequestRelationship, Uuid, RideRequestMethod;


    /**
     * The database table used by the model.
     *
     * @var string
     */


    protected $table = 'ride_requests';


    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */



    protected $fillable = [

        'account_id',
        'stauts',
        'driver',
        'passenger',
        'request_creator',
        'passengers',
        'passenger_phone',
        'driver_phone',
        'pickup_location',
        'dropoff_location',
        'pickup_location_latitude',
        'pickup_location_longitude',
        'dropoff_location_latitude',
        'dropoff_location_longitude',
        'passenger_count',
        'pickup_time',
        'scheduled',
        'scheduled_pickup_time',
        'estimated_fare',
        'calculated_fare',
        'total_distance',
        'fare_split',
        'accepted_by_driver',
        'canceled_by_driver',
        'confirmed_pickup_by_driver',
        'confirmed_dropoff_by_driver',
        'confirmed_pickup',
        'confirmed_dropoff',
        'payment_sent',
        'transaction_id',
        'canceled',
        'cancel_reason',
        'accepted_terms',
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
