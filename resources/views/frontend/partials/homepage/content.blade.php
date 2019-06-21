<section class="sale-flights-section-demo">
    <div class="container">
        <div class="row">
            {{-- <div class="col-md-4">
                <div class="awe-services">
                    <h2>How It Works</h2>
                    <ul class="awe-services__list">
                        <li>
                            <a href="#">
                                <i class="awe-icon awe-icon-check"></i>
                                <i class="awe-icon awe-icon-arrow-right"></i>
                                Search For Local Drivers
                                <span>Fares Based on Local Prices</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i class="awe-icon awe-icon-check"></i>
                                <i class="awe-icon awe-icon-arrow-right"></i>
                                Split Fares with Friends
                                <span>Hassle Free Carpooling Hub</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i class="awe-icon awe-icon-check"></i>
                                <i class="awe-icon awe-icon-arrow-right"></i>
                                Get Paid For Driving
                                <span>Withdrawal Money directly to your Moble Money </span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i class="awe-icon awe-icon-check"></i>
                                <i class="awe-icon awe-icon-arrow-right"></i>
                                Manage your bookings online
                                <span>anytime and any where</span>
                            </a>
                        </li>

                        <li>
                            <a href="#">
                                <i class="awe-icon awe-icon-check"></i>
                                <i class="awe-icon awe-icon-arrow-right"></i>
                                24/7 global support
                                <span>anytime and any where</span>
                            </a>
                        </li>
                    </ul>

                </div>
            </div> --}}

     
            <div class="col-md-12">
                <div class="sale-flights-tabs tabs">
                    <ul>
                        <li><a href="#sale-flights-tabs-1">Open Rides</a></li>
                        <li><a href="#sale-flights-tabs-2">Latest Ride Requests</a></li>
                    </ul>
                    <div class="sale-flights-tabs__content tabs__content">
                        <div id="sale-flights-tabs-1">

                            @forelse($rides as $ride)

                            @if($ride->completed == 0 && $ride->driver != null)


                            <!-- ITEM -->
                            <div class="trip-item">
                                <div class="item-media">
                                    <div class="image-cover">
                                        <img src="{{$ride->creator->picture}}"
                                            alt="{{$ride->creator->name}}'s Picture'">
                                    </div>

                                </div>
                                <div class="item-body">
                                    <div class="item-title">
                                        <h2>
                                            <a href="{{route('frontend.user.ride.show', $ride->slug)}}">Riding To {{$ride->dropoff_address}}</a>
                                        </h2>
                                        <h6 style="font-size: 12px">Traveling From: {{$ride->pickup_address}} </h6>
                                        <h6 style="font-size: 12px">
                                            Ride Distance: {{round($ride->total_distance, 1)}}KM Approx. {{round($ride->travel_time)}} Minutes
                                        </h6>
                                        
                                    </div>
                                    <div class="item-list">
                                        <div class="row">
                                            <div class="col-lg-8">
                                               
                                                <h5 style="font-size: 14px;">
                                                    Scheduled For Pickup On {{date("jS F, Y", strtotime(substr($ride->scheduled_date, 1, 10)))}} 

                                                            <b > At</b>
                                                        
                                                                {{substr($ride->scheduled_time, 11, 20)}}  
                                                </h5>
                                                <h5 style="font-size: 14px;"> Available Seats: {{$ride->available_seats}}</h5>
                                             
                                            </div>

                                        </div>

                                    </div>
                                    <div class="item-footer">
                                        <div class="item-rate">
                                            <span>Driver: {{$ride->creator->name}}</span>
                                        </div>

                                        

                                    </div>
                                </div>
                                <div class="item-price-more">
                                    <div class="price">
                                        Asking Fare:
                                        <ins>
                                            <span class="amount">{{$ride->fare_split}} GH₵ / Seat</span>
                                        </ins>
                                    </div>
                                    <a href="{{route('frontend.user.ride.show', $ride->slug)}}" class="awe-btn">Join This Ride</a>
                                </div>
                            </div>

                            @endif

                            @empty
                            <h1> There Seems to be no rides yet. Check back later</h1>


                            @endforelse


                            <!-- END / ITEM -->
                        </div>
                        <div id="sale-flights-tabs-2">
                            
                            
                            @forelse($rides as $ride)

                            @if($ride->completed == 0 && $ride->driver == null)


                               <!-- ITEM -->
                               <div class="trip-item">
                                    <div class="item-media">
                                        <div class="image-cover">
                                            <img src="{{$ride->creator->picture}}"
                                                alt="{{$ride->creator->name}}'s Picture'">
                                        </div>
    
                                    </div>
                                    <div class="item-body">
                                        <div class="item-title">
                                            <h2>
                                                <a href="{{route('frontend.user.ride.show', $ride->slug)}}">Riding To {{$ride->dropoff_address}}</a>
                                            </h2>
                                            <h6 style="font-size: 12px">Traveling From: {{$ride->pickup_address}} </h6>
                                            <h6 style="font-size: 12px">
                                                Ride Distance: {{round($ride->total_distance, 1)}}KM Approx. {{round($ride->travel_time)}} Minutes
                                            </h6>
                                            
                                        </div>
                                        <div class="item-list">
                                            <div class="row">
                                                <div class="col-lg-8">
                                                   
                                                    <h5 style="font-size: 14px;">
                                                        Need To Be Picked Up By {{date("jS F, Y", strtotime(substr($ride->scheduled_time, 1, 10)))}} 
    
                                                                <b > At</b>
                                                            
                                                                    {{$ride->scheduled_time}}  
                                                    </h5>
                                                    <h5 style="font-size: 14px;">Seats Needed: {{$ride->seats_needed}} @if($ride->child_seats != null) ({{$ride->child_seats}}  for children) @endif</h5>
                                                 
                                                </div>
    
                                            </div>
    
                                        </div>
                                        <div class="item-footer">
                                            <div class="item-rate">
                                                <span>Requested By: {{$ride->creator->name}}</span>
                                            </div>
    
                                            
    
                                        </div>
                                    </div>
                                    <div class="item-price-more">
                                        <div class="price">
                                            Asking Fare:
                                            <ins>
                                                <span class="amount">{{$ride->fare_split}} GH₵</span>
                                            </ins>
                                        </div>
                                        @auth
                                        @if($logged_in_user->cars->isNotEmpty())
                                        <a href="{{route('frontend.user.ride.show', $ride->slug)}}" class="awe-btn">Drive For This Ride</a>
                                                                            @else 
                                                                            <a href="{{route('frontend.user.account')}}">You must add a car to your account to drive for a ride</a>
                                                                            @endif
                                                                            @endauth
                                                                            
                                                                            @guest 

                                                                            <a href="{{route('frontend.auth.login')}}" class="awe-btn">Login to Drive</a>

                                                                            @endguest
                                       
                                    </div>
                                </div>

                            @endif

                            @empty
                            <h1> There Seems to be no rides yet. Check back later</h1>


                            @endforelse

                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</section>