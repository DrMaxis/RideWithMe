{{-- <div class="hide-map"  style="display:none" >
        {!! $data['fromLocationMap']['html'] !!}
        {!! $data['toLocationMap']['html'] !!}
    </div>
     --}}
<div class="container">

    <div class="section-header" style="margin-top:50px;">
        <h3>

            <span> Map & Directions</span>

        </h3>
    </div>



    <div class="map-container">

        {!! $data['bookingMap']['html'] !!}

        <div class="textcenter mt-25">
            <button id="routeGo" class="btn btn-primary mb-10 calculate_ride">Calculate Route & Directions</button>
            <button id="routeClear" class="btn btn-primary mb-10">Reset Rotute & Delete Markers</button>

        </div>



        <div class="container" id="directions" style="margin-bottom: 25px;"></div>

    </div>


</div>