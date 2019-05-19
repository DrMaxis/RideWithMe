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
        <a id="top"></a>
        <div class="main-container">

            @include('frontend.includes.header')

            @include('includes.partials.messages')

            @yield('content')

@include('frontend.includes.footer')
        </div><!-- container -->
   

    <!-- Scripts -->
    @stack('before-scripts')
    {{-- {!! script(mix('js/manifest.js')) !!}
    {!! script(mix('js/vendor.js')) !!}
    {!! script(mix('js/frontend.js')) !!} --}}
    @stack('after-scripts') 


@yield('xjs')



    @include('includes.partials.ga')
</body>

</html>