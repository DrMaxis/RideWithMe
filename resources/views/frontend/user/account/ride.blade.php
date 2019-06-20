@extends('frontend.user.account.layout.ui')


@section('xcss')
<link href="{{asset('css/user/vendor/datatables/dataTables.bootstrap4.min.css')}}" rel="stylesheet">
<link href="{{asset('vendor/bootstrap/datetimepicker/bootstrap-datetimepicker.min.css')}}" rel="stylesheet">
<link href="{{asset('vendor/bootstrap/datetimepicker/bootstrap-datetimepicker-standalone.css')}}" rel="stylesheet">
<link rel="stylesheet" href="{{asset('vendor/js/jquery.notify.min.css')}}">

<style>
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


    .hidden-form {
        display: none !important;
    }

    .off {
        display: none !important;
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

    .has-success .input-group-addon {
        color: #3c763d;
        background-color: #dff0d8;
        border-color: #3c763d
    }

    .has-warning .input-group-addon {
        color: #8a6d3b;
        background-color: #fcf8e3;
        border-color: #8a6d3b
    }

    .has-error .input-group-addon {
        color: #a94442;
        background-color: #f2dede;
        border-color: #a94442
    }

    .form-inline .input-group .input-group-addon,
    .form-inline .input-group .input-group-btn,
    .form-inline .input-group .form-control {
        width: auto
    }

    .input-group-lg>.form-control,
    .input-group-lg>.input-group-addon,
    .input-group-lg>.input-group-btn>.btn {
        height: 46px;
        padding: 10px 16px;
        font-size: 18px;
        line-height: 1.33;
        border-radius: 6px
    }

    select.input-group-lg>.form-control,
    select.input-group-lg>.input-group-addon,
    select.input-group-lg>.input-group-btn>.btn {
        height: 46px;
        line-height: 46px
    }

    textarea.input-group-lg>.form-control,
    textarea.input-group-lg>.input-group-addon,
    textarea.input-group-lg>.input-group-btn>.btn,
    select[multiple].input-group-lg>.form-control,
    select[multiple].input-group-lg>.input-group-addon,
    select[multiple].input-group-lg>.input-group-btn>.btn {
        height: auto
    }

    .input-group-sm>.form-control,
    .input-group-sm>.input-group-addon,
    .input-group-sm>.input-group-btn>.btn {
        height: 30px;
        padding: 5px 10px;
        font-size: 12px;
        line-height: 1.5;
        border-radius: 3px
    }

    select.input-group-sm>.form-control,
    select.input-group-sm>.input-group-addon,
    select.input-group-sm>.input-group-btn>.btn {
        height: 30px;
        line-height: 30px
    }

    textarea.input-group-sm>.form-control,
    textarea.input-group-sm>.input-group-addon,
    textarea.input-group-sm>.input-group-btn>.btn,
    select[multiple].input-group-sm>.form-control,
    select[multiple].input-group-sm>.input-group-addon,
    select[multiple].input-group-sm>.input-group-btn>.btn {
        height: auto
    }

    .input-group-addon,
    .input-group-btn,
    .input-group .form-control {
        display: table-cell;
    }

    .input-group-addon:not(:first-child):not(:last-child),
    .input-group-btn:not(:first-child):not(:last-child),
    .input-group .form-control:not(:first-child):not(:last-child) {
        border-radius: 0
    }



    .input-group-addon {
        padding: 8px 12px;
        font-size: 14px;
        font-weight: 400;
        line-height: 1;
        color: #555;
        text-align: center;
        background-color: #eee;
        border: 1px solid #ccc;
        border-radius: 4px
    }

    .input-group-addon.input-sm {
        padding: 5px 10px;
        font-size: 12px;
        border-radius: 3px
    }

    .input-group-addon.input-lg {
        padding: 10px 16px;
        font-size: 18px;
        border-radius: 6px
    }

    .input-group-addon input[type=radio],
    .input-group-addon input[type=checkbox] {
        margin-top: 0
    }

    .input-group .form-control:first-child,
    .input-group-addon:first-child,
    .input-group-btn:first-child>.btn,
    .input-group-btn:first-child>.btn-group>.btn,
    .input-group-btn:first-child>.dropdown-toggle,
    .input-group-btn:last-child>.btn:not(:last-child):not(.dropdown-toggle),
    .input-group-btn:last-child>.btn-group:not(:last-child)>.btn {
        border-top-right-radius: 0;
        border-bottom-right-radius: 0
    }

    .input-group-addon:first-child {
        border-right: 0
    }

    .input-group .form-control:last-child,
    .input-group-addon:last-child,
    .input-group-btn:last-child>.btn,
    .input-group-btn:last-child>.btn-group>.btn,
    .input-group-btn:last-child>.dropdown-toggle,
    .input-group-btn:first-child>.btn:not(:first-child),
    .input-group-btn:first-child>.btn-group:not(:first-child)>.btn {
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
    }

    .input-group-addon:last-child {
        border-left: 0;
    }

    .mbrem-1 {
        margin-bottom: 1rem;
    }
</style>
@endsection

@section('topscripts')
@include('frontend.user.account.partials.scripts.bookinggooglemap')
@endsection

@section('content')
<div id="submit_response" class="">
                                              
    </div>

<!-- Begin Page Content -->
<div class="container-fluid">

    <!-- Page Heading -->
    <div class="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 class="h3 mb-0 text-gray-800">Dashboard</h1>
    </div>

    <!-- Content Row -->
    <div class="row rider_info">
        <div class="transaction-loader off" style="margin: 0 auto">
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

        <!-- Content Column -->
        <div class="col-lg-12 mb-4 rider-info-col">

            <!-- Project Card Example -->
            <div class="card shadow mb-4">
                <div class="card-header py-3">
                    <h6 class="m-0 font-weight-bold text-primary">Post A Ride</h6>
                </div>
                <div class="card-body">
                    <div class="row">
                        <div class="col-lg-12">
                            <!-- Project Card Example -->
                            <div class="card shadow mb-4">
                                <div class="card-header py-3">
                                    <h6 class="m-0 font-weight-bold text-primary">Rider Information</h6>
                                </div>
                                <div class="card-body">
                                    @include('frontend.user.account.partials.components.forms.riderinformation')
                                </div>

                            </div>
                        </div>

                    </div>

                    <div class="row">
                        <div class="col-lg-6">
                            <!-- Project Card Example -->
                            <div class="card shadow mb-4">
                                <div class="card-header py-3">
                                    <h6 class="m-0 font-weight-bold text-primary">Schedule</h6>
                                </div>
                                <div class="card-body">
                                    <div class="driver-schedule-container hidden-form">
                                        @include('frontend.user.account.partials.components.forms.driverschedule')
                                    </div>
                                    <div class="passenger-schedule-container">
                                        @include('frontend.user.account.partials.components.forms.passengerschedule')
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div class="col-lg-6">
                            <!-- Project Card Example -->
                            <div class="card shadow mb-4">
                                <div class="card-header py-3">
                                    <h6 class="m-0 font-weight-bold text-primary">Seating Information</h6>
                                </div>
                                <div class="card-body">
                                    <div class="car-information-container hidden-form">
                                        @include('frontend.user.account.partials.components.forms.carinformation')
                                    </div>


                                    <div class="passenger-seating-container">
                                        @include('frontend.user.account.partials.components.forms.passengerseating')
                                    </div>
                                </div>
                            </div>
                            <!-- Color System -->
                        </div>

                        <div class="col-lg-12">
                            <div class="card shadow mb-4">
                                <div class="card-header py-3">
                                    <h6 class="m-0 font-weight-bold text-primary">Notes & Extra Information
                                    </h6>
                                </div>

                                <div class="card-body">
                                    @include('frontend.user.account.partials.components.forms.extrainformation')

                                </div>
                            </div>
                        </div>




                    </div>


                    <div class="row map pricing">

                        @include('frontend.user.account.partials.components.googlemap')
                        @include('frontend.user.account.partials.components.tables.driverpricing')
                        @include('frontend.user.account.partials.components.tables.passengerpricing')


                    </div>




                    <div class="row submit">



                    </div>






















                </div>
            </div>
        </div>

    </div>

</div>



<!-- /.container-fluid -->

@endsection


@section('xcomponents')
<!-- Scroll to Top Button-->
<a class="scroll-to-top rounded" href="#page-top">
    <i class="fas fa-angle-up"></i>
</a>

{{-- Logout Modal --}}
@include('frontend.user.account.partials.modals.logout')
@endsection


@section('xjs')


<!-- Page level plugins -->
<!-- Page level plugins -->

<script src="{{asset('js/user/vendor/datatables/jquery.dataTables.min.js')}}"></script>
<script src="{{asset('js/user/vendor/datatables/dataTables.bootstrap4.min.js')}}"></script>
<script src="{{asset('vendor/moment/moment-with-locales.js')}}"></script>
<script src="{{asset('vendor/bootstrap/datetimepicker/bootstrap-datetimepicker.min.js')}}"></script>
<script type="text/javascript" src="{{asset('vendor/js/jquery.notify.min.js')}}"> </script>


<!-- Page level custom scripts -->
{{-- <script src="{{asset('js/demo/datatables-demo.js')}}"></script> --}}


<script type="text/javascript">
    let pickupLocationInput = $('#pickup_location_input');
            let dropoffLocationInput = $('#dropoff_location_input');
            let requestDateInput = $('#scheduled_date_input');
            let extraInfoInput = $('#extra_information_input');
            let calculateButton = $('.calculate_ride');
            let submitButton = $('#submit-ride');
    $(function () {
            
          let submitUrl = "{{route('frontend.user.ride.create')}}";

           
           

            if($('.col-lg-12.car-information').attr('data-verification') == 'unverified') {
                submitButton.attr('disabled', true);
            }
        
            /* when user chooses passenger or driver  */
            
            
         $('#riding_as_selector').on('change', function(e) {
                    var option = this.value;
                    clearInputs();
                      if(option == 'Driver') {
                        $('.driver-schedule-container,.car-information-container,.driver-schedule-container,.driver-pricing-container').removeClass('hidden-form');
                        $('.passenger-schedule-container,.passenger-seating-container,.passenger-schedule-container,.passenger-pricing-container').addClass('hidden-form');
                        } else if(option == 'Passenger') {
                        $('.driver-schedule-container,.car-information-container,.driver-schedule-container,.driver-pricing-container').addClass('hidden-form');
                        $('.passenger-schedule-container,.passenger-seating-container,.passenger-schedule-container,.passenger-pricing-container').removeClass('hidden-form');
                    } else {
    
                    }
            });
    
            $('#routeClear').on('click', function() {
                clearInputs();
            });
    


$('.show-directions-button').on('click', function() {

if($(this).attr('data-directionsNextState') == 'visable') {
    $('.col-lg-12.map-directions').removeClass('hidden-form');
    $('.show-directions-button').text('Hide Directions');
    $(this).attr('data-directionsNextState', 'hidden');
} else if($(this).attr('data-directionsNextState') == 'hidden') {
 $('.col-lg-12.map-directions').addClass('hidden-form');
 $('.show-directions-button').text('Show Directions');
 $(this).attr('data-directionsNextState', 'visable');
}

});




            function clearInputs() {
                 $('#passenger_schedule_date_input').attr('value', '');
                 $('#passenger_schedule_time_input').attr('value', '');
                 $('#seats_needed_input').attr('value', '');
                 $('#child_seats_needed_input').attr('value', '');
                 $('#luggage_amount_input').attr('value', '');
                 $('input[name=price_option]').each(function(index, option) {
                     $(this).attr('disabled', false);
                    });  
                    $('.price-option-text').each(function(index, option) {
                     $(this).text("");
                     $(this).attr('data-price', "");
                    });  
                    $('.driver#price_offer_amount_input').attr('disabled', false);
                    $('.passenger#price_offer_amount_input').attr('disabled', false);
                    $('#travel_time_input').attr('value', '');
                    $('#total_distance_input').attr('value', '');  
                    $('.passenger#travel-duration-text').text("");
                    $('.passenger#travel-distance-text').text("");
                    $('.passenger#estimated-price-text').text("");
                    $('.driver#travel-duration-text').text("");
                    $('.driver#travel-distance-text').text("");
                    $('.driver#estimated-price-text').text("");
                    $('.driver#price_offer_amount_input').attr('value', '');
                    $('.passenger#price_offer_amount_input').attr('value', '');
                    $('#driver_schedule_datetime_input').attr('value', '');
                    $('#pickup_location_input').attr('value', '');
                    $('#available_seats_input').attr('value', '');
                    $('#pickup_price_input').attr('value', '');

                    
            }
          



    $('#yes_children_checkbox').change(function() {
    if ($('#yes_children_checkbox').is(':checked')) {
    $('.children-input-container').removeClass('hidden-form');
    $('#no_children_checkbox').prop('disabled', true);
} else if($('#yes_children_checkbox').prop('checked') == false) {
    $('.children-input-container').addClass('hidden-form');
    $('#no_children_checkbox').prop('disabled', false);   
}
});

$('#no_children_checkbox').change(function() {
if ($('#no_children_checkbox').is(':checked')) {
    $('.children-seats-needed-text').addClass('hidden-form');
$('#yes_children_checkbox').prop('disabled', true);
} else if($('#no_children_checkbox').prop('checked') == false) {
$('#yes_children_checkbox').prop('disabled', false);
}
});       

$('#yes_luggage_checkbox').change(function() {
    if ($('#yes_luggage_checkbox').is(':checked')) {
    $('.luggage-input-container').removeClass('hidden-form');
    $('#no_luggage_checkbox').prop('disabled', true);
} else if($('#yes_luggage_checkbox').prop('checked') == false) {
    $('.children-seats-needed-text').addClass('hidden-form');
    $('.luggage-input-container').addClass('hidden-form');
    $('#no_luggage_checkbox').prop('disabled', false);   
}
});

$('#yes_luggage_space_checkbox').change(function() {
    if ($('#yes_luggage_space_checkbox').is(':checked')) {
    $('.luggage-space-input-container').removeClass('hidden-form');
    $('#no_luggage_space_checkbox').prop('disabled', true);
} else if($('#yes_luggage_space_checkbox').prop('checked') == false) {
    $('.luggage-space-input-container').addClass('hidden-form');
    $('#no_luggage_space_checkbox').prop('disabled', false);   
}
});
           
$('#no_luggage_checkbox').change(function() {
if ($('#no_luggage_checkbox').is(':checked')) {
$('#yes_luggage_checkbox').prop('disabled', true);
} else if($('#no_luggage_checkbox').prop('checked') == false) {
$('#yes_luggage_checkbox').prop('disabled', false);
}
});   


    });
                    
         
    $('#yes_pickup_checkbox').change(function() {
    if ($('#yes_pickup_checkbox').is(':checked')) {
    $('.pickup-price-container').removeClass('hidden-form');
    $('.pickups-available').removeClass('hidden-form');
    $('#no_pickup_checkbox').prop('disabled', true);
} else if($('#yes_pickup_checkbox').prop('checked') == false) {
    $('.pickup-price-container').addClass('hidden-form');
    $('.pickups-available').addClass('hidden-form');
    $('#no_pickup_checkbox').prop('disabled', false);   
}
});
    

    $('#pickup_location_input').on('focus', function() {
         var input = this.value;
          $('.pickup-location-text').text(input);
         $('#pickup_location_input').on('blur', function() {
            var location = this.value;
          $('.pickup-location-text').text(location);
         });  
    });

    
    $('#dropoff_location_input').on('focus', function() {
         var input = this.value;
          $('.dropoff-location-text').text(input);
     $('#dropoff_location_input').on('blur', function() {
            var location = this.value;
          $('.dropoff-location-text').text(location);
         });  
    });

    $('#driver_schedule_datetime_input').on('blur', function() {
            var schedule = this.value;
          $('.driver-schedule-date-text').text(schedule);
         }); 

    $('#passenger_schedule_date_input').on('blur', function() {
            var schedule = this.value;
          $('.passenger-schedule-date-text').text(schedule);
         });  

         $('#passenger_schedule_time_input').on('blur', function() {
            var time = this.value;
          $('.passenger-schedule-time-text').text(time);
         });  

    
    $('#seats_needed_input').on('change', function() {
        var value = this.value;
    $('.seats-needed-text').text(value + ' Seats');

    });

    $('#child_seats_needed_input').on('change', function() {
            var childseats = this.value;
            $('.children-seats-needed-text').text('Children Seats: ' + childseats);

        });

    $('#luggage_amount_input').on('change', function() {
        var value = this.value;
    $('.luggage-amount-text').text('Carrying ' + value + ' Bags');

    });


    
    
    $('#pickup_price_input').on('change', function() {
        var value = this.value;
    $('.pickup-price-text').text(value + ' Per Seat');

    });

    
    $('#pickup_location_time_picker').on('change', function() {
        var value = this.value;
    $('.pickup-location-time-text').text(value);

    });


 $('#available_seats_input').on('change', function() {
        var value = this.value;
    $('.seats-available-text').text(value);

    });

    
  
 $('input[name=price_option]').on('change', function() {
    var selectedOption = $(this).attr('id');         
if($(this).is(':checked')) {

           console.log($(this).attr('id'));
           $(this).attr('disabled', false);
           $('.driver#price_offer_amount_input').attr('disabled', true);
           $('.passenger#price_offer_amount_input').attr('disabled', true);
 

$('input[name=price_option]').each(function(index, option) {

if($(this).attr('id') != selectedOption) {
    console.log($(this).attr('id'));
    $(this).attr('disabled', true);
  } 
});  
} else {
    $('input[name=price_option]').each(function(index, option) {
 $(this).attr('disabled', false);
 $('.driver#price_offer_amount_input').attr('disabled', false);
$('.passenger#price_offer_amount_input').attr('disabled', false);
}); 
    } 

 });
   
    

 $('.passenger#price_offer_amount_input').on('change', function() {
    $('input[name=price_option]').each(function(index, option) {
        $(this).attr('disabled', true);
});

 });
 $('.driver#price_offer_amount_input').on('change', function() {
    $('input[name=price_option]').each(function(index, option) {
        $(this).attr('disabled', true);
});

 });
  
   

 
var ameninityOptions = [];
$( '.driver-amenities-dropdown label' ).on( 'click', function( event ) {

   var $target = $( event.currentTarget ),
       val = $target.attr( 'data-value' ),
       $inp = $target.find( 'input' ),
       idx;

   if ( ( idx = ameninityOptions.indexOf( val ) ) > -1 ) {
      ameninityOptions.splice( idx, 1 );
      setTimeout( function() { $inp.prop( 'checked', false ) }, 0);
   } else {
      ameninityOptions.push( val );
      setTimeout( function() { $inp.prop( 'checked', true ) }, 0);
   }

   $( event.target ).blur();
      
   console.log( ameninityOptions );
   return false;
});





$('.calculate_ride').on('click', function() {
    setTimeout(() => {
			
                var $travelTime = $('#travel_time_input').val();
                var $totalDistance = $('#total_distance_input').val();  
                var pTravelDurationText = $('.passenger#travel-duration-text');
                var pTravelDistanceText = $('.passenger#travel-distance-text');
                var pEstimatedPriceText = $('.passenger#estimated-price-text');
                var dTravelDurationText = $('.driver#travel-duration-text');
                var dTravelDistanceText = $('.driver#travel-distance-text');
                var dEstimatedPriceText = $('.driver#estimated-price-text');
                var $ridePrice = parseFloat(calculateFare($totalDistance, $travelTime)).toFixed(2); 
                var $minPrice = $('input[name=price_option').first().attr('data-price');

                pTravelDurationText.text(parseFloat(Math.round(($travelTime * 100) / 100)/ 60).toFixed(2) + ' Minutes'); 
                pTravelDistanceText.text(parseFloat(Math.round(($totalDistance * 100) / 100)/ 1000).toFixed(2) + ' KM');
                pEstimatedPriceText.text(parseFloat((calculateFare($totalDistance, $travelTime))).toFixed(2) + ' GH¢');
                dTravelDurationText.text(parseFloat(Math.round(($travelTime * 100) / 100)/ 60).toFixed(2) + ' Minutes'); 
                dTravelDistanceText.text(parseFloat(Math.round(($totalDistance * 100) / 100)/ 1000).toFixed(2) + ' KM');
                dEstimatedPriceText.text(parseFloat((calculateFare($totalDistance, $travelTime))).toFixed(2) +' GH¢');
                      
            
                $('input[name=price_option]').each(function(index, option) {
                    var $priceOptionValue = $(this).attr('data-priceOption');
                    var label = $("label[for='" + $(this).attr('id') + "']");
                    var $suggestedPrice = parseFloat(calculateSuggestedPrice($priceOptionValue, $ridePrice)).toFixed(2);
                    label.text($suggestedPrice + 'GH¢');
                    $(this).attr('data-price', $suggestedPrice); 
                });
            
    $('.driver#price_offer_amount_input').attr('min', $ridePrice);
    $('.passenger#price_offer_amount_input').attr('min', $ridePrice);

            
    
            function calculateSuggestedPrice($price, $ridePrice) {
                var $newPrice = (parseFloat($price) * parseFloat($ridePrice) + parseFloat($ridePrice));
                return $newPrice;
                } 

                
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


                
                    }, 3000); 
}); 












$('.driver-submit#submit-ride').on('click', function() {
    let submitUrl = "{{route('frontend.user.ride.create')}}";
var pickupLocation = $('#pickup_location_input').val();
var dropoffLocation =  $('#dropoff_location_input').val();
var scheduledTime = $('#driver_schedule_time_input').val();
var scheduledDate = $('#driver_schedule_datetime_input').val(); 
var availableSeats = $('#available_seats_input').val();
var carSelector = document.querySelector('#car_option_selector');	
var car = carSelector.options[carSelector.selectedIndex].getAttribute('data-carID');
var rideNotes = $('#extra_information_input').val();
var rideOption = $('#riding_as_selector').val();
var token = '{{Session::token()}}';
var travelTime = $('#travel_time_input').val();
var totalDistance = $('#total_distance_input').val();
var priceOffer = $('.driver#price_offer_amount_input').val();
var priceInput =  $('input[name=price_option ]:checked').attr('data-priceID');
var luggageSpaceAvailable = $('#luggage_space_amount_input').val();
var ameninityOptions = [];
if ($('#yes_pickup_checkbox').is(':checked')) {
var pickupsOfferd = 1;
var pickupPrice = $('#pickup_price_input').val();
} else {
    var pickupsOfferd = 0; 
    var pickupPrice = 0.00;
}


$('input[name=ameninity_option]:checked').each(function(index, value) {
ameninityOptions.push($(this).attr('data-amenityID'));  

});

        
$('.rider-info-col').remove();				
$('.transaction-loader').removeClass('off');

				$.ajax({
					method: 'POST',
                    url: submitUrl,
                    headers: {
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                            },
					data: {
                        pickupLocation: pickupLocation,
                        dropoffLocation: dropoffLocation,
                        scheduledTime: scheduledTime,
                        scheduledDate: scheduledDate,
                        rideNotes: rideNotes,
                        rideOption: rideOption,
                        availableSeats: availableSeats,
                        token: token,
                        travelTime: travelTime,
                        totalDistance: totalDistance,
                        askingPriceOption: priceInput,
                        askingPriceOffer: priceOffer,
                        ameninityOptions: ameninityOptions,
                        luggageSpaceAvailable: luggageSpaceAvailable,
                        car:car,
                        pickupsOfferd,
                        pickupPrice,
                        
						},


                        })
                        .fail(function(jqXHR, textStatus, error) {
                            $('.transaction-loader').addClass('off');
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
                $('#submit_response').show().append(value+"<br/>"); //this is my div with messages
                }
            });
            setTimeout(function() { 
     window.location.replace("{{route('frontend.user.account.booking')}}");
    }, 10000);

          }

                        })
					 
			.done(function(w) {
                
	$.notify({
        wrapper: 'body',
        message: 'Your request submitted successfuly! Redirecting to Dashboard',
        type: 'success',
        position: 8,
        dir: 'ltr',
        autoClose: true,
        duration: 5000,
        onOpen: null,
        onClose: null
		    }); 
        
        setTimeout(function() { 
$('.transaction-loader').addClass('off');
window.location.replace("{{route('frontend.user.account')}}");
}, 3000);
});

    });




		/* submit form */
				
