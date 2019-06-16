<?php

namespace App\Models\Auth\RidePickups;

use App\Models\Traits\Uuid;
use Illuminate\Database\Eloquent\Model;
use App\Models\Auth\RidePickups\Traits\Relationship\RidePickupRelationship;

/**
 * Class RideRequest.
 */
class RidePickup extends Model
{
    use RidePickupRelationship, Uuid;


    /**
     * The database table used by the model.
     *
     * @var string
     */


    protected $table = 'ride_pickups';


    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */


    
   
    
      

    protected $fillable = [
        'ride_id',
        'user_id',
        'pickup_location',
        'pickup_price',        
    ];


    
    /**
     * Auto update created_at and updated_at
     *
     * @var array
     */


    public $timestamps = true;
}
