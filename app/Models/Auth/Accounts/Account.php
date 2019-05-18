<?php

namespace App\Models\Auth\Accounts;

use App\Models\Traits\Uuid;
use Illuminate\Database\Eloquent\Model;
use App\Models\Auth\Accounts\Traits\Method\AccountMethod;
use App\Models\Auth\Accounts\Traits\Relationship\AccountRelationship;




/**
 * Class Account.
 */
class Account extends Model
{
    use AccountRelationship, Uuid, AccountMethod;


    /**
     * The database table used by the model.
     *
     * @var string
     */


    protected $table = 'accounts';


    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */



    protected $fillable = [

        'user_id',
        'account_balance',
        'account_unconfirmed_balance',
        'account_owner',
        'account_email',
        'account_type',
        'account_phone',
        'account_phone_network',
        'last_updated',
        'closed'

    ];


    
    /**
     * Auto update created_at and updated_at
     *
     * @var array
     */


    public $timestamps = true;
}
