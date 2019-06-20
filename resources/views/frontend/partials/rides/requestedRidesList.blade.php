

<section class="filter-page">
    <div class="container">
        <div class="row">

                @include('frontend.partials.rides.sidebar')
            <div class="col-md-9">
                <div class="filter-page__content">
                    <div class="filter-item-wrapper">

                            @forelse($rides as $ride)

                          


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
                                                        
                                                                {{$ride->scheduled_time}}  
                                                </h5>
                                                <h5 style="font-size: 14px;"> Seats Needed: {{$ride->seats_needed}}</h5>
                                             
                                            </div>

                                        </div>

                                    </div>
                                    <div class="item-footer">
                                        <div class="item-rate">
                                                <span><b>Driver Needed </b> Request Made by {{$ride->creator->name}} |
                                                    {{$ride->creator->phone_number}}</span>
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
                                    <a href="{{route('frontend.user.ride.show', $ride->slug)}}" class="awe-btn">Drive For This Ride</a>
                                </div>
                            </div>

                        

                            @empty
                            <h3> There Seems to be no open ride requests. Check back later</h3>


                            @endforelse


                 
                    </div>


            
                </div>
            </div>

        </div>
    </div>
</section>