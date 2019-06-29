{{ html()->modelForm($logged_in_user, 'POST', route('frontend.user.account.settings.car.update', $car))->class('form-horizontal')->attribute('enctype', 'multipart/form-data')->open() }}
@method('PATCH')


<div class="row">
    <div class="col">
        <div class="form-group">
            {{ html()->label(__('validation.attributes.frontend.car_model'))->for('car_model') }}

            {{ html()->text('car_model')
                ->class('form-control')
                ->placeholder(__('validation.attributes.frontend.car_model'))
                ->value($car->model)
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
                ->value($car->year)
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
                        ->value($car->color)
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
            {{ html()->label(__('validation.attributes.frontend.car_image_location'))->for('image_location') }}
            <div class="form-group btn btn-warning btn-circle" id="image_location">
                <span>
                    <i class="fas fa-exclamation-triangle hr-15">
                        {{ html()->file('image_location')->class('form-control op-0') }}
                    </i>
                    <input type="hidden" name="image_type" value="storage"/> 
                </span>

            </div>
            <!--form-group-->
        </div>
    </div>
    <!--col-->
</div>
<!--row-->


<div class="row">
        <div class="col">
            <div class="form-group mb-0 clearfix">
                {{ form_submit(__('labels.general.buttons.update')) }}
            </div><!--form-group-->
        </div><!--col-->
    </div><!--row-->
{{ html()->closeModelForm() }}