{{ html()->modelForm($logged_in_user, 'POST', route('frontend.user.account.settings.car.save'))->class('form-horizontal')->attribute('enctype', 'multipart/form-data')->open() }}
@method('POST')


<div class="row">
    <div class="col">
        <div class="form-group">
            {{ html()->label(__('validation.attributes.frontend.car_model'))->for('car_model') }}

            {{ html()->text('car_model')
                    ->class('form-control')
                    ->placeholder(__('validation.attributes.frontend.car_model'))
                    ->attribute('maxlength', 191)
                    ->required()
                    ->autofocus() }}
        </div>
        <!--form-group-->
    </div>
    <!--col-->
</div>
<!--row-->

<div class="row">
    <div class="col">
        <div class="form-group">
            {{ html()->label(__('validation.attributes.frontend.car_year'))->for('car_year') }}

            {{ html()->text('car_year')
                    ->class('form-control')
                    ->placeholder(__('validation.attributes.frontend.car_year'))
                    ->attribute('maxlength', 191)
                    ->required() }}
        </div>
        <!--form-group-->
    </div>
    <!--col-->
</div>
<!--row-->

<div class="row">
    <div class="col">
        <div class="form-group">
            {{ html()->label(__('validation.attributes.frontend.plate_number'))->for('plate_number') }}

            {{ html()->text('plate_number')
                        ->class('form-control')
                        ->placeholder(__('validation.attributes.frontend.plate_number'))
                        ->attribute('maxlength', 191)
                        ->required() }}
        </div>
        <!--form-group-->
    </div>
    <!--col-->
</div>
<!--row-->

<div class="row">
    <div class="col">
        <div class="form-group">
            {{ html()->label(__('validation.attributes.frontend.car_color'))->for('car_color') }}

            {{ html()->text('car_color')
                            ->class('form-control')
                            ->placeholder(__('validation.attributes.frontend.car_color'))
                            ->attribute('maxlength', 191)
                            ->required() }}
        </div>
        <!--form-group-->
    </div>
    <!--col-->
</div>



<div class="row">
    <div class="col">
        <div class="form-group mb-0 clearfix">
            {{ form_submit(__('labels.general.buttons.update')) }}
            <span style="float:right"> You Currently have {{count($logged_in_user->cars)}} Car(s) Connected To Your
                Account <a href="{{route('frontend.user.account.cars.index')}}">View Them Here</a> </span>
        </div>
        <!--form-group-->
    </div>
    <!--col-->
</div>
<!--row-->
{{ html()->closeModelForm() }}