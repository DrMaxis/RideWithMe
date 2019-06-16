<?php

namespace App\Models\Auth\Rides\Traits\Attribute;

use App\Models\Auth\User;
use App\Models\Auth\PriceOptions\PriceOption;

/**
 * Trait RideAttribute.
 */
trait RideAttribute
{
  public function getAskingPriceAttribute() {

    $askingPriceOption = $this->asking_price_option;
    $askingPriceOffer = $this->asking_price_offer;
    $travelTime = round($this->travel_time, 2);
    $travelDistance = round($this->total_distance, 2);
    $estimatedPrice = calculate_estimated_fare($travelDistance, $travelTime);
    
      if($askingPriceOption != 0 || $askingPriceOption  != null && $askingPriceOffer == 0) {

        $priceOption = PriceOption::where('id', '=', $askingPriceOption)->first();
        $priceOptionValue = $priceOption->value;
     
            
        $askingPrice = calculate_asking_price_from_option($estimatedPrice, $priceOptionValue);
        
      } elseif($askingPriceOffer != 0  && $askingPriceOption == 0 || $askingPriceOption == null) {
         $askingPrice = $this->asking_price_offer;
      }

     return round($askingPrice, 2);
   
  }

  public function getFareSplitAttribute() {
$price = $this->asking_price; 
$maxSeats = $this->max_seats; 

    if($this->max_seats != null) {
      return round(($price / $maxSeats), 2);
    } else {
        return round($price, 2);
    }
    

    
  }


  public function getCreatorAttribute() {

    $creator = User::find($this->user_id);

    return $creator;
  }


  public function getPickupAddressAttribute() {

    $pickupLocation = $this->pickup_location;
    $location_array = explode(',', $pickupLocation);
  
    $address = $location_array[0];
    return $address;


  }

  public function getDropoffAddressAttribute() {

    $dropoffLocation = $this->dropoff_location;
    $location_array = explode(',', $dropoffLocation);
  
    $address = $location_array[0];
    return $address;


  }



public function getDriverAttribute() {

    $driver = User::find($this->driver_id);
    return $driver;
}
}
