<?php

namespace App\Models\Auth\Cars\Traits\Relationship;

use App\Models\Auth\User;





/**
 * Class CarRelationship.
 */
trait CarRelationship
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
    public function owner()
    {
        return $this->belongsTo(User::class);
    }




}
