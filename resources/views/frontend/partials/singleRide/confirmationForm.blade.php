
                    @if(session('status'))
                    <div class="alert alert-success">
                        {{ session('status') }}
                    </div>
                @endif

                {{ html()->form('POST', route('frontend.user.ride.passenger.confirm', $ride->slug))->open() }}
                    <div class="row">
                        <div class="col">
                            <div class="form-group">
                                {{ html()->label(__('validation.attributes.frontend.phone_confirmation'))->for('ride_confirmation_code_input') }}

                                {{ html()->text('ride_confirmation_code_input')
                                    ->class('form-control')
                                    ->placeholder(__('validation.attributes.frontend.phone_confirmation'))
                                    ->attribute('maxlength', 6)
                                    ->required()
                                    ->autofocus() }}
                            </div><!--form-group-->
                        </div><!--col-->
                    </div><!--row-->

                    <div class="row">
                        <div class="col">
                            <div class="form-group mb-0 clearfix">
                                {{ form_submit(__('labels.frontend.passwords.confirm_phone_number_button')) }}
                            </div><!--form-group-->
                        </div><!--col-->
                    </div><!--row-->
                {{ html()->form()->close() }}