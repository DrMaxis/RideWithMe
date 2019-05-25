<?php

namespace App\Models\Auth\RideUser;

use Illuminate\Database\Eloquent\Model;

class RideUser extends Model
{
    protected $table = 'ride_user';

    protected $fillable = ['user_id', 'ride_id'];
}
