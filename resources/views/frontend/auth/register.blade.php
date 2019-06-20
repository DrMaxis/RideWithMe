@extends('frontend.layouts.app')

@section('title', app_name() . ' | ' . __('labels.frontend.auth.register_box_title'))

@section('xcss')
    {{ style(mix('css/frontend_a.css')) }}
@endsection



@section('content')

<div class="register-content-container">

            <section class="awe-parallax register-page-demo">
                    <div class="awe-overlay"></div>
                    <div class="container">
                        <div class="login-register-page__content">
                            <div class="content-title" style="text-align:center">
                                <span>Dont get caught up without a ride</span>
                                <h2>JOIN US !</h2>
                            </div>
                            {{ html()->form('POST', route('frontend.auth.register.post'))->open() }}
                <div class="row">
                    <div class="col-12 col-md-6">
                        <div class="form-group">
                            {{ html()->label(__('validation.attributes.frontend.first_name'))->for('first_name') }}

                            {{ html()->text('first_name')
                                        ->class('form-control')
                                        ->placeholder(__('validation.attributes.frontend.first_name'))
                                        ->attribute('maxlength', 191)
                                        ->required()}}
                        </div>
                        <!--col-->
                    </div>
                    <!--row-->

                    <div class="col-12 col-md-6">
                        <div class="form-group">
                            {{ html()->label(__('validation.attributes.frontend.last_name'))->for('last_name') }}

                            {{ html()->text('last_name')
                                        ->class('form-control')
                                        ->placeholder(__('validation.attributes.frontend.last_name'))
                                        ->attribute('maxlength', 191)
                                        ->required() }}
                        </div>
                        <!--form-group-->
                    </div>
                    <!--col-->
                </div>
                <!--row-->




                <div class="row">
                        <div class="col-12 col-md-4">
                            <div class="form-group">
                                    {{ html()->label(__('validation.attributes.frontend.email'))->for('email') }}

                                    {{ html()->email('email')
                                                ->class('form-control')
                                                ->placeholder(__('validation.attributes.frontend.email'))
                                                ->attribute('maxlength', 191)
                                                ->required() }}
                            </div>
                            <!--col-->
                        </div>
                        <!--row-->


                        <div class="col-12 col-md-4">
                                <div class="form-group">
                                        {{ html()->label(__('validation.attributes.frontend.national_id'))->for('national_id') }}
    
                                        {{ html()->text('national_id')
                                                    ->class('form-control')
                                                    ->placeholder(__('validation.attributes.frontend.national_id'))
                                                    ->attribute('maxlength', 191)
                                                    ->required() }}
                                </div>
                                <!--col-->
                            </div>
                            <!--row-->
    
                        <div class="col-12 col-md-4">
                            <div class="form-group">
                                    {{ html()->label(__('validation.attributes.frontend.phone_number'))->for('phone_number') }}
                                    {{ html()->text('phone_number') ->class('form-control form-control-lg border-0') ->placeholder(__('validation.attributes.frontend.phone_number'))
                                    ->attribute('maxlength', 191) ->required() }}
                                    <span id="valid-msg" class="hide">✓ Valid</span>
                                    <span id="error-msg" class="hide"></span>
                            </div>
                            <!--form-group-->

                            <input id="phone_country_code" type="hidden" name="phone_country_code">
                        </div>
                      
                    </div>
                    <!--row-->

                    

                    <div class="row">
                            <div class="col-12 col-md-6">
                                <div class="form-group">
                                        {{ html()->label(__('validation.attributes.frontend.password'))->for('password') }}

                                        {{ html()->password('password')
                                                    ->class('form-control')
                                                    ->placeholder(__('validation.attributes.frontend.password'))
                                                    ->required() }}
                                </div>
                                <!--col-->
                            </div>
                            <!--row-->
        
                            <div class="col-12 col-md-6">
                                <div class="form-group">
                                        {{ html()->label(__('validation.attributes.frontend.password_confirmation'))->for('password_confirmation') }}

                                        {{ html()->password('password_confirmation')
                                                    ->class('form-control')
                                                    ->placeholder(__('validation.attributes.frontend.password_confirmation'))
                                                    ->required() }}
                                </div>
                                <!--form-group-->
                            </div>
                            <!--col-->
                        </div>
                        <!--row-->
           
              

                @if(config('access.captcha.registration'))
                <div class="row">
                    <div class="col">
                        @captcha
                        {{ html()->hidden('captcha_status', 'true') }}
                    </div>
                    <!--col-->
                </div>
                <!--row-->
                @endif

                <div class="row" style="text-align:center">
                    <div class="col">
                        <div class="form-group mb-0 clearfix">
                            {{ form_submit(__('labels.frontend.auth.register_button')) }}
                        </div>
                        <!--form-group-->
                    </div>
                    <!--col-->
                </div>
                <!--row-->
                {{ html()->form()->close() }}

                            <div class="login-register-link">
                                Already have Account? <a href="{{route('frontend.auth.login')}}">Log in here</a>
                            </div>

                            
                <div class="row">
                        <div class="col">
                            <div class="text-center">
                                {!! $socialiteLinks !!}
                            </div>
                        </div>
                        <!--/ .col -->
                    </div><!-- / .row -->
                        </div>
                    </div>
                </section>



       

</div>

@endsection

@push('after-scripts')
@if(config('access.captcha.registration'))
@captchaScripts
@endif
@endpush

@section('xjs')

<!-- Scripts -->
@stack('before-scripts')
{!! script(mix('js/manifest.js')) !!}
{!! script(mix('js/frontend_a.js')) !!} 
   



@stack('after-scripts') 
@include('frontend.includes.partials.scripts.verification.phoneNumberInputValidation')



@endsection