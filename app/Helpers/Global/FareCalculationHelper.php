

<?php

if (!function_exists('calculate_estimated_fare')) {
    /**
     * Helper to calculate the estimated ride fare
     *
     * @return mixed
     */
    function calculate_estimated_fare($distance, $time)
    {
        if($distance == 0 || $distance == null) {
            return 0;
        } elseif($distance <= 5) {
            return 1.50 + ($distance * 0.55) + (0.05 * $time);
        } elseif($distance > 5 && $distance < 10) {
            return 2.50 + ($distance * 0.65) + (0.05 * $time);
        } else {
         return  3.50 + ($distance * 0.08) + (0.05 * $time);   
        }

    }


}



if (!function_exists('calculate_asking_price_from_option')) {
    /**
     * Helper to calculate the estimated ride fare
     *
     * @return mixed
     */
    function calculate_asking_price_from_option($estimatedFarePrice, $optionValue)
    {
     
        return $estimatedFarePrice + ($estimatedFarePrice * $optionValue);

    }


}


