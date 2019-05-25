<div class="section-padding"></div>
<!-- Container -->
<div class="container">
    <!-- Blog Area -->


<div class="row">


</div>
    <div class="col-md-9 blog-area">
        <div class="section-header">
            <h3>Recent Updates From Our Blog</h3>
        </div>
        <article class="blog-post-list single-post-list">
            <!-- About Author -->
            <div class="about-author">
                <div class="author-img">
                    <p>
                        <img src="{{$ride_creator->picture}}" alt="author" />
                        <span>
                            <small>
                                <br /> <hr>
                                <i class="fa fa-envelope"></i> {{ $ride_creator->email }}
                                <br /> <hr>
                                <i class="fa fa-envelope"></i> {{ $ride_creator->phone_number }}
                                <br /> <hr>
                                <h4>Ride Creator</h4>
                            </small>
                        </span>
                    </p>
                </div>

                <div class="author-content">
                    <h3>{{$ride_creator->name}}</h3>
                    <p>@lang('strings.frontend.general.joined') {{ timezone()->convertToLocal($logged_in_user->created_at, 'F jS, Y') }} </p>
                    <p>
                        <span>{{count($ride_creator->rides)}} Completed Rides</span>
                        <br/> <hr>
                        <span>{{count($ride_creator->rides)}} Passenger Rating</span>
                        <br /> <hr>
                        <span>{{count($ride_creator->rides)}} Driver Rating</span>
                    </p>
                </div>
            </div><!-- About Author/- -->

          

            <div class="blog-content">
                <h3 class="entry-title">Ride Notes & Specifics</h3>
                <br><hr><br>
                <div class="entry-content">
                        <p>

                                This ride will be leaving at this time from this location to that location. {{$ride_creator->name}} has allowed other users to join this route and split the fare with them. 
                                If you would like to join this route hit the join route button below. Please be sure to read the ride notes below for important information about this ride given by the ride creator.
                             </p>
            
                             <p>
                                    {{$ride->ride_notes}}
                             </p>
                </div>
            </div>
        </article>

        @include('frontend.partials.singleRide.comments')

    </div><!-- Blog Area/- -->
    @include('frontend.partials.SingleRide.sidebar')
</div><!-- Container/- -->
<div class="section-padding"></div>