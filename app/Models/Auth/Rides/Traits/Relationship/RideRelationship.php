<?php

namespace App\Models\Auth\Rides\Traits\Relationship;

use App\Models\Auth\User;

use App\Models\Auth\Amenities\Amenity;
use App\Models\Auth\RidePassengers\RidePassenger;

/**
 * Class RideRelationship.
 */
trait RideRelationship
{
 

  
        /**
     * @return mixed
     */
  /*   public function transaction()
    {
        return $this->belongsTo(Transaction::class, 'transaction_id', 'uuid');
    } */

         /**
     * @return mixed
     */
    public function users()
    {
        return $this->belongsToMany(User::class)->withPivot('user_id');
    }

     /**
     * @return mixed
     */
    public function passengers()
    {
        return $this->hasMany(RidePassenger::class);
    }

    public function amenities() {
        return $this->belongsToMany(Amenity::class)->withPivot('ride_id');
    }


}
