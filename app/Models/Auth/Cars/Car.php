<?php

namespace App\Models\Auth\Cars;

use App\Models\Traits\Uuid;
use Illuminate\Database\Eloquent\Model;
use App\Models\Auth\Cars\Traits\Method\CarMethod;
use App\Models\Auth\Cars\Traits\Relationship\CarRelationship;
use App\Models\Auth\Cars\Traits\Attribute\CarAttribute;

/**
 * Class CarRequest.
 */
class Car extends Model
{
    use CarRelationship, Uuid, CarMethod, CarAttribute;


    /**
     * The database table used by the model.
     *
     * @var string
     */


    protected $table = 'cars';


    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */



    protected $fillable = [
        'user_id',
        'model',
        'year',
        'plate_number',
        'color',
        'image',
    ];


    
    /**
     * Auto update created_at and updated_at
     *
     * @var array
     */


    public $timestamps = true;
}
