<?php

namespace App\Models\Auth\Accounts\Traits\Relationship;

use App\Models\Auth\User;

use App\Models\Auth\Rides\Ride;
use App\Models\Auth\Transactions\Transaction;




/**
 * Class AccountRelationship.
 */
trait AccountRelationship
{
 

      /**
     * @return mixed
     */
    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }

        /**
     * @return mixed
     */
    public function transactions()
    {
        return $this->hasMany(Transaction::class, 'account_id', 'uuid');
    }

     

 


}
