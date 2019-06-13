<!DOCTYPE html>
@langrtl
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" dir="rtl">
@else
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
@endlangrtl
@include('frontend.includes.head')

<body data-offset="200" data-spy="scroll" data-target=".ow-navigation">



    @include('includes.partials.logged-in-as')
    @include('frontend.includes.preloader')

    <div id="page-wrap" class="main-container">

        @include('frontend.includes.header')

        @include('includes.partials.messages')

        @yield('content')



        @include('frontend.includes.footer')
    </div><!-- container -->



	<!-- JQuery v1.11.3 -->
	<script src="{{asset('vendor/js/jquery.min.js')}}"></script>
	<!-- Library - Bootstrap v3.3.5 -->
	<script src="{{asset('vendor/bootstrap/bootstrap.min.js')}}"></script><!-- Bootstrap JS File v3.3.5 -->
 	<script src="{{asset('vendor/bootstrap/datetimepicker/bootstrap-datetimepicker.min.js')}}"></script><!-- Bootstrap JS File v3.3.5 -->
  <script type="text/javascript" src="{{asset('vendor/moment/moment-with-locales.js')}}"> </script>
	<script type="text/javascript" src="{{asset('vendor/js/jquery.owl.carousel.js')}}"> </script>
  <script type="text/javascript" src="{{asset('vendor/js/jquery-ui.js')}}"> </script>
	<script type="text/javascript" src="{{asset('js/base/plugins.js')}}"> </script>




    @yield('xjs')
    @include('includes.partials.ga')


</body>

</html>