{{ html()->form('PATCH', route('frontend.user.account.settings.baseLocation.save'))->class('form-horizontal')->open() }}
   

    <div class="row">
        <div class="col">
            <div class="form-group">
                {{ html()->label(__('validation.attributes.frontend.base_location'))->for('base_location') }}

                {{ html()->text('base_location')
                    ->class('form-control')
                    ->placeholder(__('validation.attributes.frontend.base_location'))
                    ->required() }}
            </div><!--form-group-->
        </div><!--col-->
    </div><!--row-->

    <div class="row">
        <div class="col">
            <div class="form-group mb-0 clearfix">
                {{ form_submit(__('labels.general.buttons.update') . ' ' . __('validation.attributes.frontend.base_location')) }}
            </div><!--form-group-->
        </div><!--col-->
    </div><!--row-->
{{ html()->form()->close() }}
