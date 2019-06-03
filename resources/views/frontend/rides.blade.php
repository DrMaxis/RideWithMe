@extends('frontend.layouts.app')

@section('title', app_name() . ' | ' . __('navs.general.home'))

@section('google-maps')
{{--  {!! $data['fromLocationMap']['js'] !!}
 {!! $data['toLocationMap']['js'] !!}  --}}

@endsection
@section('prescripts')

@endsection

@section('xcss')

@endsection

@section('content')


@include('frontend.partials.rides.breadcrumb')
@include('frontend.partials.rides.list')




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