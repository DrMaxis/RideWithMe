<!-- Page Content -->
<div class="container-fluid no-padding page-content">
    <!-- Page Content -->
    <div class="section-padding"></div>
    <!-- Container -->
    <div class="container">
        <!-- Blog Area -->

        

        <div class="row">
            <div class="section-header">
                <h3>
                    {{$ride->ride_name}}
                    <br>
                    <hr>
                    <span>By {{$ride_creator->name}}</span>

                </h3>
            </div>

            <div class="col col-md-12">

                    {{-- put map here --}}
                    @include('frontend.partials.singleRide.map')
    
    
    
                </div>

            <div class="col col-md-6 order-1 order-sm-2  mb-4">
                <div class="card mb-4 bg-light">
                    <img class="card-img-top" src="{{$ride_creator->picture}}" alt="Profile Picture">

                    <div class="card-body">
                        <h4 class="card-title">
                            {{$ride_creator->name}} - Ride Creator<br>
                        </h4>

                        <p class="card-text">
                            <small>
                                <i class="fas fa-envelope"></i>{{ $ride_creator->email }}<br>
                                <i class="fas fa-calendar-check"></i> {{ $ride_creator->phone_number }}<br>
                                <i class="fas fa-calendar-check"></i> @lang('strings.frontend.general.joined')
                                {{ timezone()->convertToLocal($ride_creator->created_at, 'F jS, Y') }}<br>
                                <i class="fas fa-envelope"></i>{{count($ride_creator->rides)}} Passenger Rating<br>
                                <i class="fas fa-calendar-check"></i>{{count($ride_creator->rides)}} Completed Rides<br>
                            </small>
                        </p>

                        @if(auth()->user()->id == $ride_creator->id)

                        <p class="card-text">

                            <a href="http://ride.me/account" class="btn btn-info btn-sm mb-1">
                                <i class="fas fa-user-circle"></i> My Account </a>

                        </p>
                        @endif
                    </div>
                </div>


            </div>


            @if($ride->driver == null)

            <div class="col col-md-6 order-1 order-sm-2  mb-4">
                <div class="card mb-4 bg-light">
                    <img class="card-img-top"
                        src="https://www.gravatar.com/avatar/6a903cd8c26a4cb1a7781f54651d63e6.jpg?s=80&amp;d=mm&amp;r=g"
                        alt="Profile Picture">

                    <div class="card-body">
                        <h4 class="card-title">
                            A Driver has not accepted this ride<br>
                        </h4>

                        <p class="card-text">
                            @if(auth()->user())

                            Click Accept Ride below and become the driver for this ride.

                            @else

                            You must login to become the driver for this ride
                            @endif

                        </p>

                        <p class="card-text">

                            <a href="#" class="btn btn-info btn-sm mb-1">
                                <i class="fas fa-user-circle"></i>Become Driver</a>

                        </p>
                    </div>
                </div>

            </div>
            @else

            <div class="col col-md-6 order-1 order-sm-2  mb-4">
                <div class="card mb-4 bg-light">
                    <img class="card-img-top" src="{{$ride_driver->picture}}" alt="Profile Picture">

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
                    </div>
                </div>


            </div>


            @endif



        </div>

        {{-- 

    BEGIN PASSENGERS
    
--}}
        <div class="row">

            <div class="section-header" style="margin-top:50px">
                <h3>Passengers For This Ride</h3>
            </div>


            @forelse($passengers as $passenger)


            @if($passenger->uuid != $ride->driver)

            <div class="col col-md-4 order-1 order-sm-2  mb-4">
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
                </div>


            </div>
            @else
            <p>
                There are no passengers for this ride or the ride creator has not allowed others to join.
            </p>
            @endif


            @empty

            <p>
                There are no passengers for this ride or the ride creator has not allowed others to join.
            </p>

            @endforelse


        </div>



        <div class="row" style="margin-top:50px;">
            <div class="col col-md-12">
                <!-- Comment Section -->
                <div class="comment-section">
                    <h3>Comments<span>(3)</span></h3>
                    <ul class="media-list">
                        <li class="media">
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
                        </li>
                        <li class="media">
                            <div class="media-left">
                                <a href="#"><img class="media-object-1" src="images/comment/comment-2.jpg"
                                        alt="comment-2"></a>
                            </div>
                            <div class="media-body">
                                <div class="media-heading">
                                    <h3><span>Miriyam Scott</span> <a class="pull-right" href="#">Reply</a></h3>
                                </div>
                                <span>Sep 11, 2015</span>
                                <p>Its mission - to explore strange new worlds to seek out new life and new
                                    civilizations to boldly go where no man has gone before wondered whatever became of
                                    me.</p>
                            </div>
                        </li>
                        <li class="media">
                            <div class="media-left">
                                <a href="#"><img class="media-object-1" src="images/comment/comment-3.jpg"
                                        alt="comment-3"></a>
                            </div>
                            <div class="media-body">
                                <div class="media-heading">
                                    <h3><span>William Turner</span> <a class="pull-right" href="#">Reply</a></h3>
                                </div>
                                <span>Sep 13, 2015</span>
                                <p>You bet your life Speed Racer he will see it through. Its mission - to explore
                                    strange new worlds to seek out new life and new civilizations to boldly go where no
                                    man has gone before.</p>
                            </div>
                        </li>
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
        {{--  <div class="col-md-9 blog-area">		
                    

                    


                    
                </div><!-- Blog Area/- --> --}}

    </div><!-- Container/- -->
    <div class="section-padding"></div>
</div><!-- Page Content/- -->