<!-- Page Content -->
<div class="section-padding"></div>
<!-- Container -->
<div class="container">
	<!-- Blog Area -->
	<div class="col-md-9 blog-area">
		<div class="section-header">
			<h3>Book Your Taxi Online</h3>
		</div>


		<!-- Online Booking Form -->
		<form id="book-ride-form" class="online-booking-form row" action="{{route('frontend.ride.create')}}"
			method="POST">
			@csrf



			<div class="booking-details-container ">

				<h4>Book Your Ride</h4>
				<div class="row">
					<div class="col-12 col-md-6">
						<div class="form-group">
							<label>Pick Me Up From</label>
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
							<label>Drop Me Off At</label>
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
								placeholder="Ride Name">
						</div>
						<!--form-group-->
					</div>
					<!--col-->

					<div class="col-12 col-md-4">
						<div class="form-group">
							<label>Ride Notes Or Specifics</label>
							<textarea name="ride_notes" class="form-control" rows="5"
								placeholder="Add Ride Notes"></textarea>
						</div>
						<!--form-group-->
					</div>
				</div>
				<!--row-->





			</div>







			<div class="booking-submit">

				<div class="form-group col-md-6 col-sm-12 col-xs-12">
					<input type="checkbox"><span>Allow Other Users To Join This Ride</span>

				</div>

				<div class="form-group col-md-12 col-sm-12 col-xs-12">

					<input type="checkbox" value="true" class="accept-terms" name="accepted_terms"
						{{ !old('accepted_terms') ?: 'checked' }}><span><a id="fadeLink" class="accept-terms"
							{{-- href="{{route('policy')}}" --}}>I understand and agree with the Terms of Service and
							Cancellation /
							Refund policy</a></span>



				</div>
				<div class="form-group col-md-6 col-sm-12 col-xs-12">
					<button type="submit" class="btn">Confirm This Route & Book Your Ride</button>
				</div>
			</div>



		</form><!-- Online Booking Form/- -->
	</div>

</div><!-- Container/- -->
<div class="section-padding"></div>