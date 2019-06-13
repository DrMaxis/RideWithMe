@extends('frontend.layouts.app')

@section('title', app_name() . ' | ' . __('labels.frontend.auth.register_box_title'))

@section('stylesheets')
    
<!-- Library - Loader CSS -->
  <link rel="stylesheet" type="text/css" href="{{asset('vendor/loader/loaders.min.css')}}">
  <!-- Library - Bootstrap v3.3.5 -->
  <link rel="stylesheet" type="text/css" href="{{asset('vendor/bootstrap/bootstrap.min.css')}}">
  <link rel="stylesheet" type="text/css" href="{{asset('vendor/bootstrap/bootstrap-datetimepicker.min.css')}}">
  <!-- Font Icons -->
  <link rel="stylesheet" type="text/css" href="{{asset('vendor/fonts/font-awesome.min.css')}}">
  <!-- Library - OWL Carousel V.2.0 beta -->
  <link rel="stylesheet" type="text/css" href="{{asset('vendor/owl-carousel/owl.carousel.css')}}">
  <link rel="stylesheet" type="text/css" href="{{asset('vendor/owl-carousel/owl.theme.css')}}">
  <!-- Library - FlexSlider v2.5.0 -->
  <link rel="stylesheet" type="text/css" href="{{asset('vendor/flexslider/flexslider.css')}}">
  <!-- Library - Animate CSS -->
  <link rel="stylesheet" type="text/css" href="{{asset('vendor/animate/animate.min.css')}}">
  <!-- Custom - Common CSS -->
  <link rel="stylesheet" type="text/css" href="{{asset('css/vendor/plugins.css')}}">
  <link rel="stylesheet" type="text/css" href="{{asset('css/vendor/navigation.css')}}">
  <!-- Custom - Theme CSS -->
  <link rel="stylesheet" type="text/css" href="{{asset('css/vendor/main.css')}}">
  <link rel="stylesheet" type="text/css" href="{{asset('css/vendor/codecs.css')}}">



  {{ style(mix('css/frontend_a.css')) }}

@endsection


@section('content')

<div class="container">
<div class="row justify-content-center align-items-center">
    <div class="col col-sm-8 align-self-center">
        <div class="card">
            <div class="card-header">
                <strong>
                    @lang('labels.frontend.auth.register_box_title')
                </strong>
            </div>
            <!--card-header-->

            <div class="card-body">
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
                        <div class="col-12 col-md-3">
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


                        <div class="col-12 col-md-3">
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
    
                        <div class="col-12 col-md-3">
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
                        <!--col-->
                        <div class="col-12 col-md-3">
                                <div class="form-group">
                                    <label for="phone_network">Phone Network</label>
                                        <select name="phone_network" class="form-control">
                                                <option>Mobile Phone Network</option>
                                                <option>MTN</option>
                                                <option>Vodafone</option>
                                                <option>Altek</option>
                                                <option>Tigo</option>
                                            </select>
                                </div>
                                <!--form-group-->
                            </div>
                            <!--col-->
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

                <div class="row">
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

                <div class="row">
                    <div class="col">
                        <div class="text-center">
                            {!! $socialiteLinks !!}
                        </div>
                    </div>
                    <!--/ .col -->
                </div><!-- / .row -->

            </div><!-- card-body -->
        </div><!-- card -->
    </div><!-- col-md-8 -->
</div><!-- row -->

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
   {!! script(mix('js/vendor.js')) !!}
   {!! script(mix('js/frontend_a.js')) !!} 
   




<!-- JQuery v1.11.3 -->
<script src="{{asset('vendor/js/jquery.min.js')}}"></script>

<!-- Library - Modernizer -->
<script src="{{asset('vendor/modernizr/modernizr.js')}}"></script>

<!-- Library - Bootstrap v3.3.5 -->
<script src="{{asset('vendor/bootstrap/bootstrap.min.js')}}"></script><!-- Bootstrap JS File v3.3.5 -->
<script src="{{asset('vendor/bootstrap/bootstrap-datetimepicker.min.js')}}"></script><!-- Bootstrap JS File v3.3.5 -->
<!-- jQuery Easing v1.3 -->
<script src="{{asset('vendor/js/jquery.easing.min.js')}}"></script>

<!-- Library - jQuery.appear -->
<script src="{{asset('vendor/appear/jquery.appear.js')}}"></script>

<!-- Library - OWL Carousel V.2.0 beta -->
<script src="{{asset('vendor/owl-carousel/owl.carousel.min.js')}}"></script>

<!-- jQuery For Number Counter -->
<script src="{{asset('vendor/number/jquery.animateNumber.min.js')}}"></script>

<!-- Library - Google Map API -->
{{-- <script src="https://maps.googleapis.com/maps/api/js?v=3.exp"></script> --}}

<!-- Library - FlexSlider v2.5.0 -->
<script defer src="{{asset('vendor/flexslider/jquery.flexslider.js')}}"></script>


<script type="text/javascript" src="{{asset('vendor/moment/moment-with-locales.js')}}"> </script>


<script type="text/javascript" src="{{asset('js/vendor/plugins.js')}}"> </script>
@stack('after-scripts') 
@include('frontend.includes.partials.scripts.verification.phoneNumberInputValidation')



@endsection