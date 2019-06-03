<!-- Page Content -->
<div class="container-fluid no-padding page-content">
    <div class="section-padding"></div>
    <!-- Container -->
    <div class="container">

        @include('frontend.partials.rides.sidebar')


        <!-- Blog Area -->
        <div class="col-md-9 blog-area">
            <div class="section-header">
                <h3>Open Rides</h3>
            </div>
            @forelse ($rides as $ride)
            <article class="blog-post-list">

                <div class="entry-cover mt-25">
                    <a href="#"><img src="{{asset('img/frontend/placeholders/2.jpg')}}" alt="blog-1"></a>
                    <div class="entry-meta">
                        <div class="meta-inner">
                            <div class="by-line pull-left">Requested By <a href="#">{{$ride->creator_name}}</a></div>
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
                                <a class="post-date pull-left "><i class="fa fa-heart-o"></i> Travling Distance : <span
                                        style="color:gold;"><b> {{$ride->total_distance}} Km </b></span></a>
                                <br>
                                <a class="post-date pull-left"><i class="fa fa-heart-o"></i> Estimated Travel Time:
                                    <span style="color:gold;"><b> Around 7 Minutes </b></span></a>
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
                <div class="actions-container">

                    <div class="textcenter mt-25">
                        @auth

                      
                      
                       

                        @if( $ride->driver_id == $logged_in_user->id)

                        <button id="routeGo" class="btn btn-primary mb-10">You are Driving for This Ride</button>
                        @endif

                       


                       




                        @endauth


                        {{--  {{dd($ride->users)}} --}}


                        @Guest
                        <p>
                            You will need to create an account or join this ride as a Guest
                        </p>
                        @endguest

                    </div>
                </div>

                <div class="blog-content" style="width:100%">
                    <h3 class="entry-title">Ride Notes</h3>
                    <div class="entry-content">
                        <p>{{$ride->ride_notes}}</p>
                    </div>
                </div>


            </article>
            @empty

            <p>
                There are currently no rides going anywhere.
                Check back Later.
            </p>
            @endforelse



            <!-- Pagination -->
            <ul class="pagination">
                <li class="active"><a href="#">1</a></li>
                <li><a href="#">2</a></li>
                <li><a href="#">3</a></li>
                <li><a href="#">...</a></li>
                <li><a href="#">6</a></li>
                <li>
                    <a href="#" aria-label="Next">
                        <span aria-hidden="true">Next</span>
                    </a>
                </li>
            </ul><!-- Pagination/- -->
        </div><!-- Blog Area/- -->


    </div><!-- Container/- -->
    <div class="section-padding"></div>
</div><!-- Page Content/- -->