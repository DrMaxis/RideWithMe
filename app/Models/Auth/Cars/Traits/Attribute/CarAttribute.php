<?php

namespace App\Models\Auth\Cars\Traits\Attribute;


/**
 * Trait CarAttribute.
 */
trait CarAttribute
{
  


  /**
     * @return mixed
     */
    public function getPictureAttribute()
    {
        return $this->getPicture();
    }



}
