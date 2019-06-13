@extends('frontend.layouts.app')

@section('title', app_name() . ' | ' . __('labels.frontend.auth.login_box_title'))


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
    <div class="row justify-content-center align-items-center">
        <div class="col col-sm-8 align-self-center">
            <div class="card">
                <div class="card-header">
                    <strong>
                        @lang('labels.frontend.auth.login_box_title')
                    </strong>
                </div><!--card-header-->

                <div class="card-body">
                    {{ html()->form('POST', route('frontend.auth.login.post'))->open() }}
                        <div class="row">
                            <div class="col">
                                <div class="form-group">
                                    {{ html()->label(__('validation.attributes.frontend.email'))->for('email') }}

                                    {{ html()->email('email')
                                        ->class('form-control')
                                        ->placeholder(__('validation.attributes.frontend.email'))
                                        ->attribute('maxlength', 191)
                                        ->required() }}
                                </div><!--form-group-->
                            </div><!--col-->
                        </div><!--row-->

                        <div class="row">
                            <div class="col">
                                <div class="form-group">
                                    {{ html()->label(__('validation.attributes.frontend.password'))->for('password') }}

                                    {{ html()->password('password')
                                        ->class('form-control')
                                        ->placeholder(__('validation.attributes.frontend.password'))
                                        ->required() }}
                                </div><!--form-group-->
                            </div><!--col-->
                        </div><!--row-->

                        <div class="row">
                            <div class="col">
                                <div class="form-group">
                                    <div class="checkbox">
                                        {{ html()->label(html()->checkbox('remember', true, 1) . ' ' . __('labels.frontend.auth.remember_me'))->for('remember') }}
                                    </div>
                                </div><!--form-group-->
                            </div><!--col-->
                        </div><!--row-->

                        <div class="row">
                            <div class="col">
                                <div class="form-group clearfix">
                                    {{ form_submit(__('labels.frontend.auth.login_button')) }}
                                </div><!--form-group-->
                            </div><!--col-->
                        </div><!--row-->

                        <div class="row">
                            <div class="col">
                                <div class="form-group text-right">
                                    <a href="{{ route('frontend.auth.password.reset') }}">@lang('labels.frontend.passwords.forgot_password')</a>
                                </div><!--form-group-->
                            </div><!--col-->
                        </div><!--row-->
                    {{ html()->form()->close() }}

                    <div class="row">
                        <div class="col">
                            <div class="text-center">
                                {!! $socialiteLinks !!}
                            </div>
                        </div><!--col-->
                    </div><!--row-->
                </div><!--card body-->
            </div><!--card-->
        </div><!-- col-md-8 -->
    </div><!-- row -->
@endsection


@section('xjs')




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
@include('frontend.includes.partials.scripts.verification.phoneNumberInputValidation')



@endsection
