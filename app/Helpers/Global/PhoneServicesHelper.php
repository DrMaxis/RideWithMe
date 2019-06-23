

<?php

if(!function_exists('getPhoneData')) {

    function getPhoneData($phoneNumber) {
        $client = app('Nexmo\Client');
        $response = $client->insights()->standard($phoneNumber);

        return $response;

    }
}


