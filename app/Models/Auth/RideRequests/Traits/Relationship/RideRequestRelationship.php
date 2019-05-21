<?php

namespace App\Models\Auth\RideRequests\Traits\Relationship;

use App\Models\Auth\User;
use App\Models\Auth\Accounts\Account;
use App\Models\Auth\Transactions\Transaction;




/**
 * Class RideRequestRelationship.
 */
trait RideRequestRelationship
{
 

  
        /**
     * @return mixed
     */
    public function transaction()
    {
        return $this->belongsTo(Transaction::class, 'transaction_id', 'uuid');
    }

         /**
     * @return mixed
     */
    public function account()
    {
        return $this->belongsTo(Account::class, 'account_id', 'uuid');
    }


 


}
