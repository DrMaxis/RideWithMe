<?php

namespace App\Models\Auth\Rides\Traits\Relationship;

use App\Models\Auth\User;
use App\Models\Auth\Accounts\Account;
use App\Models\Auth\Transactions\Transaction;




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
        return $this->belongsToMany(User::class);
    }




}
