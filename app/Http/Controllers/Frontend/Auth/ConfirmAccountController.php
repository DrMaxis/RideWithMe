<?php

namespace App\Http\Controllers\Frontend\Auth;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Repositories\Frontend\Auth\UserRepository;
use App\Notifications\Frontend\Auth\UserNeedsConfirmation;

/**
 * Class ConfirmAccountController.
 */
class ConfirmAccountController extends Controller
{
    /**
     * @var UserRepository
     */
    protected $user;

    /**
     * ConfirmAccountController constructor.
     *
     * @param UserRepository $user
     */
    public function __construct(UserRepository $user)
    {
        $this->user = $user;
    }

    /**
     * @param $token
     *
     * @throws \App\Exceptions\GeneralException
     * @return mixed
     */
    public function confirm($token)
    {
        $this->user->confirm($token);

        return redirect()->route('frontend.auth.login')->withFlashSuccess(__('exceptions.frontend.auth.confirmation.success'));
    }

    /**
     * @param $uuid
     *
     * @throws \App\Exceptions\GeneralException
     * @return mixed
     */
    public function sendConfirmationEmail($uuid)
    {
        $user = $this->user->findByUuid($uuid);

        if ($user->isConfirmed()) {
            return redirect()->route('frontend.auth.login')->withFlashSuccess(__('exceptions.frontend.auth.confirmation.already_confirmed'));
        }

        $user->notify(new UserNeedsConfirmation($user->confirmation_code));

        return redirect()->route('frontend.auth.login')->withFlashSuccess(__('exceptions.frontend.auth.confirmation.resent'));
    }




     
    // Confirm SMS Verification

    /**
     * @param $code
     *
     * @throws \App\Exceptions\GeneralException
     * @return mixed
     */
    public function confirmSMS(Request $request)
    {
        
        $code = $request->phone_confirmation_code_input;
        $this->user->confirmSMS($code);

        return redirect()->route('frontend.auth.login')->withFlashSuccess(__('exceptions.frontend.auth.confirmation.success'));
    }


    //
}
