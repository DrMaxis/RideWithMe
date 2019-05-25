<?php

namespace App\Events\Frontend\Auth\Account;

use App\Models\Auth\Accounts\Account;
use Illuminate\Queue\SerializesModels;

/**
 * Class UserLoggedIn.
 */
class AccountCreated
{
    use SerializesModels;

    /**
     * @var
     */
    public $account;

    /**
     * @param $user
     */
    public function __construct(Account $account)
    {
        $this->account = $account;
    }
}
