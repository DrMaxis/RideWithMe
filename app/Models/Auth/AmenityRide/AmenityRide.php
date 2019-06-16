<?php

namespace App\Models\Auth\AmenityRide;

use Illuminate\Database\Eloquent\Model;

class AmenityRide extends Model
{
    protected $table = 'amenity_ride';

    protected $fillable = ['amenity_id', 'ride_id'];
}
