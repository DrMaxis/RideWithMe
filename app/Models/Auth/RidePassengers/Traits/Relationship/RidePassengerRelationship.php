<?php

namespace App\Models\Auth\RidePassengers\Traits\Relationship;

use App\Models\Auth\User;
use App\Models\Auth\Rides\Ride;
use App\Models\Auth\RidePickups\RidePickup;



/**
 * Class RideRelationship.
 */
trait RidePassengerRelationship
{
 

         /**
     * @return mixed
     */
    public function ride()
    {
        return $this->belongsTo(Ride::class);
    }


   


}
