<?php

namespace App\Models\Auth\RideReviews\Traits\Relationship;

use App\Models\Auth\User;
use App\Models\Auth\Rides\Ride;



/**
 * Class RideReviewRelationship.
 */
trait RideReviewRelationship
{
 

         /**
     * @return mixed
     */
    public function ride()
    {
        return $this->belongsTo(Ride::class);
    }

    
         /**
     * @return mixed
     */
    public function user()
    {
        return $this->belongsTo(User::class);
    }


}
