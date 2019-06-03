(function() {
    const submitUrl = "{{route('frontend.ride.create')}}";
    const pickupLocationInput = $("#pickup_location_input");
    const dropoffLocationInput = $("#dropoff_location_input");
    const requestDateInput = $("#request_date");
    const rideNameInput = $("#ride_name_input");
    const rideNotesInput = $("#ride_notes_input");
    const rideOption = $("#ride_option_selector");
    const submitButton = $("#submit-ride");

    /* when user chooses passenger or driver  */

    rideOption.on("change", function(e) {
        var option = this.value;

        if (option == "Driver") {
            $(".car-info").removeClass("hide-form");
        } else if (option == "Passenger") {
            $(".car-info").addClass("hide-form");
        } else {
        }
    });

    /* submit form */

    submitButton.click(function(event) {
        event.preventDefault();

        var confirmation = window.confirm(
            "By Submitting this ride request you agree to our terms and conditions and ride policies"
        );

        if (confirmation) {
            var pickupLocation = pickupLocationInput.val();
            var dropoffLocation = dropoffLocationInput.val();
            var requestDate = requestDateInput.val();
            var rideName = rideNameInput.val();
            var rideNotes = rideNotesInput.val();
            var option = rideOption.val();
            var token = "{{Session::token()}}";
            var totalDistanceInput = $("#total_distance_input");
            var travelTimeInput = $("#travel_time_input");
            var travelTime = travelTimeInput.val();
            var totalDistance = totalDistanceInput.val();

            console.log("show loader here");

            /* 	$('.transaction-loader').removeClass('off');
				$('.sendmoney').remove(); */
            $.ajax({
                method: "POST",
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
                    _token: token
                },

                success: function(e) {
                    console.log(e);
                    /* 	 $('.transaction-loader').addClass('off');
							 $('.transaction-complete').removeClass('off');   */
                }
            }).done(function(w) {
                console.log("hide loader here");
                /* 	 $('.transaction-complete').addClass('off');
							 $('.modal.fade.show #').addClass('off'); */
                console.log(w);
            });
        } else {
            console.log(event);
        }
    });
})();







