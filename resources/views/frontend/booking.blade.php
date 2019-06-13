@extends('frontend.layouts.app')

@section('title', app_name() . ' | ' . __('navs.general.home'))







@section('stylesheets')

<!-- Library - Loader CSS -->
<link rel="stylesheet" type="text/css" href="{{asset('vendor/loader/loaders.min.css')}}">
<!-- Library - Bootstrap v3.3.5 -->
<link rel="stylesheet" type="text/css" href="{{asset('vendor/bootstrap/bootstrap.min.css')}}">
<link rel="stylesheet" type="text/css" href="{{asset('vendor/bootstrap/bootstrap-datetimepicker.min.css')}}">
<!-- Font Icons -->
<link rel="stylesheet" type="text/css" href="{{asset('vendor/fonts/font-awesome.min.css')}}">
<!-- Library - OWL Carousel V.2.0 beta -->
<link rel="stylesheet" type="text/css" href="{{asset('vendor/owl-carousel/owl.carousel.css')}}">
<link rel="stylesheet" type="text/css" href="{{asset('vendor/owl-carousel/owl.theme.css')}}">
<!-- Library - FlexSlider v2.5.0 -->
<link rel="stylesheet" type="text/css" href="{{asset('vendor/flexslider/flexslider.css')}}">
<!-- Library - Animate CSS -->
<link rel="stylesheet" type="text/css" href="{{asset('vendor/animate/animate.min.css')}}">
<!-- Custom - Common CSS -->
<link rel="stylesheet" type="text/css" href="{{asset('css/vendor/plugins.css')}}">
<link rel="stylesheet" type="text/css" href="{{asset('css/vendor/navigation.css')}}">
<!-- Custom - Theme CSS -->
<link rel="stylesheet" type="text/css" href="{{asset('css/vendor/main.css')}}">
<link rel="stylesheet" type="text/css" href="{{asset('css/vendor/codecs.css')}}">



{{ style(mix('css/frontend_a.css')) }}

@section('xcss')
<link rel="stylesheet" href="{{asset('vendor/js/jquery.notify.min.css')}}">
@endsection

@endsection


@section('google-maps')
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

@endsection





@section('content')

<!-- Page Content -->
<div class="container-fluid no-padding page-content book-taxi-online-form">


	<section class="cblock">

		@include('frontend.partials.booking.breadcrumb')
		@include('frontend.partials.booking.form')
		@include('frontend.partials.booking.map')
		@include('frontend.partials.booking.submit')

	</section>





	<div class="transaction-loader off">

		<div class="row">
			<div class="col-12">
				<div class="payment-loader payment-loader4">
					<div>
						<div>
							<div>
								<div>
									<div>
										<div>
											<div>
												<div>
													<div>
														<div></div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>


</div><!-- Page Content/- -->

@endsection


@section('xjs')

<!-- Scripts -->
@stack('before-scripts')
{!! script(mix('js/manifest.js')) !!}
{!! script(mix('js/vendor.js')) !!}
{!! script(mix('js/frontend_a.js')) !!}
@stack('after-scripts')



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


<script type="text/javascript" src="{{asset('vendor/js/jquery.notify.min.js')}}"> </script>



@include('frontend.includes.partials.scripts.verification.phoneNumberInputValidation')






