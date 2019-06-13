@extends('frontend.layouts.app')

@section('title', app_name() . ' | ' . __('navs.frontend.dashboard') )



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
    <div class="row mb-4">
        <div class="col">
            <div class="card">
                <div class="card-header">
                    <strong>
                        <i class="fas fa-tachometer-alt"></i> @lang('navs.frontend.dashboard')
                    </strong>
                </div>
                <!--card-header-->

                <div class="card-body">
                    <div class="row">
                        <div class="col col-sm-4 order-1 order-sm-2  mb-4">
                            <div class="card mb-4 bg-light">
                                <img class="card-img-top" src="{{ $logged_in_user->picture }}" alt="Profile Picture">

                                <div class="card-body">
                                    <h4 class="card-title">
                                        {{ $logged_in_user->name }}<br />
                                    </h4>

                                    <p class="card-text">
                                        <small>
                                            <i class="fas fa-envelope"></i> {{ $logged_in_user->email }}<br />
                                            <i class="fas fa-calendar-check"></i>
                                            @lang('strings.frontend.general.joined')
                                            {{ timezone()->convertToLocal($logged_in_user->created_at, 'F jS, Y') }}
                                        </small>
                                    </p>

                                    <p class="card-text">

                                        <a href="{{ route('frontend.user.account')}}" class="btn btn-info btn-sm mb-1">
                                            <i class="fas fa-user-circle"></i> @lang('navs.frontend.user.account')
                                        </a>

                                        @can('view backend')
                                        &nbsp;<a href="{{ route('admin.dashboard')}}"
                                            class="btn btn-danger btn-sm mb-1">
                                            <i class="fas fa-user-secret"></i>
                                            @lang('navs.frontend.user.administration')
                                        </a>
                                        @endcan
                                    </p>
                                </div>
                            </div>

                            <div class="card mb-4">
                                <div class="card-header">Header</div>
                                <div class="card-body">
                                    <h4 class="card-title">Info card title</h4>
                                    <p class="card-text">Some quick example text to build on the card title and make up
                                        the bulk of the card's content.</p>
                                </div>
                            </div>
                            <!--card-->
                        </div>
                        <!--col-md-4-->

                        <div class="col-md-8 order-2 order-sm-1">
                            <div class="row">
                                <div class="col">
                                    <div class="card mb-4">
                                        <div class="card-header">
                                            Item
                                        </div>
                                        <!--card-header-->

                                        <div class="card-body">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non qui facilis
                                            deleniti expedita fuga ipsum numquam aperiam itaque cum maxime.
                                        </div>
                                        <!--card-body-->
                                    </div>
                                    <!--card-->
                                </div>
                                <!--col-md-6-->
                            </div>
                            <!--row-->

                            <div class="row">
                                <div class="col">
                                    <div class="card mb-4">
                                        <div class="card-header">
                                            Item
                                        </div>
                                        <!--card-header-->

                                        <div class="card-body">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non qui facilis
                                            deleniti expedita fuga ipsum numquam aperiam itaque cum maxime.
                                        </div>
                                        <!--card-body-->
                                    </div>
                                    <!--card-->
                                </div>
                                <!--col-md-6-->
                            </div>
                            <!--row-->

                            <div class="row">
                                <div class="col">
                                    <div class="card mb-4">
                                        <div class="card-header">
                                            Item
                                        </div>
                                        <!--card-header-->

                                        <div class="card-body">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non qui facilis
                                            deleniti expedita fuga ipsum numquam aperiam itaque cum maxime.
                                        </div>
                                        <!--card-body-->
                                    </div>
                                    <!--card-->
                                </div>
                                <!--col-md-6-->

                                <div class="col">
                                    <div class="card mb-4">
                                        <div class="card-header">
                                            Item
                                        </div>
                                        <!--card-header-->

                                        <div class="card-body">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non qui facilis
                                            deleniti expedita fuga ipsum numquam aperiam itaque cum maxime.
                                        </div>
                                        <!--card-body-->
                                    </div>
                                    <!--card-->
                                </div>
                                <!--col-md-6-->

                                <div class="w-100"></div>

                                <div class="col">
                                    <div class="card mb-4">
                                        <div class="card-header">
                                            Item
                                        </div>
                                        <!--card-header-->

                                        <div class="card-body">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non qui facilis
                                            deleniti expedita fuga ipsum numquam aperiam itaque cum maxime.
                                        </div>
                                        <!--card-body-->
                                    </div>
                                    <!--card-->
                                </div>
                                <!--col-md-6-->

                                <div class="col">
                                    <div class="card mb-4">
                                        <div class="card-header">
                                            Item
                                        </div>
                                        <!--card-header-->

                                        <div class="card-body">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non qui facilis
                                            deleniti expedita fuga ipsum numquam aperiam itaque cum maxime.
                                        </div>
                                        <!--card-body-->
                                    </div>
                                    <!--card-->
                                </div>
                                <!--col-md-6-->
                            </div>
                            <!--row-->
                        </div>
                        <!--col-md-8-->
                    </div><!-- row -->
                </div> <!-- card-body -->
            </div><!-- card -->
        </div><!-- row -->
    </div><!-- row -->

</div>

@endsection


@section('xjs')
<!-- Scripts -->
@stack('before-scripts')
{!! script(mix('js/manifest.js')) !!}
{!! script(mix('js/vendor.js')) !!}
{!! script(mix('js/frontend_a.js')) !!}
@stack('after-scripts')



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