<?php

namespace App\Http\Controllers\Frontend;


use FarhanWazir\GoogleMaps\GMaps;
use App\Http\Controllers\Controller;

/**
 * Class HomeController.
 */
class HomeController extends Controller
{
    /**
     * @return \Illuminate\View\View
     */
    public function index()
    {
        //From Location Map
        $map_1_config['center'] = 'Kumasi, Ghana';
        $map_1_config['zoom'] = '14';
        $map_1_config['map_height'] = '500px';
        $map_1_config['geocodeCaching'] = true;
        $map_1_config['scrollwheel'] = false;
        $map_1_config['places'] = TRUE;
        $map_1_config['placesAutocompleteInputID'] = 'pickup_location'; 
        $map_1_config['placesAutocompleteBoundsMap'] = TRUE; // set results biased towards the maps viewport
        $map_1_config['scaleControlPosition'] = 'BOTTOM_RIGHT';
        $map = new GMaps();
        $map->initialize($map_1_config);


        // set up the marker ready for positioning 
        // once we know the users location
        $marker = array();
       $map->add_marker($marker);
       $data['fromLocationMap'] =  $map->create_map();

       //To Location Map
       $map_2_config['center'] = 'Kumasi, Ghana';
       $map_2_config['zoom'] = '14';
       $map_2_config['map_height'] = '500px';
       $map_2_config['geocodeCaching'] = true;
       $map_2_config['scrollwheel'] = false;
       $map_2_config['places'] = TRUE;
       $map_2_config['placesAutocompleteInputID'] = 'dropoff_location'; 
       $map_2_config['placesAutocompleteBoundsMap'] = TRUE; // set results biased towards the maps viewport
       $map_2_config['scaleControlPosition'] = 'BOTTOM_RIGHT';
       $map->initialize($map_2_config);
       $data['toLocationMap'] =  $map->create_map();
       
        


        return view('frontend.index')->with(['data' => $data]);
    }
}
