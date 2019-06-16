

<section class="filter-page">
    <div class="container">
        <div class="row">

                @include('frontend.partials.rides.sidebar')
            <div class="col-md-9">
                <div class="filter-page__content">
                    <div class="filter-item-wrapper">

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
                                                    Scheduled For Pickup On {{date("jS F, Y", strtotime(substr($ride->scheduled_pickup_time, 1, 10)))}} 

                                                            <b > At</b>
                                                        
                                                                {{substr($ride->scheduled_pickup_time, 11, 20)}}  
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
                                    <a href="#" class="awe-btn">Book now</a>
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
</section>