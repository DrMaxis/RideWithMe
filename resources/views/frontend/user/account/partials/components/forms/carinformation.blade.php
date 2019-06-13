<div class="col-lg-12">
    <div class="form-group">
            <label>Select A Car</label>
            <select class="form-control" id="car_option_selector">
                @foreach($logged_in_user->cars as $carOption)
                <option id="car_option" data-carID="{{$carOption->uuid}}">{{$carOption->year}}
                    {{$carOption->model}} - {{$carOption->color}}
                </option>
                @endforeach
            </select>
    </div>


    <div class="form-group">
        <label for="available_seats_input">Available Seats</label>
        <input type="number" min="0" name="available_seats" id="available_seats_input" class="form-control">
    </div>





    <div class="form-group">
        <!-- Default unchecked -->
        <div class="row">
            <div class="col-lg-6">

                <div class="pickup-check">
                    <label>
                        Do You Offer Pickups?
                    </label>

                    <div class="row">

                        <div class="col-lg-2">
                            <div class="custom-control custom-checkbox">
                                <input type="checkbox" class="custom-control-input" id="yes_pickup_checkbox">
                                <label class="custom-control-label" for="yes_pickup_checkbox">Yes</label>
                            </div>

                        </div>

                        <div class="col-lg-2">
                            <div class="custom-control custom-checkbox">
                                <input type="checkbox" class="custom-control-input" id="no_pickup_checkbox">
                                <label class="custom-control-label" for="no_pickup_checkbox">No</label>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div class="col-lg-6 pickup-price-container hidden-form">
                <div class="form-group">
                    <label>Price To Pickup</label>
                    <div class="input-group price">
                        <span class="input-group-addon">$</span>
                        <input  id="pickup_price_input" type="number" min="1" step="0.01" name="pickup_price" class="form-control" />  
                    </div>
                </div>
            </div>



        </div>




    </div>

    <div class="form-group">
            <!-- Default unchecked -->
            <div class="row">
               
                <div class="col-lg-6">
                    <div class="luggage-space-check">
                        <label>
                            Do you have any Luggage space?
                        </label>
    
                        <div class="row">
    
                                <div class="col-lg-2">
                                    <div class="custom-control custom-checkbox">
                                        <input type="checkbox" class="custom-control-input" id="yes_luggage_space_checkbox">
                                        <label class="custom-control-label" for="yes_luggage_space_checkbox">Yes</label>
                                    </div>
        
                                </div>
        
                                <div class="col-lg-2">
                                    <div class="custom-control custom-checkbox">
                                        <input type="checkbox" class="custom-control-input" id="no_luggage_space_checkbox">
                                        <label class="custom-control-label" for="no_luggage_space_checkbox">No</label>
                                    </div>
                                </div>
                            </div>
        
                        <div class="form-group luggage-space-input-container hidden-form">
                            <label>Approximately how many Bags can you carry?</label>
                            <input type="number" min="1" step="1" name="luggage_space_amount" id="luggage_space_amount_input"
                                class="form-control">
                        </div>
    
                    </div>
                </div> 

                <div class="col-lg-6">
    
                    <div class="amenities-selecte">
                       
    
                        <div class="form-group children-input-container">
                                <label>Passenger Hospitality </label>
                                {{-- <select class="form-control" id="amenity_option_selector">
                                    @foreach($amenities as $amenityOption)
                                    <option type="checkbox" id="amenity_option" data-amenityID="{{$amenityOption->uuid}}">{{$amenityOption->name}}
                                    </option>
                                    @endforeach
                                </select> --}}

                                <div class="button-group">
                                        <button type="button" class="btn btn-default btn-sm dropdown-toggle" data-toggle="dropdown"><span class="fa fa-bed"> Select Amenities </span> <span class="caret"></span></button>
                                <ul class=" driver-amenities-dropdown dropdown-menu ">
                                        @foreach($amenities as $amenityOption)
                                        <li><label for="{{$amenityOption->name}}" class="small" data-value="{{$amenityOption->uuid}}" tabIndex="-1"><input  id="{{$amenityOption->name}}" name="ameninity_option" data-amenityID="{{$amenityOption->uuid}}" type="checkbox"/>{{$amenityOption->name}}</label></li>

                                        @endforeach
                                 
                                </ul>
                                  </div>
                        </div>
    
                    </div>
                </div>
    
    
            </div>
    
    
    
    
        </div>
</div>