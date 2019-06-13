<?php

namespace App\Events\Frontend\Auth\Rides;

use App\Models\Auth\User;
use App\Models\Auth\Cars\Car;
use Illuminate\Queue\SerializesModels;

/**
 * Class CarDeleted.
 */
class CarDeleted
{
    use SerializesModels;

    /**
     * @var
     */
    public $car;
    public $user;

    /**
     * @param $car
     */
    public function __construct(Car $car, User $user)
    {
        $this->car = $car;
        $this->user = $user;
    }
}
