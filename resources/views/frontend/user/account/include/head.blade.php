<!--/-/-/-/-/-/-/-/-/
    Begin Head 
-/-/-/-/-/-/-/-/-/-->

<head>

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>
        @yield('title', app_name().' | '.$logged_in_user->name)</title>
    <meta name="description" content="@yield('meta_description', 'Ride With Me')">
    <meta name="author" content="@yield('meta_author', 'You')">
    @yield('meta')

<link rel="canonical" href="@yield('canonical-url')" />




<!--/-/-/-/-/-/-/-/-/
  
      START STYLE DEPENDANTS 
      
  -/-/-/-/-/-/-/-/-/-->



<!--/-/-/-/-/-/-/-/-/ 
      Favicon 
  -/-/-/-/-/-/-/-/-/-->

<link rel="apple-touch-icon" sizes="180x180" href="{{asset('assets/imgs/favicon/apple-touch-icon.png')}}">
<link rel="icon" type="image/png" sizes="32x32" href="{{asset('assets/imgs/favicon/favicon-32x32.png')}}">
<link rel="icon" type="image/png" sizes="16x16" href="{{asset('assets/imgs/favicon/favicon-16x16.png')}}">
<link rel="manifest" href="{{asset('assets/imgs/favicon/site.webmanifest')}}">
<link rel="mask-icon" href="{{asset('assets/imgs/favicon/safari-pinned-tab.svg')}}" color="#5bbad5">
<meta name="msapplication-TileColor" content="#da532c">
<meta name="theme-color" content="#ffffff">





<!--/-/-/-/-/-/-/-/-/ 
      SVG
  -/-/-/-/-/-/-/-/-/-->


<!--/-/-/-/-/-/-/-/-/ 
    STYLE SHEETS
  -/-/-/-/-/-/-/-/-/-->

 
@include('frontend.user.account.include.basestyle')

<!--/-/-/-/-/-/-/-/-/ 
  
      END STYLE DEPENDANTS 
      
  -/-/-/-/-/-/-/-/-/-->


</head>

<!--/-/-/-/-/-/-/-/-/
  
  
      End Head
  
  
  -/-/-/-/-/-/-/-/-/-/-->