<?php

namespace App\Events\Frontend\Auth\Rides;

use App\Models\Auth\User;
use App\Models\Auth\Rides\Ride;
use Illuminate\Queue\SerializesModels;

/**
 * Class RideConfirmed.
 */
class RideConfirmed
{
    use SerializesModels;

    /**
     * @var
     */
    public $ride;
    public $user;

    /**
     * @param $ride
     */
    public function __construct(Ride $ride, User $user)
    {
        $this->ride = $ride;
        $this->user = $user;
    }
}
