<!-- Page Content -->
<div class="container-fluid no-padding page-content">
    <!-- Page Content -->
    {{--  <div class="section-padding"></div> --}}
    <!-- Container -->
    <div class="container">
        <!-- Blog Area -->



        <div class="row">

            <div class="col col-md-12 nopad">
                <div class="entry-cover" style="margin-bottom: 50px; margin-top:25px;">
                    <a href="#"><img src="{{asset('img/frontend/placeholders/2.jpg')}}" alt="blog-1"></a>
                    <div class="entry-meta">
                        <div class="meta-inner">
                            <div class="by-line pull-left">Requested By <a href="#">{{$ride_creator->name}}</a></div>
                            <div class="post-comment pull-right">
                                <a href="#"><i class="fa fa-heart-o"></i>Driver Rating<span style="color:gold;"><b>
                                            4.2</b></span></a>
                                            <br>
                                <a href="#"><i class="fa fa-comment"></i>Passenger Rating<span
                                        style="color:gold;">4.9</span></a>
                            </div>
                        </div>
                        <div class="meta-inner">
                            <div class="post-comment pull-left">
                                
                            <a class="post-date pull-left"><i class="fa fa-heart-o"></i> 
                                Scheduled Pickup Time: 
                                <span style="color:gold;">
                                        {{date("jS F, Y", strtotime(substr($ride->scheduled_pickup_time, 1, 10)))}} 

                                        <b style="color:white;"> At</b>
                                    
                                            {{substr($ride->scheduled_pickup_time, 11, 20)}} 
                                </span>
                             </a>

                            <br>
                             <a class="post-date pull-left "><i class="fa fa-heart-o"></i> Travling Distance : <span style="color:gold;"><b> {{$ride->total_distance}} Km </b></span></a>
                             <br>
                             <a class="post-date pull-left"><i class="fa fa-heart-o"></i> Estimated Travel Time: <span style="color:gold;"><b> Around 7 Minutes </b></span></a>
                            </div>

                            <div class="post-comment pull-right">
                                    <a href="#"><i class="fa fa-heart-o"></i>Traveling From <span style="color:gold;"><b>
                                                {{$ride->pickup_location}}</b></span></a>
                                                <br>
                                    <a href="#"><i class="fa fa-comment"></i>Traveling To<span
                                            style="color:gold;">{{$ride->dropoff_location}}</span></a>
                                </div>


                        </div>
                    </div>
                </div>
            </div>
            <div class="col col-md-12 nopad">
                {{-- put map here --}}
                @include('frontend.partials.singleRide.map')
            </div>
        </div>

        <div class="row">
            {{-- BEGIN DRIVER SECTION HEADER --}}
            <div class="section-header" style="margin-top:50px">
                <h3>Driver For This Ride</h3>
            </div>
            {{-- END DRIVER SECTION HEADER --}}


            {{-- START IF NO DRIVER IS PRESENT --}}
            @if($ride->driver == null)
            {{-- BEGIN COL --}}
            <div class="col col-md-6 order-1 order-sm-2  mb-4">
                {{-- BEGIN  CARD --}}
                <div class="card mb-4 bg-light">
                    {{-- BEGIN DUMMY PROFILE IMAGE --}}
                    <img class="card-img-top"
                        src="https://www.gravatar.com/avatar/6a903cd8c26a4cb1a7781f54651d63e6.jpg?s=80&amp;d=mm&amp;r=g"
                        alt="Profile Picture">
                    {{-- END DUMMY PROFILE IMAGE --}}

                    {{-- BEGIN CARD BODY --}}
                    <div class="card-body">
                        <h4 class="card-title">
                            There is no driver for this ride yet!<br>
                        </h4>
                        <p class="card-text">
                            @if(auth()->user())
                            Click the button below and become the driver for this ride.
                            
                            @else
                            You must login to become the driver for this ride
                            @endif
                        </p>
                        {{-- END CARD BODY --}}
                    </div>
                    {{-- END CARD --}}
                </div>
                {{-- END COL --}}
            </div>
            {{-- BEGIN ELSE NO DRIVER PRESENT --}}
            @else
            {{-- BEGIN DRIVER COL --}}
            <div class="col col-md-6 order-1 order-sm-2  mb-4">
                {{-- BEGIN DRIVER CARD --}}
                <div class="card mb-4 bg-light">
                    {{-- BEGIN DRIVER IMAGE --}}
                    <img class="card-img-top" src="{{$ride_driver->picture}}" alt="Profile Picture">
                    {{-- END DRIVER IMAGE --}}

                    {{-- BEGIN DRIVER INFORMATION --}}
                    <div class="card-body">
                        <h4 class="card-title">
                            {{$ride_driver->name}} - Driver<br>
                        </h4>
                        <p class="card-text">
                            <small>
                                <i class="fas fa-envelope"></i>{{ $ride_driver->email }}<br>
                                <i class="fas fa-calendar-check"></i> {{ $ride_driver->phone_number }}<br>
                                <i class="fas fa-calendar-check"></i> @lang('strings.frontend.general.joined')
                                {{ timezone()->convertToLocal($ride_driver->created_at, 'F jS, Y') }}<br>
                                <i class="fas fa-envelope"></i>{{count($ride_driver->rides)}} Passenger Rating<br>
                                <i class="fas fa-calendar-check"></i>{{count($ride_driver->rides)}} Completed Rides<br>
                            </small>
                        </p>

                        @if(auth()->user()->id == $ride_driver->id)
                        <p class="card-text">
                            <a href="http://ride.me/account" class="btn btn-info btn-sm mb-1">
                                <i class="fas fa-user-circle"></i> My Account </a>
                        </p>
                        @endif

                        {{-- END DRIVER INFORMATION --}}
                    </div>
                    {{-- END DRIVER CARD --}}
                </div>
                {{-- END DRIVER COL --}}
            </div>
            {{-- END IF RIDE HAS DRIVER --}}
            @endif
            {{-- END DRIVER ROW --}}
        </div>



        {{--BEGIN PASSENGERS--}}


        <div class="row">
            {{-- BEGIN PASSENGER SECTION HEADER --}}
            <div class="section-header" style="margin-top:50px">
                <h3>Passengers For This Ride</h3>
            </div>
            {{-- END PASSENGER SECTION HEADER --}}

            {{-- START PASSENGER LOOP --}}
            @forelse($passengers as $passenger)
            {{-- BEGIN PASSENGER COL --}}
            <div class="col col-md-4 order-1 order-sm-2  mb-4">
                {{-- BEGIN PASSENGER CARD --}}
                <div class="card mb-4 bg-light">
                    <img class="card-img-top" src="{{$passenger->picture}}" alt="Profile Picture">
                    <div class="card-body">
                        <h4 class="card-title">
                            {{$passenger->name}}<br>
                        </h4>
                        <p class="card-text">
                            <small>
                                <i class="fas fa-envelope"></i>{{ $passenger->email }}<br>
                                <i class="fas fa-calendar-check"></i> {{ $passenger->phone_number }}<br>
                                <i class="fas fa-calendar-check"></i> @lang('strings.frontend.general.joined')
                                {{ timezone()->convertToLocal($passenger->created_at, 'F jS, Y') }}<br>
                                <i class="fas fa-envelope"></i>{{count($passenger->rides)}} Passenger Rating<br>
                                <i class="fas fa-calendar-check"></i>{{count($passenger->rides)}} Completed Rides<br>
                            </small>
                        </p>

                        @if(auth()->user()->id == $passenger->id)
                        <p class="card-text">
                            <a href="http://ride.me/account" class="btn btn-info btn-sm mb-1">
                                <i class="fas fa-user-circle"></i> My Account </a>
                        </p>
                        @endif
                    </div>
                    {{-- END PASSENGER CARD --}}
                </div>
                {{-- END PASSENGER COL --}}
            </div>
            {{-- BEGIN EMPTY LOOP --}}
            @empty
            <p>
                There are no passengers for this ride or the ride creator has not allowed others to join.
            </p>
            {{-- END EMPTY LOOP --}}

            {{-- END PASSENGER LOOP --}}
            @endforelse
            {{-- END PASSENGERS --}}
        </div>


      <div class="row" style="margin-top:50px;">
        <div class="col col-md-12">
            <!-- Comment Section -->
            <div class="comment-section">
                <h3>Comments<span>(0)</span></h3>
                <ul class="media-list">
                {{--     <li class="media">
                        <div class="media-left">
                            <a href="#"><img class="media-object-1" src="images/comment/comment-1.jpg"
                                    alt="comment"></a>
                        </div>
                        <div class="media-body">
                            <div class="media-heading">
                                <h3><span>Elvis Martin</span> <a class="pull-right" href="#">Reply</a></h3>
                            </div>
                            <span>Sep 10, 2015</span>
                            <p>You bet your life Speed Racer he will see it through. Its mission - to explore
                                strange new worlds to seek out new life and new civilizations to boldly go where no
                                man has gone before.</p>
                        </div>
                    </li> --}}
                </ul>
                <form class="leave-comment">
                    <h3>leave your comment</h3>
                    <div class="form-group col-md-6 col-md-4 col-xs-12 no-left-padding">
                        <label>Name</label>
                        <input type="text" class="form-control" id="name">
                    </div>
                    <div class="form-group col-md-6 col-md-4 col-xs-12 no-left-padding">
                        <label>Email Address</label>
                        <input type="email" class="form-control" id="email">
                    </div>
                    <div class="form-group col-md-12 col-sm-12 col-xs-12 no-left-padding">
                        <label>Your Comment</label>
                        <textarea name="message" class="form-control" rows="7"></textarea>
                    </div>
                    <input type="submit" value="Leave Comment" id="post" name="post">
                </form>
            </div><!-- Comment Area /- -->


        </div>
    </div>


        {{-- End Container  --}}
    </div>



  
    {{--  <div class="col-md-9 blog-area">		
                    

                    


                    
                </div><!-- Blog Area/- --> --}}

</div><!-- Container/- -->
<div class="section-padding"></div>
<!-- Page Content/- -->