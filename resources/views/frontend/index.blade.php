@extends('frontend.layouts.app')

@section('title', app_name() . ' | ' . __('navs.general.home'))




@section('stylesheets')
    

  <!-- Library - Bootstrap v3.3.5 -->
  <link rel="stylesheet" type="text/css" href="{{asset('vendor/bootstrap/bootstrap.min.css')}}">
  <link rel="stylesheet" type="text/css" href="{{asset('vendor/bootstrap/bootstrap-datetimepicker.min.css')}}">
  <link rel="stylesheet" type="text/css" href="{{asset('vendor/fonts/font-awesome.min.css')}}">
  <link rel="stylesheet" type="text/css" href="{{asset('vendor/awe/awe-booking-font.css')}}">
  <link rel="stylesheet" type="text/css" href="{{asset('vendor/js/jquery-ui.css')}}">
  <link rel="stylesheet" type="text/css" href="{{asset('css/base/style.css')}}">
  <link rel="stylesheet" type="text/css" href="{{asset('css/base/demo.css')}}">
  <link rel="stylesheet" type="text/css" href="{{asset('vendor/revslider-demo/css/settings.css')}}">



  

@endsection






@section('prescripts')

@endsection

@section('xcss')

@endsection

@section('content')

@include('frontend.partials.homepage.slider')
@include('frontend.partials.homepage.content')



@endsection


@section('xjs')




	<!-- JQuery v1.11.3 -->
	<script src="{{asset('vendor/js/jquery.min.js')}}"></script>
	<!-- Library - Bootstrap v3.3.5 -->
	<script src="{{asset('vendor/bootstrap/bootstrap.min.js')}}"></script><!-- Bootstrap JS File v3.3.5 -->
 	<script src="{{asset('vendor/bootstrap/bootstrap-datetimepicker.min.js')}}"></script><!-- Bootstrap JS File v3.3.5 -->
  <script type="text/javascript" src="{{asset('vendor/moment/moment-with-locales.js')}}"> </script>
	<script type="text/javascript" src="{{asset('vendor/js/jquery.owl.carousel.js')}}"> </script>
  <script type="text/javascript" src="{{asset('vendor/js/jquery-ui.js')}}"> </script>
	<script type="text/javascript" src="{{asset('js/base/plugins.js')}}"> </script>


    <!-- REVOLUTION DEMO -->
    <script type="text/javascript" src="{{asset('vendor/revslider-demo/js/jquery.themepunch.revolution.min.js')}}"></script>
    <script type="text/javascript" src="{{asset('vendor/revslider-demo/js/jquery.themepunch.tools.min.js')}}"></script>
    <script type="text/javascript">
        if($('#slider-revolution').length) {
            $('#slider-revolution').show().revolution({
                ottedOverlay:"none",
                delay:10000,
                startwidth:1600,
                startheight:650,
                hideThumbs:200,

                thumbWidth:100,
                thumbHeight:50,
                thumbAmount:5,
                
                                        
                simplifyAll:"off",

                navigationType:"none",
                navigationArrows:"solo",
                navigationStyle:"preview4",

                touchenabled:"on",
                onHoverStop:"on",
                nextSlideOnWindowFocus:"off",

                swipe_threshold: 0.7,
                swipe_min_touches: 1,
                drag_block_vertical: false,
                
                parallax:"mouse",
                parallaxBgFreeze:"on",
                parallaxLevels:[7,4,3,2,5,4,3,2,1,0],
                                        
                                        
                keyboardNavigation:"off",

                navigationHAlign:"center",
                navigationVAlign:"bottom",
                navigationHOffset:0,
                navigationVOffset:20,

                soloArrowLeftHalign:"left",
                soloArrowLeftValign:"center",
                soloArrowLeftHOffset:20,
                soloArrowLeftVOffset:0,

                soloArrowRightHalign:"right",
                soloArrowRightValign:"center",
                soloArrowRightHOffset:20,
                soloArrowRightVOffset:0,

                shadow:0,
                fullWidth:"on",
                fullScreen:"off",

                spinner:"spinner2",
                                        
                stopLoop:"off",
                stopAfterLoops:-1,
                stopAtSlide:-1,

                shuffle:"off",

                autoHeight:"off",
                forceFullWidth:"off",
                
                
                
                hideThumbsOnMobile:"off",
                hideNavDelayOnMobile:1500,
                hideBulletsOnMobile:"off",
                hideArrowsOnMobile:"off",
                hideThumbsUnderResolution:0,

                hideSliderAtLimit:0,
                hideCaptionAtLimit:0,
                hideAllCaptionAtLilmit:0,
                startWithSlide:0
            });
        }
    </script>

    @endsection