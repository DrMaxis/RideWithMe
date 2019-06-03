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
		var totalDistanceInput = document.getElementById('total_distance_input');
		var travelTimeInput = document.getElementById('travel_time_input');
		var bookingForm = document.getElementById('book-ride-form');


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
				

var totalDistance = 0;
var totalDuration = 0;
var legs = response.routes[0].legs;
for(var i=0; i<legs.length; ++i) {
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

				for(var i=0; i<legs.length; ++i) {
						totalDistance += legs[i].distance.value;
						totalDuration += legs[i].duration.value;
				}

 /* setAttributes(totalDistanceInput,{'id': 'total_distance_input', 'name': 'total_distance', 'type': 'hidden'}); */
 totalDistanceInput.value = totalDistance;
 travelTimeInput.value = totalDuration;
 /* setAttributes(travelTimeInput,{'id': 'travel_time_input', 'name': 'travel_time', 'type': 'hidden'}); */
/* bookingForm.appendChild(totalDistanceInput);
bookingForm.appendChild(travelTimeInput); */
function setAttributes(el, attrs) {
  for(var key in attrs) {
    el.setAttribute(key, attrs[key]);
  }
}


	});
	

}




routeGo.addEventListener('click', function() {

calcRoute();
		});

routeClear.addEventListener('click', function() {
document.getElementById('pickup_location').value = "";
	document.getElementById('dropoff_location').value = "";
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
<link rel="stylesheet" href="{{asset('vendor/js/jquery.notify.min.css')}}">





<style>
	.off {
		display: none;
	}


	@-webkit-keyframes rotate {
		0% {
			-webkit-transform: rotate(0deg);
			transform: rotate(0deg);
		}

		50% {
			-webkit-transform: rotate(180deg);
			transform: rotate(180deg);
		}

		100% {
			-webkit-transform: rotate(360deg);
			transform: rotate(360deg);
		}
	}

	@keyframes rotate {
		0% {
			-webkit-transform: rotate(0deg);
			transform: rotate(0deg);
		}

		50% {
			-webkit-transform: rotate(180deg);
			transform: rotate(180deg);
		}

		100% {
			-webkit-transform: rotate(360deg);
			transform: rotate(360deg);
		}
	}

	@-webkit-keyframes rotate2 {
		0% {
			-webkit-transform: rotate(0deg);
			transform: rotate(0deg);
			border-top-color: rgba(0, 0, 0, 0.5);
		}

		50% {
			-webkit-transform: rotate(180deg);
			transform: rotate(180deg);
			border-top-color: rgba(0, 0, 255, 0.5);
		}

		100% {
			-webkit-transform: rotate(360deg);
			transform: rotate(360deg);
			border-top-color: rgba(0, 0, 0, 0.5);
		}
	}

	@keyframes rotate2 {
		0% {
			-webkit-transform: rotate(0deg);
			transform: rotate(0deg);
			border-top-color: rgba(0, 0, 0, 0.5);
		}

		50% {
			-webkit-transform: rotate(180deg);
			transform: rotate(180deg);
			border-top-color: rgba(0, 0, 255, 0.5);
		}

		100% {
			-webkit-transform: rotate(360deg);
			transform: rotate(360deg);
			border-top-color: rgba(0, 0, 0, 0.5);
		}
	}



	.payment-loader {
		position: relative;
		margin: 75px auto;
		width: 150px;
		height: 150px;
		display: block;
		overflow: hidden;
	}

	.payment-loader div {
		height: 100%;
	}


	/* loader 4 */
	.payment-loader4,
	.payment-loader4 div {
		border-radius: 50%;
		padding: 8px;
		border: 2px solid transparent;
		-webkit-animation: rotate linear 3.5s infinite;
		animation: rotate linear 3.5s infinite;
		border-radius: 50%;
		padding: 4px;
		-webkit-animation: rotate2 4s infinite linear;
		animation: rotate2 4s infinite linear;
	}

	.payment-loader,
	.payment-loader * {
		will-change: transform;
	}

	.purp-gradient {

		background-color: #620bd0;
		border: 0;
		background-image: -webkit-linear-gradient(45deg, #8226f5 0%, #620bd0 100%) !important;
		background-image: -ms-linear-gradient(45deg, #8226f5 0%, #620bd0 100%) !important;
		border-color: transparent;
		background-color: #8226f5 !important;
	}
</style>







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
		
	const submitUrl = "{{route('frontend.user.ride.create')}}";

		const pickupLocationInput = $('#pickup_location_input');
		const dropoffLocationInput = $('#dropoff_location_input');
		const requestDateInput = $('#request_date');
		const rideNameInput = $('#ride_name_input');
		const rideNotesInput = $('#ride_notes_input');
		const rideOption = $('#ride_option_selector');
		const submitButton = $('#submit-ride');
		const calculateButton = $('.calculate_ride');
	var totalDistanceInput = $('#total_distance_input');
var travelTimeInput = $('#travel_time_input');

var driverCarInput = $('#car_option_selector');
var passengers = [];





		
		/* when user chooses passenger or driver  */
		
		
rideOption.on('change', function(e) {
				var option = this.value;
			 	if(option == 'Driver') {
					var element = $('.car-group');
					var status = element.attr('data-status');
					if(status == 'unverified') {
						submitButton.attr('disabled', true);
					}

					$('.car-info').removeClass('hide-form');

				} else if(option == 'Passenger') {
					submitButton.attr('disabled', false);
					$('.car-info').addClass('hide-form');

				} else {

				}

		
		})





	
	
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

console.log(
	[
$pickupLocation,
$dropoffLocation,
$requestDate,
$rideName,
$rideNotes,
$option,
$token,
$travelTime,
$totalDistance,	
	]

)

       


       
        

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
        estimatedFare =  3.50 + (distanceInKiloMeter * 0.75) + (0.05 * timeInMinutes);
        return estimatedFare;
    }
                   
}




        userInfoText.innerHTML = $option;
        pickupLocationText.innerHTML = $pickupLocation;
        dropoffLocationText.innerHTML = $dropoffLocation;
        scheduledTimeText.innerHTML = $requestDate;
        travelTimeText.innerHTML = parseFloat(Math.round(($travelTime * 100) / 100)/ 60).toFixed(2) + ' Minutes'; 
				totalDistanceText.innerHTML = parseFloat(Math.round(($totalDistance * 100) / 100)/ 1000).toFixed(2) + ' KM';
				estimatedFareText.innerHTML = parseFloat(Math.round((calculateFare($totalDistance, $travelTime) * 100) / 100)).toFixed(2);
        rideName.innerHTML = $rideName;
        rideNote.innerHTML = $rideNotes;
        

				




        



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
var option = rideOption.val();
var token = '{{Session::token()}}';
var travelTime = travelTimeInput.val();
var totalDistance = totalDistanceInput.val();
var car = driverCarInput.val();


				
				console.log('show loader here');
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
						 option: option, 
						 car: car ? null : null,
						 _token: token
						},

					success: function(e) {
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
				}
						})
						.fail(function(jqXHR, textStatus, errorThrown) { 
							alert('An Error Occured While submitting...' + errorThrown + jqXHR);
							
					})
						.done(function(w) { 
								$('.transaction-loader').addClass('off');
							/* 	window.location.replace(bookingUrl); */
								
						});
} else {
	console.log(event);
}


				
				});
		 
		
		
		
				})();
				
				


</script>





<script>
	(function () {
	
/* submitUrl = "{{route('frontend.user.ride.create')}}"; */
	

})();

	






</script>






























@endsection