<?php

namespace App\Models\Auth\Amenities;

use App\Models\Traits\Uuid;
use Illuminate\Database\Eloquent\Model;
use App\Models\Auth\Amenities\Traits\Relationship\AmenityRelationship;







/**
 * Class Amenity.
 */
class Amenity extends Model
{
    use  AmenityRelationship, Uuid;


    /**
     * The database table used by the model.
     *
     * @var string
     */


    protected $table = 'ride_amenities';


    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */



    protected $fillable = [
        'name',
        'slug',
    ];


    
    /**
     * Auto update created_at and updated_at
     *
     * @var array
     */


    public $timestamps = true;
}
