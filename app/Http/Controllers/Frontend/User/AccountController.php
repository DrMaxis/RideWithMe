<?php

namespace App\Http\Controllers\Frontend\User;

use App\Http\Controllers\Controller;

/**
 * Class AccountController.
 */
class AccountController extends Controller
{
    /**
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function index()
    {
        return view('frontend.user.account.index');
    }


    public function settings() {


        return view('frontend.user.account.settings');
    }

    public function saveBaseLocation(Request $request) {

        
    }


   
}
