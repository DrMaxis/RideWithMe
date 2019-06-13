

<script>
        (function () {
            
          let submitUrl = "{{route('frontend.user.ride.create')}}";

            let rideAsOption = $('#riding_as_selector');
            let pickupLocationInput = $('#pickup_location_input');
            let dropoffLocationInput = $('#dropoff_location_input');
            let requestDateInput = $('#scheduled_date_input');
            let extraInfoInput = $('#extra_information_input');
            let calculateButton = $('.calculate_ride');
        
            /* when user chooses passenger or driver  */
            
            
            rideAsOption.on('change', function(e) {
                    var option = this.value;

                      if(option == 'Driver') {
                        $('.car-info').removeClass('hidden');
        
                        } else if(option == 'Passenger') {
    
                        submitButton.attr('disabled', false);
                        $('.car-info').addClass('hide-form');
                        $('.driver_fee').addClass('hide-form');
    
                    } else {
    
                    }
            });
    
    
    
    
    
    })();
                    
                    
    
    
    </script>
    