   <!-- FOOTER PAGE -->
   <footer id="footer-page">
        <div class="container">
            <div class="row">
                <!-- WIDGET -->
                <div class="col-md-4">
                    <div class="widget widget_contact_info">
                        <div class="widget_background">
                            <div class="widget_background__half">
                                <div class="bg"></div>
                            </div>
                            <div class="widget_background__half">
                                <div class="bg"></div>
                            </div>
                        </div>
                        <div class="logo">
                            <img src="{{asset('img/frontend/logo/logoicon-r.png')}}" alt="">
                        </div>
                        <div class="widget_content">
                            <p>{{env('BUISNESS_ADDRESS')}}, {{env('BUISNESS_CITY')}}, {{env('BUISNESS_STATE')}}. {{env('BUISNESS_COUNTRY')}}</p>
                            <p>Phone: {{env('BUISNESS_PHONE_NUMBER')}}</p>
                            <a href="mailto:{{env('BUISNESS_EMAIL')}}">Email: {{env('BUISNESS_EMAIL')}}</a>
                        </div>
                    </div>
                </div>
                <!-- END / WIDGET -->

           

                <!-- WIDGET -->
                <div class="col-md-4">
                    <div class="widget widget_categories">
                        <h3>Locations</h3>

                       


                        <ul> 
                           
                            @forelse(getRideLocations() as $location)
                             <li style="display: inline-block;width: 100%;margin-bottom: 38px;"><a href="#">{{$location['place']}}</a></li>
                            @empty 
<li><a>There are no recent ride locations</a></li>
                            @endforelse
                           
                           
                        </ul>
                    </div>
                </div>
                <!-- END / WIDGET -->

                <!-- WIDGET -->
                <div class="col-md-4">
                    <div class="widget widget_recent_entries">
                        <h3>Our Services</h3>
                        <ul>
                            <li style="display: inline-block;width: 100%;margin-bottom: 38px;"><a href="#">Find Local Rides or Scheduled Rides for long distances</a></li>
                            <li style="display: inline-block;width: 100%;margin-bottom: 38px;"><a href="#">Get Alerted About Your Ride Updated Through SMS</a></li>
                            <li style="display: inline-block;width: 100%;margin-bottom: 38px;"><a href="#">Instant Ride Directions and Route Calulation</a></li>
                            <li style="display: inline-block;width: 100%;margin-bottom: 38px;"><a href="#">Mobile Money & Credit or Debit Card Payments Accepted</a></li>
                            <li style="display: inline-block;width: 100%;margin-bottom: 38px;"><a href="#">Get Paied & Withdraw Cash Directly to your payment medium of choice.</a></li>
                            
                        </ul>
                    </div>
                </div>
                <!-- END / WIDGET -->
            </div>
            <div class="copyright">
                <p>2019 RideWithMe travel™ All rights reserved.</p>
            </div>
        </div>
    </footer>
    <!-- END / FOOTER PAGE -->
