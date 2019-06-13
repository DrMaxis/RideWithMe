<div class="col-lg-6">
    <div class="card shadow mb-4">
        <div class="card-header py-3">
            <h6 class="m-0 font-weight-bold text-primary">Map & Directions</h6>
        </div>

        <div class="card-body">
            <div class="map-container">

                {!! $data['bookingMap']['html'] !!}

                <div class="textcenter mt-25" style="text-align:center; margin-top:15px;">
                    <button id="routeGo" class="btn btn-primary mb-10 calculate_ride">Calculate Route &
                        Directions</button>
                    <button id="routeClear" class="btn btn-primary mb-10">Reset Rotute & Delete Markers</button>

                </div>


                <div class="col-lg-12" style="margin-top:50px;">
                    <div class="card shadow mb-4">
                        <div class="card-header py-3">
                            <h6 class="m-0 font-weight-bold text-primary">Directions</h6>
                        </div>

                        <div class="card-body">
                            <div id="directions" style="margin-bottom: 25px;"></div>
                            <input type="hidden" class="form-control" name="total_distance" id="total_distance_input" />
                            <input type="hidden" class="form-control" name="travel_time" id="travel_time_input" />
                        </div>
                    </div>
                </div>


            </div>
        </div>
    </div>
</div>