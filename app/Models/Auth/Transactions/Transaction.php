<?php

namespace App\Models\Auth\Transactions;

use App\Models\Traits\Uuid;
use Illuminate\Database\Eloquent\Model;
use App\Models\Auth\Transactions\Traits\Method\TransactionMethod;
use App\Models\Auth\Transactions\Traits\Relationship\TransactionRelationship;





/**
 * Class User.
 */
class Transaction extends Model
{
    use TransactionRelationship, Uuid, TransactionMethod;


/**
     * The database table used by the model.
     *
     * @var string
     */
   protected $table = 'transactions';


  /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
       
    
    protected $fillable = [
        'account_id',
        'user_id',
        'recipient_name',
        'sender_name',
        'transaction_type',
        'payment_type',
        'bill_amount',
        'recipient_id',
        'recipient_email',
        'recipient_phone',
        'currency',
        'country',
        'ipaddress',
        'txRef',
        'orderRef',
        'fingerprint',
        'error',
        'verified',
        'completed'

];


/**
     * Auto update created_at and updated_at
     *
     * @var array
     */
       
    public $timestamps = true;

}
