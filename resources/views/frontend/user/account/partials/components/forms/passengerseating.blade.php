<div class="col-lg-12">
    <div class="form-group">
        <label>How many Seats do you need? (Including You)</label>
        <input type="number" min="1" step="1" name="seats_needed" id="seats_needed_input" class="form-control">
    </div>

    <div class="form-group">
        <!-- Default unchecked -->
        <div class="row">
            <div class="col-lg-6">

                <div class="children-check">
                    <label>
                        Are Any Passengers Children?
                    </label>

                    <div class="row">

                        <div class="col-lg-2">
                            <div class="custom-control custom-checkbox">
                                <input type="checkbox" class="custom-control-input" id="yes_children_checkbox">
                                <label class="custom-control-label" for="yes_children_checkbox">Yes</label>
                            </div>

                        </div>

                        <div class="col-lg-2">
                            <div class="custom-control custom-checkbox">
                                <input type="checkbox" class="custom-control-input" id="no_children_checkbox">
                                <label class="custom-control-label" for="no_children_checkbox">No</label>
                            </div>
                        </div>
                    </div>



                    <div class="form-group children-input-container hidden-form">
                        <label>How many Seats Are Children?</label>
                        <input type="number" min="1" step="1" name="child_seats_needed" id="child_seats_needed_input"
                            class="form-control">
                    </div>

                </div>
            </div>

            <div class="col-lg-6">
                <div class="luggage-check">
                    <label>
                        Do you have any Large Bags or Luggages?
                    </label>

                    <div class="row">

                            <div class="col-lg-2">
                                <div class="custom-control custom-checkbox">
                                    <input type="checkbox" class="custom-control-input" id="yes_luggage_checkbox">
                                    <label class="custom-control-label" for="yes_luggage_checkbox">Yes</label>
                                </div>
    
                            </div>
    
                            <div class="col-lg-2">
                                <div class="custom-control custom-checkbox">
                                    <input type="checkbox" class="custom-control-input" id="no_luggage_checkbox">
                                    <label class="custom-control-label" for="no_luggage_checkbox">No</label>
                                </div>
                            </div>
                        </div>
    
                    <div class="form-group luggage-input-container hidden-form">
                        <label>How many Bags?</label>
                        <input type="number" min="1" step="1" name="luggage_amount" id="luggage_amount_input"
                            class="form-control">
                    </div>

                </div>
            </div>

        </div>




    </div>

    <div class="form-group">

    </div>
</div>