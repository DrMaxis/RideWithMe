{{-- <div class="hide-map"  style="display:none" >
        {!! $data['fromLocationMap']['html'] !!}
        {!! $data['toLocationMap']['html'] !!}
    </div>
     --}}
<div class="container" >
    {!! $data['bookingMap']['html'] !!}
    
 <div class="textcenter mt-25">
        <button id="routeGo"  class="btn mb-10">Calculate Route & Directions</button>
        <button id="routeClear"  class="btn mb-10">Reset Rotute & Delete Markers</button>
       
    </div>

    <div id="directions"></div>

</div>
   
    
    