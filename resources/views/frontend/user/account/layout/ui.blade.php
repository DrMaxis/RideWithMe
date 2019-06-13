<html class="no-js">


@langrtl
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" dir="rtl">
@else
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
@endlangrtl
@include('frontend.user.account.include.head')

@yield('xcss')

@yield('topscripts')

<body id="page-top" class="sidebar-toggled">




    <!--/-/-/-/-/-/-/-/-/
            Begin UI-Container  
        -/-/-/-/-/-/-/-/-/-->


    <div id="wrapper">
        @include('frontend.user.account.include.sidebar')


        <div id="content-wrapper" class="d-flex flex-column">

            <div id="content">
                @include('frontend.user.account.include.topnavbar')
                @include('includes.partials.messages')
                @yield('content')

            </div>






            @include('frontend.user.account.include.footer')


            @yield('xcomponents')

        </div>
    </div>
    <!-- #app -->


    <!--/-/-/-/-/-/-/-/-/
            End UI-Container  
        -/-/-/-/-/-/-/-/-/-->














    <!--/-/-/-/-/-/-/-/-/
            Begin JAVASCRIPT  
        -/-/-/-/-/-/-/-/-/-->












    <!--/-/-/-/-/-/-/-/-/
            END JAVASCRIPT  
        -/-/-/-/-/-/-/-/-/-->





    <!-- Scripts -->
    <script src="{{asset('js/user/vendor/jquery/jquery.min.js')}}"></script>
    <script src="{{asset('js/user/vendor/bootstrap/bootstrap.bundle.min.js')}}"></script>
    <script src="{{asset('vendor/bootstrap/bootstrap.min.js')}}"></script>
    @include('includes.partials.ga')

    <script src="{{asset('js/user/app.js')}}"></script>
    <!-- Core plugin JavaScript-->

    <script src="{{asset('js/user/vendor/jquery-easing/jquery.easing.min.js')}}"></script>
    @yield('xjs')



</body>

</html>