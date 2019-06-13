<?php

namespace App\Models\Auth\TimeOptions;

use App\Models\Traits\Uuid;
use Illuminate\Database\Eloquent\Model;






/**
 * Class TimeOption.
 */
class TimeOption extends Model
{
    use  Uuid;


    /**
     * The database table used by the model.
     *
     * @var string
     */


    protected $table = 'time_options';


    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */



    protected $fillable = [
        'name',
        'value',
        'text',
    ];


    
    /**
     * Auto update created_at and updated_at
     *
     * @var array
     */


    public $timestamps = true;
}
