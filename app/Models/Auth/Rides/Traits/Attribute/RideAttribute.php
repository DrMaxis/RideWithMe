<?php

namespace App\Models\Auth\Rides\Traits\Attribute;

use App\Models\Auth\PriceOptions\PriceOption;

/**
 * Trait RideAttribute.
 */
trait RideAttribute
{
  public function getAskingPriceAttribute() {

    $askingPriceOption = $this->asking_price_option;
    $askingPriceOffer = $this->asking_price_offer;
   
      if($askingPriceOption != 0 || $askingPriceOption  != null && $askingPriceOffer == 0) {

        $priceOption = PriceOption::where('id', '=', $this->asking_price_option)->get();
 dd($priceOption);
        return $priceOption;
        
      }
  }
}
