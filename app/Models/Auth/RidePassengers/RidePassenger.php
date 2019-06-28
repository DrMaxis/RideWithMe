<?php

namespace App\Models\Auth\RidePassengers;

use App\Models\Traits\Uuid;
use Illuminate\Database\Eloquent\Model;
use App\Models\Auth\RidePassengers\Traits\Relationship\RidePassengerRelationship;






/**
 * Class RidePassenger.
 */
class RidePassenger extends Model
{
    use RidePassengerRelationship, Uuid;


    /**
     * The database table used by the model.
     *
     * @var string
     */


    protected $table = 'ride_passengers';


    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */



    protected $fillable = [
       
        'user_id',
        'ride_id',
        'passenger_name',
        'passenger_email',
        'phone_number',
        'confirmed',
        'confirmation_code',
    ];


    
    /**
     * Auto update created_at and updated_at
     *
     * @var array
     */


    public $timestamps = true;
}
