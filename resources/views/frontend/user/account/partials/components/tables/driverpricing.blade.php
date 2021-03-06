


<div class="col-lg-6 mb-4 driver-pricing-container hidden-form">

    
        <!-- Project Card Example -->
        <div class="card shadow mb-4">
            <div class="card-header py-3">
                <h6 class="m-0 font-weight-bold text-primary">Ride Breakdown</h6>
            </div>
            <div class="card-body">
                    <h4 class="small font-weight-bold">Pickup Location</h4>
                    <div class=" mb-4">
                        <div class="">
                            <p class="pickup-location-text"></p>
                        </div>
                    </div>
        
                </div>
                <div class="card-body">
                    <h4 class="small font-weight-bold">Dropoff Location</h4>
                    <div class=" mb-4">
                        <div>
                            <p class="dropoff-location-text"></p>
                        </div>
                    </div>
        
                </div>
                <div class="card-body">
                    <h4 class="small font-weight-bold">Scheduled Time</h4>
                    <div class="mb-4">
                        <div>
                            <p class="driver-schedule-date-text"></p>
                        </div>
                    </div>
        
                </div>

           

            <div class="card-body">
                <h4 class="small font-weight-bold">Seats Available <span class="float-right seats-available-text"></span></h4>
            

            </div>


            
        <div class="card-body pickups-available hidden-form">
                <h4 class="small font-weight-bold">Pickups Avaiable <span class="float-right"> Yes </span> </h4>
                <div class="mb-4">
                    <div class="">
                        <p class="pickup-price-text"></p>
                        <p class="pickup-location-time-text"></p>
                    </div>
                </div>

            </div>


        </div>
        <!-- Project Card Example -->
        <!-- Project Card Example -->
        <div class="card shadow mb-4">
                <div class="card-header py-3">
                    <h6 class="m-0 font-weight-bold text-primary">Information & Pricing</h6>
                </div>
                <div class="card-body">
                    <h4 class="small font-weight-bold">Travel Distance <span class="float-right driver" id="travel-distance-text"></span>
                    </h4>
        
                </div>
                <div class="card-body">
                    <h4 class="small font-weight-bold">Estimated Travel Duration<span class="float-right driver" id="travel-duration-text"></span></h4>
        
        
                </div>
                <div class="card-body">
                    <h4 class="small font-weight-bold">Estimated Ride Price <span class="float-right driver" id="estimated-price-text"></span></h4>
        
                </div>
        
                <div class="card-body">
                    <h4 class="small font-weight-bold">Price Options</h4>
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="pricing-check">
                                <div class="row">
                                    @foreach($priceOptions as $option)
                                    <div class="col-lg-3">
                                        <div class="custom-control custom-checkbox">
                                            <input id="driver-{{$option->name}}" type="checkbox" name="price_option"
                                                class="price custom-control-input" data-priceID="{{$option->id}}"
                                                data-priceOption="{{$option->value}}">
                                            <label for="driver-{{$option->name}}" class="custom-control-label price-option-text"></label>
                                        </div>
        
                                    </div>
                                    @endforeach
                                    <div class="mb-4" style="margin-top:1rem">
                                        <div class="">
                                           {{--  <a href="#"> How are these prices calculated?</a> --}}
                                        </div>
                                       
                                    </div>
        
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="pricing-input">
                                <label>Or Enter An Offer</label>
                                <div class="input-group price-offer-input-container">
                                    <span class="input-group-addon">$</span>
                                    <input class="form-control driver" type="number" min="1" step="0.01" name="price_offer_amount"
                                        id="price_offer_amount_input" placeholder="Price" />
                                </div>
        
        
                            </div>
                        </div>
                        <div class="col-lg-12">
                            <div class="textcenter mt-25" style="text-align:center; margin-top:25px;">
                                <button id="submit-ride" class="btn btn-primary mb-10 driver-submit">Confirm This
											Ride</button>
        
                            </div>
                        </div>
        
                    </div>
        
        
        
        
                </div>
        
            </div>
        
        

    




</div>