<script>
	(function () {
		
	  let submitUrl = "{{route('frontend.user.ride.create')}}";
		let pickupLocationInput = $('#pickup_location_input');
		let dropoffLocationInput = $('#dropoff_location_input');
		let requestDateInput = $('#request_date');
		let rideNameInput = $('#ride_name_input');
		let rideNotesInput = $('#ride_notes_input');
		let rideOption = $('#ride_option_selector');
		let rideOptionInput = $('#ride_option_selector.selected');
		let submitButton = $('#submit-ride');
		let calculateButton = $('.calculate_ride');
	  let totalDistanceInput = $('#total_distance_input');
    let travelTimeInput = $('#travel_time_input');
    let passengers = [];




var timeInput = document.querySelectorAll('.time.variant-input');

var driverPriceInput = document.querySelectorAll('.price.variant-input');



Array.from(timeInput).forEach(function(element) {

element.addEventListener('change', function(ev) {
	ev.currentTarget.classList.add('selected');


});

});


Array.from(driverPriceInput).forEach(function(element) {

	element.addEventListener('change', function(ev) {
		ev.currentTarget.classList.add('selected');

	});

});
		
		/* when user chooses passenger or driver  */
		
		
rideOption.on('change', function(e) {
				var option = this.value;
				this.classList.add('selected');
		if(option == 'Driver') {

			var element = $('.car-group');
			var status = element.attr('data-status');
								
					
					if(status == 'unverified') {
						submitButton.attr('disabled', true);

				}

					$('.car-info').removeClass('hide-form');
					$('.driver_fee').removeClass('hide-form');

					} else if(option == 'Passenger') {

					submitButton.attr('disabled', false);
					$('.car-info').addClass('hide-form');
					$('.driver_fee').addClass('hide-form');

				} else {

				}
		});





	
	const rideName = document.querySelector('.ride_name');
	const rideNote = document.querySelector('.ride_notes_text');
	const userInfo = document.querySelector('.user_info');
	const userInfoText = document.querySelector('.user_info_text');
	const pickupLocationText = document.querySelector('.pickup_location_text');
	const dropoffLocationText = document.querySelector('.dropoff_location_text');
	const scheduledTimeText = document.querySelector('.scheduled_time_text');
	const totalDistanceText = document.querySelector('.total_distance_text');
	const travelTimeText = document.querySelector('.travel_time_text');
	const estimatedFareText = document.querySelector('.estimated_fare_text');
	const totalFareText = document.querySelector('.total_fare_text');


 calculateButton.click(function(event) { 
	setTimeout(() => {
				

var $pickupLocation = pickupLocationInput.val();
var $dropoffLocation = dropoffLocationInput.val();
var $requestDate = requestDateInput.val();
var $rideName = rideNameInput.val();
var $rideNotes = rideNotesInput.val();
var $option = rideOption.val();
var $token = '{{Session::token()}}';
var $travelTime = travelTimeInput.val();
var $totalDistance = totalDistanceInput.val();  



       


       
        
function calculateFare(totalDistance, travelTime) {
	console.log(totalDistance, travelTime);


    var distanceInKiloMeter = parseFloat(Math.round((totalDistance * 100) / 100)/ 1000).toFixed(2);  
    var timeInMinutes = parseFloat(Math.round((travelTime * 100) / 100)/ 60).toFixed(2);
		var estimatedFare = 0;
		
	if (distanceInKiloMeter == 0) {
		estimatedFare = 0;
			return estimatedFare;
		} else if(distanceInKiloMeter <= 5) {
         estimatedFare =  1.50 + (distanceInKiloMeter * 0.55) + (0.05 * timeInMinutes);
         return estimatedFare;
    } else if(distanceInKiloMeter > 5 && distanceInKiloMeter < 10) {
        estimatedFare =  2.50 + (distanceInKiloMeter * 0.65) + (0.05 * timeInMinutes);
        return estimatedFare;
    } else {
        estimatedFare =  3.50 + (distanceInKiloMeter * 0.08) + (0.05 * timeInMinutes);
        return estimatedFare;
    }
                   
}

        userInfoText.innerHTML = $option;
        pickupLocationText.innerHTML = $pickupLocation;
        dropoffLocationText.innerHTML = $dropoffLocation;
        scheduledTimeText.innerHTML = $requestDate;
        travelTimeText.innerHTML = parseFloat(Math.round(($travelTime * 100) / 100)/ 60).toFixed(2) + ' Minutes'; 
				totalDistanceText.innerHTML = parseFloat(Math.round(($totalDistance * 100) / 100)/ 1000).toFixed(2) + ' KM';
				estimatedFareText.innerHTML = parseFloat((calculateFare($totalDistance, $travelTime))).toFixed(2);
        rideName.innerHTML = $rideName;
        rideNote.innerHTML = $rideNotes;
var $ridePrice = parseFloat(calculateFare($totalDistance, $travelTime)).toFixed(2);
const driverPriceInput = document.querySelectorAll('.variant-input');
const driverGainValue = document.querySelector('.driver_gain_value');
const totalPriceText = document.querySelector('.total_fare_text');

Array.from(driverPriceInput).forEach(function(element) {
	element.addEventListener('change', function() {
			var $price = element.getAttribute('data-priceOption');
							// 0.15 or 15%  , estimated fare 
function calculateDriverGain($price, $ridePrice) {
var $newPrice = (parseFloat($price) * parseFloat($ridePrice) + parseFloat($ridePrice));
var $gain = parseFloat($newPrice - ($newPrice * 0.20));
			return $gain;
} 		

function calculateNewPrice($price, $ridePrice){
	var $newPrice = (parseFloat($price) * parseFloat($ridePrice) + parseFloat($ridePrice));
	return $newPrice;
}
driverGainValue.innerHTML = parseFloat(calculateDriverGain($price, $ridePrice)).toFixed(2);
totalPriceText.innerHTML = parseFloat(calculateNewPrice($price, $ridePrice)).toFixed(2);

	})
})

	}, 3000); 
});


		/* submit form */
				
submitButton.click(function(event) {
				event.preventDefault();

var confirmation = window.confirm('By Submitting this ride request you agree to our terms and conditions and ride policies');

if(confirmation) {

var pickupLocation = pickupLocationInput.val();
var dropoffLocation = dropoffLocationInput.val();
var requestDate = requestDateInput.val();
var rideName = rideNameInput.val();
var rideNotes = rideNotesInput.val();
var rideOption = $('#ride_option_selector').val();
var token = '{{Session::token()}}';
var travelTime = travelTimeInput.val();
var totalDistance = totalDistanceInput.val();

if (rideOption == 'Driver') {
var availableSeats = document.querySelector('#available_seats_input').value;
var timeInput = document.querySelector('.time.variant-input.selected').id;
var priceInput = document.querySelector('.price.variant-input.selected').id;
var carSelector = document.querySelector('#car_option_selector');	
var car = carSelector.options[carSelector.selectedIndex].getAttribute('data-carID');

} else {
}
				
				console.log('show loader here');

				console.log(
pickupLocation,
dropoffLocation,
requestDate,
rideName,
rideNotes,
rideOption,
token,
travelTime,
totalDistance,
availableSeats,
timeInput,
priceInput,
car,
				);

				
				$('.transaction-loader').removeClass('off');
				$('.cblock').remove();
			
	$.ajax({
					method: 'POST',
					url: submitUrl,
					data: {
								pickup_location: pickupLocation, 
								dropoff_location: dropoffLocation,
								ride_name: rideName, 
								ride_notes: rideNotes, 
								travel_time: travelTime, 
								total_distance: totalDistance, 
								request_date: requestDate, 
								option: rideOption, 
								car_id: car,
								available_seats: availableSeats,
								timeOption: timeInput,
								priceOption: priceInput,
								_token: token
						},


						})
					 
			.done(function(w) {

$('.transaction-loader').addClass('off');
				$.notify({
        wrapper: 'body',
        message: 'Your request submitted successfuly!',
        type: 'success',
        position: 8,
        dir: 'ltr',
        autoClose: true,
        duration: 4000,
        onOpen: null,
        onClose: null
		});
});

	} else {
}
});
	
})();
				
				


</script>


































@endsection

{{-- 	window.location.replace('{{route('frontend.user.account.rides')}}'); --}}