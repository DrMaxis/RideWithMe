
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
                                    <p>We Offer The Best Carpooling Service In The City</p>							
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
                                    <p>We Offer The Best Carpooling Service In The City</p>							
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
                                        <p>We Offer The Best Carpooling Service In The City</p>							
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
                        <form name="book-taxi" class="book-taxi-form">
                            <h3>Request A Ride Now</h3>	
                            <div class="form-group col-md-6 col-sm-6">
                                <label for="txt_name">Name :</label>
                                <input type="text" class="form-control" id="txt_name" placeholder="Your Name" />
                            </div>
                            <div class="form-group col-md-6 col-sm-6">
                                <label for="txt_phone">Phone Number :</label>
                                <input type="text" class="form-control" id="txt_phone" placeholder="Enter Phone Number" />
                            </div>
                            <div class="form-group col-md-6 col-sm-6">
                                <label for="txt_startfrom">Pickup Place :</label>
                                <input type="text" class="form-control" id="txt_startfrom" placeholder="Start From" />
                            </div>
                            <div class="form-group col-md-6 col-sm-6">
                                <label for="txt_drop">Drop Place :</label>
                                <input type="text" class="form-control" id="txt_drop" placeholder="Drop To" />
                            </div>
                            <div class="form-group col-md-12">
                                <label for="txt_drop">Date Pickup :</label>									
                                <div id="datepicker" class="input-group">
                                    <input class="form-control" data-format="yyyy-MM-dd" type="text" placeholder="DD/MM/YYYY" />
                                    <span class="add-on">
                                        <i data-time-icon="icon-time" data-date-icon="icon-calendar"><img src="{{asset('img/frontend/icons/date-picker.png')}}" alt="datepicker"/></i>
                                    </span> 
                                </div>
                            </div>
                            <div class="form-group col-md-12">
                                <div id="timepicker" class="input-group time-picker">
                                    <div class="col-md-4 col-sm-4 col-xs-4"><input class="form-control" min="1" max="12" type="number" /></div>
                                    <div class="col-md-4 col-sm-4 col-xs-4"><input class="form-control" min="1" max="60" type="number" /></div>
                                    <div class="col-md-4 col-sm-4 col-xs-4"><select class="form-control"><option>AM</option><option>PM</option></select></div>
                                </div>
                            </div>
                            <div class="col-md-12"><button type="submit" title="submit" class="btn">Submit</button></div>
                        </form>
                    </div>
                </div>
            </div><!-- Booking Form /- -->
        </div ><!-- Photo Slider/- -->