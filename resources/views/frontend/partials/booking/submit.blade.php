<!-- Submit Form Btn Section -->
<div class="container">






	<div class="booking-submit">

		{{-- <div class="textcenter mt-25">
		<button id="submit-ride" class="btn btn-primary mb-10">Confirm This Ride</button>


	</div> --}}

		<div class="section-header">
			<h3>Confirm Your Ride</h3>
		</div>

		<div class="row">
			<div class="col-md-12 col-sm-6 col-xs-12 animated fadeInUp" style="
    margin: 0 auto;
    float: none;">
				<article class="blog-post-list">



					<div class="entry-cover">
						<a href="#"></a>

						<div class="entry-meta">
							<div class="meta-inner">
								<div class="by-line pull-left ride_name"></div>

							</div>
							<div class="meta-inner">
								<div class="post-date pull-left "><span>Requested As</span></div>
								<div class="tags user_info pull-right">

									<a href="#" class="user_info_text"></a>

								</div>
							</div>
							<div class="meta-inner">
								<div class="post-date pull-left"><span>Pickup Location</span></div>
								<div class="tags pickup_location pull-right">

									<a href="#" class="pickup_location_text"></a>
								</div>
							</div>
							<div class="meta-inner">
								<div class="post-date pull-left "><span> Dropoff Location</span></div>
								<div class="tags dropoff_location pull-right">

									<a href="#" class="dropoff_location_text"></a>
								</div>
							</div>
							<div class="meta-inner">
								<div class="post-date pull-left"><span> Scheduled For:</span></div>
								<div class="tags scheduled_time pull-right">

									<a href="#" class="scheduled_time_text"></a>
								</div>
							</div>
							<div class="meta-inner">
								<div class=" post-date pull-left"><span> Travel Distance</span></div>
								<div class="tags total_distance  pull-right">

									<a href="#" class="total_distance_text"></a>
								</div>
							</div>
							<div class="meta-inner">
								<div class="post-date pull-left"><span>Travel Duration</span></div>
								<div class="tags travel_time pull-right">

									<a href="#" class="travel_time_text"></a>
								</div>
							</div>
							<div class="meta-inner">
								<div class="post-date pull-left"><span> Estimated Fare</span></div>
								<div class="tags estimated_fare pull-right">

									<a href="#" class="estimated_fare_text"></a>
								</div>
							</div>

							<div class="meta-inner">
								<div class="post-date pull-left"><span>Total Fare</span></div>
								<div class="tags total_fare pull-right">

									<a href="#" class="total_fare_text">Value Not Calculated Yet</a>
								</div>
							</div>



						</div>
					</div>
						<div class="blog-content driver_fee hide-form">
						<h3 class="entry-title">Driver's Fee</h3>
						<div class="entry-content">

							<fieldset class="notes textcenter mt-25">

									@foreach($priceOptions as $option)



								<input id="{{$option->name}}" type="radio" name="driver_price_option"  class="price variant-input"  data-priceOption="{{$option->value}}">
                                <label for="{{$option->name}}" class="variant-label">
                                          <span class="label-text">
                                            <span class="radio-button"><img src="{{asset('img/frontend/icons/'.$option->name.'.png')}}" class="variant-image" alt="{{$option->text}}" title="{{$option->text}}"></span>
                                          </span>
										</label> 

										@endforeach
										
								

									
								
							</fieldset>

							<div class="space-text mt-25">
						<p class="driver_gain success"> Your potential gain from this ride will be <span class="driver_gain_value"></span></p>
							</div>
							

						</div>
					</div>

					<div class="blog-content">
						<h3 class="entry-title">Ride Notes</h3>
						<div class="entry-content">

							<div class="notes textcenter mt-25">

								<div class="ride_notes_text">



									
								</div>
								<div class="textcenter mt-25">
										<button id="submit-ride" class="btn btn-primary mb-10">Confirm This
											Ride</button>


									</div>
							</div>
						</div>
					</div>

				
				</article>
			</div>


		</div>










	</div>




</div>
<!-- Submit Form Btn Section /- -->