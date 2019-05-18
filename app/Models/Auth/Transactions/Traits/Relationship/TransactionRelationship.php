<?php

namespace App\Models\Auth\Transactions\Traits\Relationship;

use App\Models\Auth\Account;



/**
 * Class TransactionRelationship.
 */
trait TransactionRelationship
{
    /**
     * @return mixed
     * 
     *   public function providers()
     *  {
     *  return $this->hasMany(SocialAccount::class);
     * }
     * 
     */
  

    
    


     /**
     * @return mixed
     */
    public function account()
    {
        return $this->belongsTo(Account::class);
    }

    

}
