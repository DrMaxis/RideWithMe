<div class="col-lg-12">

            <div class="form-group">
                <label>Scheduled Date</label>
                <div class="input-group date" id="driver_schedule_datetime_picker">
                    <input type="text" id="driver_schedule_datetime_input" class="form-control" />
                    <span class="input-group-addon">
                        <span class="glyphicon glyphicon-calendar"></span>
                    </span>
                </div>
            </div>
    
    
            <div class="form-group">
                    <label>Will Arrive At Pickup Location: </label>


                    <select class="form-control" id="pickup_location_time_picker">

                        @foreach($timeOptions as $option)

                        <option id="time_option" data-timeID="{{$option->id}}"
                            data-timeValue="{{$option->value}}">{{$option->name}}
                        </option>

                        @endforeach


                    </select>
                </div>
    
        </div>