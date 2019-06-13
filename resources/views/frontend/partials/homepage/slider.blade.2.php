
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
                        



                            @if(auth()->user())
                            
                                    {{ html()->form('POST', route('frontend.user.ride.session.request'))->class('book-taxi-form')->open() }}
                                    
                                    <h3>Request A Ride Now</h3>	
                                    <div class="form-group col-md-6 col-sm-6">
                                        {{ html()->label(__('validation.attributes.frontend.pickup_location'))->for('pickup_location') }}
                                
                                        {{ html()->text('pickup_location')
                                            ->class('form-control')
                                            ->placeholder(__('validation.attributes.frontend.pickup_location'))
                                            ->attribute('maxlength', 191)
                                            ->required() }}

                                    </div>
                                    <div class="form-group col-md-6 col-sm-6">
                                        {{ html()->label(__('validation.attributes.frontend.dropoff_location'))->for('dropoff_location') }}
                                
                                        {{ html()->text('dropoff_location')
                                            ->class('form-control')
                                            ->placeholder(__('validation.attributes.frontend.dropoff_location'))
                                            ->attribute('maxlength', 191)
                                            ->required() }}
                                    </div>

                                    <div class="form-group col-md-12">
                                        <label for="request_date">Date Pickup :</label>									
                                        <div id="datepicker" class="input-group">
                                            <input class="form-control" data-format="yyyy/MM/dd HH:mm:ss PP" id="request_date" name="request_date" value="{{old('request_date')}}" placeholder="YYY/MM/DD" />
                                            <span class="add-on">
                                                <i data-time-icon="icon-time" data-date-icon="icon-calendar"><img src="{{asset('img/frontend/icons/date-picker.png')}}" alt="datepicker"/></i>
                                            </span> 
                                        </div>
                                    </div>

                                    <div class="col-md-12"><button type="submit" title="submit" class="btn">Submit</button></div>
                               
                                    {{ html()->form()->close() }}
                                     
                                            @else 
                            
                                    {{ html()->form('POST', route('frontend.auth.login.post'))->class('book-taxi-form')->open() }}
                                                       
                            
                                                        <h3>Login & Request A Ride</h3>	
                            
                                                        <div class="form-group col-md-6 col-sm-6">
                                                            {{ html()->label(__('validation.attributes.frontend.email'))->for('email') }}
                                
                                                                    {{ html()->email('email')
                                                                        ->class('form-control')
                                                                        ->placeholder(__('validation.attributes.frontend.email'))
                                                                        ->attribute('maxlength', 191)
                                                                        ->required() }}
                                                        </div>
                            
                                                        <div class="form-group col-md-6 col-sm-6">
                                                                {{ html()->label(__('validation.attributes.frontend.password'))->for('password') }}
                                
                                                                {{ html()->password('password')
                                                                    ->class('form-control')
                                                                    ->placeholder(__('validation.attributes.frontend.password'))
                                                                    ->required() }}
                                                        </div>
                                                     
                                                        <div class="form-group col-md-12 col-sm-12">
                                                                
                                                                        {{ html()->label(html()->checkbox('remember', true, 1) . ' ' . __('labels.frontend.auth.remember_me'))->for('remember') }}      
                                                        </div>
                            
                                                        <div class="col-md-12"><button type="submit" title="submit" class="btn">Submit</button></div>
                            
                                                        <div class="form-group col-md-12 col-sm-12 text-center mt-25">
                                                                    <a href="{{ route('frontend.auth.password.reset') }}">@lang('labels.frontend.passwords.forgot_password')</a>          
                                                        </div>
                            
                            
                                                        {{ html()->form()->close() }}
                            
                                            @endif
                            






                   
                    </div>
                </div>
            </div><!-- Booking Form /- -->
        </div ><!-- Photo Slider/- -->