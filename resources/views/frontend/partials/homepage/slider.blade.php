
	<!-- Photo Slider2 -->	
	<div class="container-fluid photos-slider2 no-padding">
            <div id="photos-slider2" class="carousel slide" data-ride="carousel">			
                <div class="carousel-inner" role="listbox">
                    <div class="item active">
                        <img src="{{asset('img/frontend/placeholders/ghana-city.jpg')}}" alt="side-1"/>
                        <div class="container photos-slider2-content">						
                            <div class="col-md-8 col-sm-12 col-xs12 pull-right">
                                <div class="slider-content">
                                    <h2>A reliable way to</h2>
                                    <h2>Travel Around</h2>
                                    <p>We Offer The Best Carpooling Service In Ghana</p>							
                                    <a href="#" title="Learn More" class="learn-more">Learn More</a>		
                                   
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="item">
                        <img src="{{asset('img/frontend/placeholders/soho.jpg')}}" alt="side-1"/>
                        <div class="container photos-slider2-content">						
                            <div class="col-md-8 col-sm-12 col-xs12 pull-right">
                                <div class="slider-content">
                                    <h2>A reliable way to</h2>
                                    <h2>Travel Around</h2>
                                    <p>We Offer The Best Carpooling Service In Ghana</p>							
                                    <a href="#" title="Learn More" class="learn-more">Learn More</a>		
                                   
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="item">
                            <img src="{{asset('img/frontend/placeholders/Ghana7.jpg')}}" alt="side-1"/>
                            <div class="container photos-slider2-content">						
                                <div class="col-md-8 col-sm-12 col-xs12 pull-right">
                                    <div class="slider-content">
                                        <h2>A reliable way to</h2>
                                        <h2>Travel Around</h2>
                                        <p>We Offer The Best Carpooling Service In Ghana</p>							
                                        <a href="#" title="Learn More" class="learn-more">Learn More</a>		
                                       
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
            <!-- Booking Form -->
            <div class="booking-form">
                <div class="container">
                    <div class="col-md-4">
                        <form name="book-taxi" class="book-taxi-form" action="{{ route('frontend.ride.session.request') }}" method="POST">
                            @csrf 

                            <h3>Request A Ride Now</h3>	
                            <div class="form-group col-md-6 col-sm-6">
                                <label for="passenger_name">Name :</label>
                                <input type="text" class="form-control" id="passenger_name" name="passenger_name" value="{{$logged_in_user->name ?? old('passenger_name')}}" placeholder="Your Name" />
                            </div>
                            <div class="form-group col-md-6 col-sm-6">
                                <label for="phone_number">Phone Number :</label>
                                <input type="text" class="form-control" id="phone_number" name="phone_number" value="{{ $logged_in_user->phone_number ?? old('phone_number')}}" placeholder="Enter Phone Number" />
                                <span id="valid-msg" class="hide" style="color:green;">✓ Valid</span>
                                <span id="error-msg" class="hide" style="color:red;"></span>
                            </div>
                            <div class="form-group col-md-6 col-sm-6">
                                <label for="pickup_location">Pickup Place :</label>
                                <input type="text" class="form-control" id="pickup_location_input" name="pickup_location" value="{{old('pickup_location')}}" placeholder="Start From" />
                            </div>
                            <div class="form-group col-md-6 col-sm-6">
                                <label for="dropoff_location">Drop Place :</label>
                                <input type="text" class="form-control" id="dropoff_location_input" name="dropoff_location" value="{{old('dropoff_location')}}" placeholder="Drop To" />
                            </div>
                            <div class="form-group col-md-12">
                                <label for="request_date">Date Pickup :</label>									
                                <div id="datepicker" class="input-group">
                                    <input class="form-control" data-format="MM/dd/yyyy HH:mm:ss PP" id="request_date" name="request_date" value="{{old('request_date')}}" placeholder="DD/MM/YYYY" />
                                    <span class="add-on">
                                        <i data-time-icon="icon-time" data-date-icon="icon-calendar"><img src="{{asset('img/frontend/icons/date-picker.png')}}" alt="datepicker"/></i>
                                    </span> 
                                </div>
                            </div>
                            <div class="col-md-12"><button type="submit" title="submit" class="btn">Submit</button></div>
                        </form>
                    </div>
                </div>
            </div><!-- Booking Form /- -->
        </div ><!-- Photo Slider/- -->