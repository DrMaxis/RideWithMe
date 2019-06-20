<head>
  <meta charset="utf-8">



  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <meta name="csrf-token" content="{{ csrf_token() }}">
  <title>@yield('title', app_name())</title>
  <meta name="description"
    content="@yield('meta_description', 'Ride With Me, African Carpooling & Ride Sharing')">
  <meta name="author" content="@yield('meta_author', 'Nathan Antwi'.' | '. 'Studio Unwanted')">
  @yield('meta')

  {{-- See https://laravel.com/docs/5.5/blade#stacks for usage --}}
  {{-- @stack('before-styles') --}}
  <!-- Check if the language is set to RTL, so apply the RTL layouts -->
  <!-- Otherwise apply the normal LTR layouts -->
  {{--   {{ style(mix('css/frontend.css')) }}
  @stack('after-styles') --}}

  {{-- Favicon --}}
  <link rel="apple-touch-icon" sizes="57x57" href="{{asset('img/frontend/favicon/apple-icon-57x57.png')}}">
  <link rel="apple-touch-icon" sizes="60x60" href="{{asset('img/frontend/favicon/apple-icon-60x60.png')}}">
  <link rel="apple-touch-icon" sizes="72x72" href="{{asset('img/frontend/favicon/apple-icon-72x72.png')}}">
  <link rel="apple-touch-icon" sizes="76x76" href="{{asset('img/frontend/favicon/apple-icon-76x76.png')}}">
  <link rel="apple-touch-icon" sizes="114x114" href="{{asset('img/frontend/favicon/apple-icon-114x114.png')}}">
  <link rel="apple-touch-icon" sizes="120x120" href="{{asset('img/frontend/favicon/apple-icon-120x120.png')}}">
  <link rel="apple-touch-icon" sizes="144x144" href="{{asset('img/frontend/favicon/apple-icon-144x144.png')}}">
  <link rel="apple-touch-icon" sizes="152x152" href="{{asset('img/frontend/favicon/apple-icon-152x152.png')}}">
  <link rel="apple-touch-icon" sizes="180x180" href="{{asset('img/frontend/favicon/apple-icon-180x180.png')}}">
  <link rel="icon" type="image/png" sizes="192x192" href="{{asset('img/frontend/favicon/android-icon-192x192.png')}}">
  <link rel="icon" type="image/png" sizes="32x32" href="{{asset('img/frontend/favicon/favicon-32x32.png')}}">
  <link rel="icon" type="image/png" sizes="96x96" href="{{asset('img/frontend/favicon/favicon-96x96.png')}}">
  <link rel="icon" type="image/png" sizes="16x16" href="{{asset('img/frontend/favicon/favicon-16x16.png')}}">
  <link rel="manifest" href="{{asset('img/frontend/favicon/manifest.json')}}">
  <meta name="msapplication-TileColor" content="#ffffff">
  <meta name="msapplication-TileImage" content="{{asset('img/frontend/favicon/ms-icon-144x144.png')}}">
  <meta name="theme-color" content="#ffffff">


  <!-- Library - Bootstrap v3.3.5 -->
  <link rel="stylesheet" type="text/css" href="{{asset('vendor/bootstrap/bootstrap.min.css')}}">
  <link rel="stylesheet" type="text/css" href="{{asset('vendor/bootstrap/datetimepicker/bootstrap-datetimepicker.min.css')}}">
  <link rel="stylesheet" type="text/css" href="{{asset('vendor/fonts/font-awesome.min.css')}}">
  <link rel="stylesheet" type="text/css" href="{{asset('vendor/awe/awe-booking-font.css')}}">
  <link rel="stylesheet" type="text/css" href="{{asset('vendor/js/jquery-ui.css')}}">
  <link rel="stylesheet" type="text/css" href="{{asset('vendor/js/jquery.owl.carousel.css')}}">
  <link rel="stylesheet" type="text/css" href="{{asset('css/base/style.css')}}">
  <link rel="stylesheet" type="text/css" href="{{asset('css/base/demo.css')}}">
  <link rel="stylesheet" type="text/css" href="{{asset('vendor/revslider-demo/css/settings.css')}}">





  @yield('xcss')

  @yield('google-maps')

  @yield('prescripts')

  {{-- {!! $data['fromLocationMap']['js']!!}
 {!! $data['toLocationMap']['js']!!} --}}
  {{-- 
    @include('frontend.includes.google.map')
   
    --}}

  {{-- <script type="text/javascript">
      window.addEventListener('load', function() {
        initAutocomplete();
      }, false);
    </script> 
 --}}


</head>