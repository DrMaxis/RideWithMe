<?php

namespace App\Models\Auth\Traits\Relationship;

use App\Models\Auth\Cars\Car;
use App\Models\Auth\Rides\Ride;
use App\Models\Auth\SocialAccount;
use App\Models\Auth\PasswordHistory;
use App\Models\Auth\Accounts\Account;

/**
 * Class UserRelationship.
 */
trait UserRelationship
{
    /**
     * @return mixed
     */
    public function providers()
    {
        return $this->hasMany(SocialAccount::class);
    }

    /**
     * @return mixed
     */
    public function passwordHistories()
    {
        return $this->hasMany(PasswordHistory::class);
    }

    
      /**
     * @return mixed
     */
    public function account()
    {
        return $this->hasOne(Account::class);
    }

        /**
     * @return mixed
     */
    public function rides()
    {
        return $this->belongsToMany(Ride::class);
    }

        /**
     * @return mixed
     */
    public function cars()
    {
        return $this->hasMany(Car::class);
    }


}
