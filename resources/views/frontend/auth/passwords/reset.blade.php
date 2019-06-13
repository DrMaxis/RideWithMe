@extends('frontend.layouts.app')

@section('title', app_name() . ' | ' . __('labels.frontend.passwords.reset_password_box_title'))



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
        <div class="col col-sm-6 align-self-center">
            <div class="card">
                <div class="card-header">
                    <strong>
                        @lang('labels.frontend.passwords.reset_password_box_title')
                    </strong>
                </div><!--card-header-->

                <div class="card-body">

                    @if(session('status'))
                        <div class="alert alert-success">
                            {{ session('status') }}
                        </div>
                    @endif

                    {{ html()->form('POST', route('frontend.auth.password.reset'))->class('form-horizontal')->open() }}
                        {{ html()->hidden('token', $token) }}

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
                                    {{ html()->label(__('validation.attributes.frontend.password_confirmation'))->for('password_confirmation') }}

                                    {{ html()->password('password_confirmation')
                                        ->class('form-control')
                                        ->placeholder(__('validation.attributes.frontend.password_confirmation'))
                                        ->required() }}
                                </div><!--form-group-->
                            </div><!--col-->
                        </div><!--row-->

                        <div class="row">
                            <div class="col">
                                <div class="form-group mb-0 clearfix">
                                    {{ form_submit(__('labels.frontend.passwords.reset_password_button')) }}
                                </div><!--form-group-->
                            </div><!--col-->
                        </div><!--row-->
                    {{ html()->form()->close() }}
                </div><!-- card-body -->
            </div><!-- card -->
        </div><!-- col-6 -->
    </div><!-- row -->
@endsection
