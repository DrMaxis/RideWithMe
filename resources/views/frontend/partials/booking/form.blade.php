<!-- Page Content -->
<div class="section-padding"></div>
<!-- Container -->
<div class="container">
	<!-- Blog Area -->
	<div class="col-md-12 booking-area">

		<div class="section-header">
			<h3>Create a Ride</h3>
		</div>


		<!-- Online Booking Form -->
		<form id="book-ride-form" class="online-booking-form row" action="{{route('frontend.user.ride.create')}}"
			method="POST">
			@csrf
			<div class="booking-details-container ">

				<div class="row">
					<div class="col-12 col-md-6">
						<div class="form-group">
							<label>Pick Up Location</label>
							<input type="text" class="form-control" name="pickup_location" id="pickup_location_input"
								data-pickupLocation="{{session()->get('rideRequestSessionData')['pickup_location']}}"
								value="{{session()->get('rideRequestSessionData')['pickup_location']}}"
								placeholder="place, City">
						</div>
						<!--col-->
					</div>
					<!--row-->

					<div class="col-12 col-md-6">
						<div class="form-group">
							<label>Drop Off Location</label>
							<input type="text" class="form-control" name="dropoff_location" id="dropoff_location_input"
								data-dropoffLocation="{{session()->get('rideRequestSessionData')['dropoff_location']}}"
								value="{{session()->get('rideRequestSessionData')['dropoff_location']}}"
								placeholder="place, City">
						</div>
						<!--form-group-->
					</div>
					<!--col-->
				</div>
				<!--row-->


				<div class="row">
					<div class="col-12 col-md-4">
						<div class="form-group">
							<label for="request_date">Date & Time</label>
							<div id="datepicker" class="input-group">
								<input class="form-control" data-format="MM/dd/yyyy HH:mm:ss PP" id="request_date"
									name="request_date"
									value="{{session()->get('rideRequestSessionData')['request_date']}}"
									placeholder="DD/MM/YYYY" />
								<span class="add-on">
									<i data-time-icon="icon-time" data-date-icon="icon-calendar"><img
											src="{{asset('img/frontend/icons/date-picker.png')}}"
											alt="datepicker" /></i>
								</span>
							</div>
						</div>
						<!--col-->
					</div>
					<!--row-->

					<div class="col-12 col-md-4">
						<div class="form-group">
							<label>Name This Ride</label>
							<input type="text" class="form-control" name="ride_name" id="ride_name_input"
								value="{{old('ride_name')}}" placeholder="Ride Name">
						</div>
						<!--form-group-->
					</div>
					<!--col-->

					<div class="col-12 col-md-4">
						<div class="form-group">
							<label>Passenger or Driver</label>
							<select class="form-control" id="ride_option_selector">
								<option id="rider_option" data-state="passenger">Passenger</option>
								<option id="rider_option" data-state="driver">Driver</option>
							</select>
						</div>
					</div>


				</div>


				<!--row-->
				<div data-status="unverified" class="row car-info hide-form">
					@if(count(auth()->user()->cars) >= 0)

					<div class="col-12 col-md-4">
						<div data-status="unverified" class="form-group car-group">
							<p>

								You do not have any Cars saved to your account.
								Please Add one before continuing.

							</p>

						</div>
					</div>

					@else


					<div class="col-12 col-md-4">
						<div data-status="verified" class="form-group car-group">
							<label>Select A Car</label>
							<select class="form-control" id="car_option_selector">
								@foreach(auth()->user()->cars as $carOption)
								<option id="car_option" data-carID="{{$carOption->uuid}}">{{$carOption->name}}
								</option>
								@endforeach
							</select>
						</div>
					</div>



					<div class="col-12 col-md-4">
						<div class="form-group">
							<label>Ride Price</label>
							<input type="text" class="form-control" name="ride_price" id="ride_price_input"
								value="{{old('ride_price')}}" placeholder="Ride Price">
						</div>
					</div>



					@endif
				</div>


				<div class="row">
					<div class="col-12 col-md-12">
						<div class="form-group">
							<label>Ride Notes Or Specifics</label>
							<textarea id="ride_notes_input" name="ride_notes" class="form-control" rows="5"
								placeholder="Add Ride Notes" value="{{old('ride_notes')}}"></textarea>
						</div>
						<!--form-group-->
					</div>
				</div>


				<div class="row hidden-inputs hide-form">
					<div class="col-12 col-md-4">
						<div class="form-group">
							<input type="hidden" class="form-control" name="total_distance" id="total_distance_input" />
						</div>
						<!--form-group-->
					</div>

					<div class="col-12 col-md-4">
						<div class="form-group">
							<input type="hidden" class="form-control" name="travel_time" id="travel_time_input" />
						</div>
						<!--form-group-->
					</div>

				</div>


		</form><!-- Online Booking Form/- -->

	</div>

</div><!-- Container/- -->