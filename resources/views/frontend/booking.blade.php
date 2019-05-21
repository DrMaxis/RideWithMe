@extends('frontend.layouts.app')

@section('title', app_name() . ' | ' . __('navs.general.home'))

@section('google-maps')
{{-- 
 {!! $data['fromLocationMap']['js'] !!}
 {!! $data['toLocationMap']['js'] !!}  --}}
 {!! $data['bookingMap']['js'] !!} 

 <script type="text/javascript">
	function initAutocomplete() {
	  // Create the autocomplete object, restricting the search to geographical
	  // location types.
	  toLocation = new google.maps.places.Autocomplete((document.getElementById('pickup_location_input')),
		  {types: ['geocode']});
		  fromLocation = new google.maps.places.Autocomplete((document.getElementById('dropoff_location_input')),
		  {types: ['geocode']});

		  fromLocation.bindTo('bounds', bookingMap);
		  toLocation.bindTo('bounds', bookingMap);
	  // When the user selects an address from the dropdown, populate the address
	  // fields in the form.
	  toLocation.addListener('place_changed', fillInAddress);
	  fromLocation.addListener('place_changed', fillInAddress);
	  
	}
  

	  </script>


@endsection

@section('prescripts')

@endsection

@section('xcss')

@endsection

@section('content')

<!-- Page Content -->
<div class="container-fluid no-padding page-content book-taxi-online-form">

@include('frontend.partials.booking.breadcrumb')

@include('frontend.partials.booking.map')

@include('frontend.partials.booking.form')
</div><!-- Page Content/- -->

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