<?php

namespace App\Http\Controllers\Frontend\Auth;

use App\Http\Controllers\Controller;
use App\Helpers\Auth\SocialiteHelper;
use App\Http\Requests\RegisterRequest;
use App\Events\Frontend\Auth\UserRegistered;
use Illuminate\Foundation\Auth\RegistersUsers;
use App\Repositories\Frontend\Auth\UserRepository;
use App\Events\Frontend\Auth\Account\AccountCreated;
use App\Repositories\Frontend\Auth\AccountRepository;

/**
 * Class RegisterController.
 */
class RegisterController extends Controller
{
    use RegistersUsers;

   /**
     * @var UserRepository
     */
    protected $userRepository;
    /**
     * @var AccountRepository
     */
    protected $accountRepository;

    /**
     * RegisterController constructor.
     *
     * @param UserRepository $userRepository
     */
    public function __construct(UserRepository $userRepository, AccountRepository $accountRepository)
    {
        $this->userRepository = $userRepository;
        $this->accountRepository = $accountRepository;
    }

    /**
     * Where to redirect users after login.
     *
     * @return string
     */
    public function redirectPath()
    {
        return route('frontend.auth.account.phone.confirm.form');
    }

    /**
     * Show the application registration form.
     *
     * @return \Illuminate\Http\Response
     */
    public function showRegistrationForm()
    {
        abort_unless(config('access.registration'), 404);

        return view('frontend.auth.register')
            ->withSocialiteLinks((new SocialiteHelper)->getSocialLinks());
    }

    
    /**
     * @param RegisterRequest $request
     *
     * @throws \Throwable
     * @return \Illuminate\Http\RedirectResponse|\Illuminate\Routing\Redirector
     */
    public function register(RegisterRequest $request)
    {
        abort_unless(config('access.registration'), 404);

        $user = $this->userRepository->create($request->only('first_name', 'last_name', 'email', 'password', 'phone_country_code', 'phone_number', 'phone_network', 'national_id'));
        $userData = array('id' => $user->id,'email' => $user->email, 'phone_nmumber' => $user->phone_number, 'name' => $user->name, 'phone_network' => $user->phone_network );
        $account = $this->accountRepository->create($userData);
        // If the user must confirm their email or their account requires approval,
        // create the account but don't log them in.
        if (config('access.users.confirm_phone_number') || config('access.users.requires_approval')) {
            event(new UserRegistered($user));

            return redirect($this->redirectPath())->withFlashSuccess(
                config('access.users.requires_approval') ?
                    __('exceptions.frontend.auth.confirmation.created_pending') :
                    __('exceptions.frontend.auth.confirmation.created_confirm')
            );
        }

        auth()->login($user);

        event(new UserRegistered($user));
        event(new AccountCreated($account));
        return redirect($this->redirectPath());
    }
    
    /**
     * Show the application registration form.
     *
     * @return \Illuminate\Http\Response
     */
    public function showConfirmSMSForm()
    {
        abort_unless(config('access.registration'), 404);

        return view('frontend.auth.verification.phone')
            ->withSocialiteLinks((new SocialiteHelper)->getSocialLinks());
    }




}
