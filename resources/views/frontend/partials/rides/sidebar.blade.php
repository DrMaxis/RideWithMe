<div class="col-md-3">
    <div class="page-sidebar">
        <div class="sidebar-title">
            <h2>Current Trips</h2>

        </div>
        <!-- WIDGET -->
        <div class="widget widget_has_radio_checkbox">
            <h3 style="color:black">Latest Locations</h3>
            <ul>

                @foreach($rideLocations as $location)


                <li>
                    <a href="#">
                        <label>
                            {{$location['place']}}
                            <span
                                style="float: right;float: right;clear: both;background-color: #a5a5a5a6;border-radius: 100%;height: 30px;width: 30px;text-align: center;line-height: 30px;font-size: 10px;border: 1px solid transparent;">{{$location['count']}}</span>
                        </label>
                    </a>
                </li>
                @endforeach
            </ul>
        </div>
        <!-- END / WIDGET -->

    </div>
</div>