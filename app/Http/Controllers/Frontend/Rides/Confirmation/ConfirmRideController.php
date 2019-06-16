<?php

namespace App\Http\Controllers\Frontend\Rides\Confirmation;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Repositories\Frontend\Ride\RideRepository;


/**
 * Class ConfirmRideController.
 */
class ConfirmRideController extends Controller
{
    /**
     * @var RideRepository
     */
    protected $ride;

    /**
     * ConfirmRideController constructor.
     *
     * @param RideRepository $user
     */
    public function __construct(RideRepository $ride)
    {
        $this->ride = $ride;
    }

    /**
     * @param $token
     *
     * @throws \App\Exceptions\GeneralException
     * @return mixed
     */
    public function confirm($token)
    {
        
        $this->ride->confirm($token, auth()->user());

        return redirect()->route('frontend.ride.show',$this->ride->slug)->withFlashSuccess(__('exceptions.frontend.auth.confirmation.success'));
    }

   
}
