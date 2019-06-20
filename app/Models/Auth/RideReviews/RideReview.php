<?php

namespace App\Models\Auth\RideReviews;

use App\Models\Traits\Uuid;
use Illuminate\Database\Eloquent\Model;
use App\Models\Auth\RideReviews\Traits\Relationship\RideReviewRelationship;

/**
 * Class RideReview.
 */
class RideReview extends Model
{
    use RideReviewRelationship, Uuid;


    /**
     * The database table used by the model.
     *
     * @var string
     */


    protected $table = 'ride_reviews';


    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */

    protected $fillable = [
        'ride_id',
        'user_id',
        'safety_rating',
        'quality_rating',
        'punctuality_rating',
        'charisma_rating',
        'safety_rating',
        'passengers_rating',
        'review',
    ];


    
    /**
     * Auto update created_at and updated_at
     *
     * @var array
     */


    public $timestamps = true;
}
