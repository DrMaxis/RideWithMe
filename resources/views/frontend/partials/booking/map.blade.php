{{-- <div class="hide-map"  style="display:none" >
        {!! $data['fromLocationMap']['html'] !!}
        {!! $data['toLocationMap']['html'] !!}
    </div>
     --}}
<div class="hide-map" >
    {!! $data['bookingMap']['html'] !!}
    


</div>
    <div class="textcenter">
        <button id="routeGo">Route</button>
        <button id="routeClear">Clear Route</button>
       
    </div>
    
    <div id="directions"></div>