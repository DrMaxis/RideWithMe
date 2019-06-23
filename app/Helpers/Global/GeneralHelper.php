<?php

use App\Models\Auth\Rides\Ride;

if (!function_exists('app_name')) {
    /**
     * Helper to grab the application name.
     *
     * @return mixed
     */
    function app_name()
    {
        return config('app.name');
    }
}

if (!function_exists('gravatar')) {
    /**
     * Access the gravatar helper.
     */
    function gravatar()
    {
        return app('gravatar');
    }
}

if (!function_exists('home_route')) {
    /**
     * Return the route to the "home" page depending on authentication/authorization status.
     *
     * @return string
     */
    function home_route()
    {
        if (auth()->check()) {
            if (auth()->user()->can('view backend')) {
                return 'admin.dashboard';
            }

            return 'frontend.user.account';
        }

        return 'frontend.index';
    }
}



if (!function_exists('phone_verification_route')) {
    /**
     * Return the route to the "Confirm SMS" page depending on authentication/authorization status.
     *
     * @return string
     */
    function phone_verification_route()
    {


        return 'frontend.auth.account.phone.confirm.form';
    }
}



if (!function_exists('single_ride')) {
    /**
     * Return the route to the "home" page depending on authentication/authorization status.
     *
     * @return string
     */
    function single_ride($slug)
    {

        return route('frontend.user.ride.show', ['slug' => $slug]);
    }
}



if (!function_exists('slugify')) {

    /**
     * Transform the string to a slugified SEO friendly string
     *
     * @param $string
     *
     * @return String $string
     * 
     * @credit rorypicko
     */
    function slugify($string)
    {
        //Lower case everything
        $string = strtolower($string);
        //Make alphanumeric (removes all other characters)
        $string = preg_replace("/[^a-z0-9_\s-]/", "", $string);
        //Clean up multiple dashes or whitespaces
        $string = preg_replace("/[\s-]+/", " ", $string);
        //Convert whitespaces and underscore to dash
        $string = preg_replace("/[\s_]/", "-", $string);
        return $string;
    }
}



if (!function_exists('generateSixDigitCode')) {
    /**
     * Generate a six digits code
     *
     * @param int $codeLength
     * @return string
     */
    function generateSixDigitCode($length)
    {
        $min = pow(10, $length);
        $max = $min * 10 - 1;
        $code = mt_rand($min, $max);

        return $code;
    }
}


if (!function_exists('getRideLocations')) {
    /**
     * Generate a six digits code
     *
     * @param int $codeLength
     * @return string
     */
    function getRideLocations()
    {
        $rides = Ride::all();
        $places = array();
        $rideLocations = array();




        foreach ($rides as $ride) {

            $dropoff_location = $ride->dropoff_location;
            $location_array = explode(',', $dropoff_location);
            $city = $location_array[0];
            $state = $location_array[1];


            $places[] = $city . ',' . $state;
        }

        foreach ($places as $place) {
            

            $locations = Ride::where('dropoff_location', 'LIKE', '%' . $place . '%')->get();

            $placeCount = count($locations);

            $rideLocations[$place] = [
                'place' => $place,
                'count' => $placeCount,
            ];
        }
        return $rideLocations;
    }
}


if(!function_exists('convertMinuteTimeToHourMinute')) {



    function convertMinuteTimeToHourMinute($time, $format = '%02d:%02d') {


        if ($time < 1) {
            return;
        }
        $hours = floor($time / 60);
        $minutes = ($time % 60);
        return sprintf($format, $hours, $minutes);
    }
}




