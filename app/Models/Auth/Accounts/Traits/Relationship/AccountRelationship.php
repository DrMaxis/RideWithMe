<?php

namespace App\Models\Auth\Accounts\Traits\Relationship;

use App\Models\Auth\User;




/**
 * Class UserRelationship.
 */
trait AccountRelationship
{
 

      /**
     * @return mixed
     */
    public function user()
    {
        return $this->belongsTo(User::class, 'user_id', 'uuid');
    }

        /**
     * @return mixed
     */
    public function transactions()
    {
        return $this->hasMany(Transaction::class, 'account_id', 'uuid');
    }

         /**
     * @return mixed
     */
    public function ride_requests()
    {
        return $this->hasMany(RideRequest::class, 'account_id', 'uuid');
    }


 


}
