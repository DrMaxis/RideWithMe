<?php

namespace App\Events\Frontend\Auth\Rides;

use App\Models\Auth\Rides\Ride;
use Illuminate\Queue\SerializesModels;

/**
 * Class RideCreated.
 */
class RideCreated
{
    use SerializesModels;

    /**
     * @var
     */
    public $ride;

    /**
     * @param $ride
     */
    public function __construct(Ride $ride)
    {
        $this->ride = $ride;
    }
}
