@extends('frontend.layouts.app')

@section('title', app_name() . ' | ' . __('navs.general.home'))













@section('google-maps')
{!! $rideMap['js'] !!}

@endsection


@section('xcss')
<link href="{{asset('vendor/bootstrap/datetimepicker/bootstrap-datetimepicker.min.css')}}" rel="stylesheet">
<link href="{{asset('vendor/bootstrap/datetimepicker/bootstrap-datetimepicker-standalone.css')}}" rel="stylesheet">
<link rel="stylesheet" href="{{asset('vendor/js/jquery.notify.min.css')}}">
@endsection

@section('content')
<div id="submit_response" class="">                                            
</div>

@include('frontend.partials.singleRide.breadcrumb')
@include('frontend.partials.singleRide.ride')


@endsection


@section('xjs')
<script src="{{asset('vendor/moment/moment-with-locales.js')}}"></script>
<script src="{{asset('vendor/bootstrap/datetimepicker/bootstrap-datetimepicker.min.js')}}"></script>
<script type="text/javascript" src="{{asset('vendor/js/jquery.notify.min.js')}}"> </script>




<script>
  $(function() {

//On pickup locaton change

$('#pickup_location_input').on('change', function() {
  var $numberOfSeats = $('.seats-needed-selector').val();
if($('#pickup_location_input').val().length != 0) {
  var $ridePrice = '{{$ride->fare_split}}';
  var $pickupPrice = 1.50;
  var totalPrice = calculateRidePrice($ridePrice, $pickupPrice, $numberOfSeats);
$('.ride-price-amount-text').html(totalPrice + 'GH¢'+ '<sub> (' + $pickupPrice +  'GH¢' + ' For Pickup'+ ' )</sub>');

} else {

  var $ridePrice = '{{$ride->fare_split}}';
  var totalPrice = calculateRidePrice($ridePrice, $pickupPrice = 0, $numberOfSeats);
  $('.ride-price-amount-text').text(totalPrice + 'GH¢');
}
});


//on seats needed change

$('.seats-needed-selector').on('change', function() {
var $numberOfSeats = $(this).val();
if($('#pickup_location_input').val().length != 0) {
  var $ridePrice = '{{$ride->fare_split}}';
  var $pickupPrice = 1.50;
  var totalPrice = calculateRidePrice($ridePrice, $pickupPrice, $numberOfSeats);
$('.ride-price-amount-text').html(totalPrice + 'GH¢'+ '<sub> (' + $pickupPrice +  'GH¢' + ' For Pickup'+ ' )</sub>');

} else {

  var $ridePrice = '{{$ride->fare_split}}';
  var totalPrice = calculateRidePrice($ridePrice, $pickupPrice = 0, $numberOfSeats);
  $('.ride-price-amount-text').text(totalPrice + 'GH¢');
}

});


//helper functions


function calculateRidePrice($ridePrice, $pickupPrice, $numberOfSeats) {
var $totalprice = ($ridePrice * $numberOfSeats) + $pickupPrice;

return parseFloat($totalprice).toFixed(2);

}






$('.submit-join-ride-button').on('click', function() {

var passengerJoinUrl = "{{route('frontend.user.ride.passenger.join', $ride->uuid)}}"
var seatsNeeded = $('.seats-needed-selector').val();
var luggageSpaceNeeded = $('.luggage-space-selector').val();
var rideID = "{{$ride->uuid}}";
if($('#pickup_location_input').val().length != 0) {

  var pickupLocation = $('#pickup_location_input').val();
} else {
  var pickupLocation = null;
}


$.ajax({
					method: 'POST',
					url: passengerJoinUrl,
          headers: {
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                            },
					data: {
								pickupLocation: pickupLocation, 
                seatsNeeded: seatsNeeded,
                luggageSpaceNeeded:luggageSpaceNeeded,
                rideID: rideID
						},


						})

            .fail(function(jqXHR, textStatus, error) {
                            $.notify({
        wrapper: 'body',
        message: 'There was a problem submitting your request. Refreshing page...',
        type: 'error',
        position: 8,
        dir: 'ltr',
        autoClose: true,
        duration: 10000,
        onOpen: null,
        onClose: null
		}); 
            if( jqXHR.status === 422 ) {
            var errors = $.parseJSON(jqXHR.responseText);
            $.each(errors, function (key, value) {
                // console.log(key+ " " +value);
            $('#submit_response').addClass("alert alert-danger");

                if($.isPlainObject(value)) {
                    $.each(value, function (key, value) {                       
                    $('#submit_response').show().append(value+"<br/>");
                    });
                }else{
                $('#submit_response').show().append(value+"<br/>"); 
                }
            });
        /*     setTimeout(function() { 
     window.location.replace("{{route('frontend.user.account.booking')}}");
    }, 10000); */
 }

                        })
					 
			.done(function(w) {
        $.notify({
        wrapper: 'body',
        message: 'Your request submitted successfuly! Refreshing Page...',
        type: 'fail',
        position: 8,
        dir: 'ltr',
        autoClose: true,
        duration: 5000,
        onOpen: null,
        onClose: null
		}); 
      /*   setTimeout(function() { 
     window.location.replace("{{route('frontend.user.account')}}");
    }, 3000); */
      });
})



// Join As A Driver

$('.submit-drive-ride-button').on('click', function() {
var driverJoinUrl = "{{route('frontend.user.ride.driver.join', $ride->slug)}}";
var driverArrivalTime = $('#driver_schedule_time_input').val();
var carSelector = document.querySelector('#car_option_selector');	
var car = carSelector.options[carSelector.selectedIndex].getAttribute('data-carID');

$.ajax({
					method: 'POST',
					url: driverJoinUrl,
          headers: {
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                            },
					data: {
                driverArrivalTime: driverArrivalTime,
                car_id:car,
						},
						})

.fail(function(jqXHR, textStatus, error) {
        $.notify({
        wrapper: 'body',
        message: 'There was a problem submitting your request. Refreshing page...',
        type: 'error',
        position: 8,
        dir: 'ltr',
        autoClose: true,
        duration: 10000,
        onOpen: null,
        onClose: null
		}); 
            if( jqXHR.status === 422 ) {
            var errors = $.parseJSON(jqXHR.responseText);
            $.each(errors, function (key, value) {
                // console.log(key+ " " +value);
            $('#submit_response').addClass("alert alert-danger");

                if($.isPlainObject(value)) {
                    $.each(value, function (key, value) {                       
                    $('#submit_response').show().append(value+"<br/>");
                    });
                }else{
                $('#submit_response').show().append(value+"<br/>"); 
                }
            });
         /*    setTimeout(function() { 
     window.location.replace("{{route('frontend.user.ride.show', $ride->slug)}}");
    }, 10000); */
 }

})
					 
.done(function(w) {
        $.notify({
        wrapper: 'body',
        message: 'Your request submitted successfuly! Refreshing Page...',
        type: 'fail',
        position: 8,
        dir: 'ltr',
        autoClose: true,
        duration: 5000,
        onOpen: null,
        onClose: null
		}); 
     /*  setTimeout(function() { 
     window.location.replace("{{route('frontend.user.ride.show', $ride->slug)}}");
    }, 3000); */
});

})


})

</script>

<script>
  $(document).ready(function() {
$('#driver_schedule_time_picker').datetimepicker({
    format: 'LT'
});

});


</script>
@endsection