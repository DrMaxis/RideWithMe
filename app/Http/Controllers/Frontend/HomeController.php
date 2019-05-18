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
        $config['center'] = 'Kumasi, Ghana';
        $config['zoom'] = '14';
        $config['map_height'] = '500px';
        $config['geocodeCaching'] = true;
        $config['scrollwheel'] = false;
        $config['places'] = TRUE;
        $config['placesAutocompleteInputID'] = 'myPlaceTextBox';
        $config['placesAutocompleteBoundsMap'] = TRUE; // set results biased towards the maps viewport
        $config['placesAutocompleteOnChange'] = 'createMarker_map({ map: map, position:event.latLng });';
        $config['scaleControlPosition'] = 'BOTTOM_RIGHT';
    /*     $config['sensor'] = true;



        $config['onboundschanged'] = 'if (!centreGot) {
            var mapCentre = map.getCenter();
            marker_0.setOptions({
                position: new google.maps.LatLng(mapCentre.lat(), mapCentre.lng()) 
            });
        }
        centreGot = true;';
      */
        $gMap = new GMaps();
        $gMap->initialize($config);


        // set up the marker ready for positioning 
        // once we know the users location
        $marker = array();
       $gMap->add_marker($marker);


       
        $map = $gMap->create_map();


        return view('frontend.index')->with(['map' => $map]);
    }
}
