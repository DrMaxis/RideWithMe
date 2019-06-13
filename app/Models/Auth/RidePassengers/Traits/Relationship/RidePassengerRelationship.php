<?php

namespace App\Models\Auth\RidePassengers\Traits\Relationship;

use App\Models\Auth\User;
use App\Models\Auth\Rides\Ride;



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
