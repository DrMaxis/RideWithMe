@extends('frontend.layouts.app')

@section('title', app_name() . ' | ' . __('navs.general.home'))

@section('google-maps')
{{-- 
 {!! $data['fromLocationMap']['js'] !!}
 {!! $data['toLocationMap']['js'] !!}  --}}


{!! $data['bookingMap']['js'] !!}

<script type="text/javascript">
	function initAutocomplete() {

		var directionsDisplay = new google.maps.DirectionsRenderer({ draggable: true });
		var directionsService = new google.maps.DirectionsService();
		
		var routeMode = document.getElementById('routeMode');
		var routeGo = document.getElementById('routeGo');
		var routeClear = document.getElementById('routeClear');
		var pickup = document.getElementById('pickup_location_input');
		var dropoff = document.getElementById('dropoff_location_input');
		var pickupLocation = pickup.getAttribute('data-pickupLocation');
		var dropoffLocation = dropoff.getAttribute('data-dropoffLocation');



		directionsDisplay.setMap(map);
		directionsDisplay.setPanel(document.getElementById("directions"));
	  // Create the autocomplete object, restricting the search to geographical
	  // location types.
	  toLocation = new google.maps.places.Autocomplete((document.getElementById('dropoff_location_input')),
		  {types: ['geocode']});
		 

		  toLocation.bindTo('bounds', map);
		 
	  // When the user selects an address from the dropdown, populate the address
	  // fields in the form.
	  toLocation.addListener('place_changed', fillInAddress);




if(pickupLocation || dropoffLocation) {
	var request = { 
            origin: pickupLocation,
        destination: dropoffLocation,
        travelMode: google.maps.TravelMode['DRIVING']
    };
    directionsService.route(request, function(response, status) {
        if (status == google.maps.DirectionsStatus.OK) {
            directionsDisplay.setDirections(response);
        }
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
for(var i=0; i<legs.length; ++i) {
    totalDistance += legs[i].distance.value;
    totalDuration += legs[i].duration.value;
}
console.log(totalDistance);
console.log(totalDuration);

	});
	

}




routeGo.addEventListener('click', function() {

calcRoute();
		});

routeClear.addEventListener('click', function() {
document.getElementById('pickup_location_input').value = "";
	document.getElementById('dropoff_location_input').value = "";
	deleteMarkers();
	directionsDisplay.setDirections({ routes: [] });

		}); 
		
		
		
	}



// Sets the map on all markers in the array.
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
	  // Get the place details from the autocomplete object.
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

                        event = {latLng: place.geometry.location}

                        createMarker_map({ map: map, position:event.latLng });
					
					
                geocoder.geocode({ 'address': address }, function (results, status) {
                    if (status == google.maps.GeocoderStatus.OK) {
                        var latitude = results[0].geometry.location.lat();
                        var longitude = results[0].geometry.location.lng();
                        var marker = new google.maps.Marker({ position: new google.maps.LatLng(latitude, longitude), map: map });
						markers_map.push(marker);
                    } else {
                        alert("Request failed.")
					}
				});
	}
	window.addEventListener('load', function() {
		initAutocomplete();
	}, false);
</script>



@endsection

@section('prescripts')

@endsection

@section('xcss')

@endsection

@section('content')

<!-- Page Content -->
<div class="container-fluid no-padding page-content book-taxi-online-form">

	@include('frontend.partials.booking.breadcrumb')
	@include('frontend.partials.booking.map')
	@include('frontend.partials.booking.form')
	


</div><!-- Page Content/- -->

@endsection


@section('xjs')



<!-- JQuery v1.11.3 -->
<script src="{{asset('vendor/js/jquery.min.js')}}"></script>

<!-- Library - Modernizer -->
<script src="{{asset('vendor/modernizr/modernizr.js')}}"></script>

<!-- Library - Bootstrap v3.3.5 -->
<script src="{{asset('vendor/bootstrap/bootstrap.min.js')}}"></script><!-- Bootstrap JS File v3.3.5 -->
<script src="{{asset('vendor/bootstrap/bootstrap-datetimepicker.min.js')}}"></script><!-- Bootstrap JS File v3.3.5 -->
<!-- jQuery Easing v1.3 -->
<script src="{{asset('vendor/js/jquery.easing.min.js')}}"></script>

<!-- Library - jQuery.appear -->
<script src="{{asset('vendor/appear/jquery.appear.js')}}"></script>

<!-- Library - OWL Carousel V.2.0 beta -->
<script src="{{asset('vendor/owl-carousel/owl.carousel.min.js')}}"></script>

<!-- jQuery For Number Counter -->
<script src="{{asset('vendor/number/jquery.animateNumber.min.js')}}"></script>

<!-- Library - Google Map API -->
{{-- <script src="https://maps.googleapis.com/maps/api/js?v=3.exp"></script> --}}

<!-- Library - FlexSlider v2.5.0 -->
<script defer src="{{asset('vendor/flexslider/jquery.flexslider.js')}}"></script>


<script type="text/javascript" src="{{asset('vendor/moment/moment-with-locales.js')}}"> </script>


<script type="text/javascript" src="{{asset('js/vendor/plugins.js')}}"> </script>

@include('frontend.includes.partials.scripts.verification.phoneNumberInputValidation')



@endsection