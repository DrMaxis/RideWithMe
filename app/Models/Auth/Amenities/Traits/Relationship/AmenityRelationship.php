<?php

namespace App\Models\Auth\Amenities\Traits\Relationship;

use App\Models\Auth\User;
use App\Models\Auth\Rides\Ride;


/**
 * Class AmenityRelationship.
 */
trait AmenityRelationship
{
 

  
     public function ride() {
         return $this->belongsToMany(Ride::class)->withPivot('ride_id');
     }

}
