@extends('frontend.layouts.app')

@section('title', app_name() . ' | ' . __('navs.general.home'))













@section('google-maps')
{!! $rideMap['js'] !!}

@endsection
@section('prescripts')

@endsection

@section('xcss')

@endsection

@section('content')


@include('frontend.partials.singleRide.breadcrumb')
@include('frontend.partials.singleRide.ride')

@endsection


@section('xjs')




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
						},


						})
					 
			.done(function(w) {
        console.log(w);
});
})





})

</script>
@endsection