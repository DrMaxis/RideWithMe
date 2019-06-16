<?php

namespace App\Models\Auth\RidePickups\Traits\Relationship;

use App\Models\Auth\User;
use App\Models\Auth\Rides\Ride;



/**
 * Class RidePickupRelationship.
 */
trait RidePickupRelationship
{
 

         /**
     * @return mixed
     */
    public function ride()
    {
        return $this->belongsTo(Ride::class);
    }



}
