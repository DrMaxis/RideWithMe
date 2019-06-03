	<!-- Widget Area -->
    <div class="col-md-3 widget-area">
            <!-- Search Widget -->
            <aside class="widget search-widget">
                <div class="form-group">
                    <div class="input-group">
                        <input type="text" class="form-control" placeholder="SEARCH">
                        <span class="input-group-btn">
                            <button class="btn btn-default" type="button"><i class="fa fa-search"></i></button>
                        </span>
                    </div>
                </div>
            </aside><!-- Search Widget -->
            <!-- Categories Widget -->
            <aside class="widget categories-widget">
                <div class="widget-title">
                    <h3>Locations</h3>
                </div>
                <ul class="categories-type">
                    @foreach ($rideLocations as $location)
                         <li>{{$location['place']}}<span>{{$location['count']}}</span></li>
                    @endforeach
                   
                    
                </ul>
            </aside><!-- Categories Widget/- -->
        
        </div><!-- Widget Area/- -->