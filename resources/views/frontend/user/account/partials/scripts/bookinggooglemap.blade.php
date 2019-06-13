
{!! $data['bookingMap']['js'] !!}
<script type="text/javascript">
function initAutocomplete() {

var directionsDisplay = new google.maps.DirectionsRenderer({
		draggable: true
});
var directionsService = new google.maps.DirectionsService();
var routeMode = document.getElementById('routeMode');
var routeGo = document.getElementById('routeGo');
var routeClear = document.getElementById('routeClear');
var pickup = document.getElementById('pickup_location_input');
var dropoff = document.getElementById('dropoff_location_input');
var pickupLocation = pickup.getAttribute('data-pickupLocation');
var dropoffLocation = dropoff.getAttribute('data-dropoffLocation');
var totalDistanceInput = document.getElementById('total_distance_input');
var travelTimeInput = document.getElementById('travel_time_input');
var bookingForm = document.getElementById('book-ride-form');

directionsDisplay.setMap(map);
directionsDisplay.setPanel(document.getElementById("directions"));
// Create the autocomplete object, restricting the search to geographical
// location types.
toLocation = new google.maps.places.Autocomplete((document.getElementById('dropoff_location_input')), {
		types: ['geocode']
});
toLocation.bindTo('bounds', map);
// When the user selects an address from the dropdown, populate the address
// fields in the form.
toLocation.addListener('place_changed', fillInAddress);

if (pickupLocation || dropoffLocation) {

		var request = {

				origin: pickupLocation,
				destination: dropoffLocation,
				travelMode: google.maps.TravelMode['DRIVING']

		};

		directionsService.route(request, function(response, status) {
				if (status == google.maps.DirectionsStatus.OK) {
						directionsDisplay.setDirections(response);
				}
				var totalDistance = 0;
				var totalDuration = 0;
				var legs = response.routes[0].legs;

				for (var i = 0; i < legs.length; ++i) {
						totalDistance += legs[i].distance.value;
						totalDuration += legs[i].duration.value;
				}
				totalDistanceInput.value = totalDistance;
				travelTimeInput.value = totalDuration;
		});
}

function calcRoute() {

		var request = {
				origin: pickup.value,
				destination: dropoff.value,
				travelMode: google.maps.TravelMode['DRIVING']
		};
		directionsService.route(request, function(response, status) {

				if (status == google.maps.DirectionsStatus.OK) {
						directionsDisplay.setDirections(response);
				}
				var totalDistance = 0;
				var totalDuration = 0;
				var legs = response.routes[0].legs;

				for (var i = 0; i < legs.length; ++i) {
						totalDistance += legs[i].distance.value;
						totalDuration += legs[i].duration.value;
				}	
				 totalDistanceInput.value = totalDistance;
				travelTimeInput.value = totalDuration; 
				
				


		});



}



routeGo.addEventListener('click', function() {

		calcRoute();

});


routeClear.addEventListener('click', function() {

		document.getElementById('pickup_location_input').value = "";
		document.getElementById('dropoff_location_input').value = "";
		deleteMarkers();
		directionsDisplay.setDirections({
				routes: []
		});
});

}




function setMapOnAll(map) {
    for (var i = 0; i < markers_map.length; i++) {
        markers_map[i].setMap(map);
    }
}

function clearMarkers() {
    setMapOnAll(null);
}

function deleteMarkers() {
    clearMarkers();
    markers_map = [];
}

function fillInAddress() {
   
    var place = toLocation.getPlace();
    var geocoder = new google.maps.Geocoder();
    var place = toLocation.getPlace();

    var address = place.formatted_address;
    if (!place.geometry) {

        return;
    }

    if (place.geometry.viewport) {
        map.fitBounds(place.geometry.viewport);
    } else {
        map.setCenter(place.geometry.location);
        map.setZoom(14);
    }

    event = {
        latLng: place.geometry.location
    }

    createMarker_map({
        map: map,
        position: event.latLng
    });


    geocoder.geocode({
        'address': address
    }, function(results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
            var latitude = results[0].geometry.location.lat();
            var longitude = results[0].geometry.location.lng();
            var marker = new google.maps.Marker({
                position: new google.maps.LatLng(latitude, longitude),
                map: map
            });
            markers_map.push(marker);

        } else {

            alert("Request failed.");

        }
    });
}

window.addEventListener('load', function() {

initAutocomplete();

}, false);
</script>