$('.passenger-submit#submit-ride').on('click', function() {


    let submitUrl = "{{route('frontend.user.ride.create')}}";
var pickupLocation = $('#pickup_location_input').val();
var dropoffLocation =  $('#dropoff_location_input').val();
var scheduledTime = $('#passenger_schedule_time_input').val();
var scheduledDate = $('#passenger_schedule_date_input').val();
var rideNotes = $('#extra_information_input').val();
var rideOption = $('#riding_as_selector').val();
var token = '{{Session::token()}}';
var travelTime = $('#travel_time_input').val();
var totalDistance = $('#total_distance_input').val();
var priceInput =  $('input[name=price_option ]:checked').attr('data-priceID');
var priceOffer = $('.passenger#price_offer_amount_input').val();
var luggageSpaceNeeded = $('#luggage_amount_input').val();
var childSeatsNeeded = $('#child_seats_needed_input').val();
var seatsNeeded = $('#seats_needed_input').val();




                $('.rider-info-col').remove();
				$('.transaction-loader').removeClass('off');

				$.ajax({
					method: 'POST',
                    url: submitUrl,
                    headers: {
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                            },
                            
					data: {
                        pickupLocation: pickupLocation,
                        dropoffLocation: dropoffLocation,
                        scheduledTime: scheduledTime,
                        scheduledDate: scheduledDate,
                        rideNotes: rideNotes,
                        rideOption: rideOption,
                        token: token,
                        travelTime: travelTime,
                        totalDistance: totalDistance,
                        askingPriceOption: priceInput,
                        askingPriceOffer: priceOffer,
                        luggageSpaceNeeded: luggageSpaceNeeded,
                        childSeatsNeeded: childSeatsNeeded,
                        seatsNeeded: seatsNeeded
                        },

                        })
                        .fail(function(jqXHR, textStatus, error) {
                            $('.transaction-loader').addClass('off');
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
            setTimeout(function() { 
     window.location.replace("{{route('frontend.user.account.booking')}}");
    }, 10000);
 }

                        })
					 
			.done(function(w) {
 
				$.notify({
        wrapper: 'body',
        message: 'Your request submitted successfuly! Redirecting to Dashboard',
        type: 'fail',
        position: 8,
        dir: 'ltr',
        autoClose: true,
        duration: 5000,
        onOpen: null,
        onClose: null
		}); 
        setTimeout(function() { 
$('.transaction-loader').addClass('off');
     window.location.replace("{{route('frontend.user.account')}}");
    }, 3000);

        
});

});















    
</script>


<script>
    $(document).ready(function() {
  $('#dataTable').DataTable(); 
  $('#passenger_schedule_date_picker, #driver_schedule_datetime_picker').datetimepicker();
  $('#passenger_schedule_time_picker').datetimepicker({
      format: 'LT'
  });
  $('#driver_schedule_time_picker').datetimepicker({
      format: 'LT'
  });
 
});

 
</script>
@endsection