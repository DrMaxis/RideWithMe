<!-- NAVIGATION -->
<nav class="navigation awe-navigation" data-responsive="1200">
    <ul class="menu-list">
        <li class="menu-item-has-children current-menu-parent">
            <a href="index.html">Home</a>

        </li>

        <li class="menu-item-has-children">
            <a href="{{route('frontend.rides.index')}}">Open Rides</a>

        </li>



        <li class="menu-item-has-children">
            <a href="{{route('frontend.contact')}}">Contact</a>

        </li>

        @auth
        <li><a href="{{route('frontend.user.dashboard')}}"
                class="nav-link {{ active_class(Active::checkRoute('frontend.user.dashboard')) }}">@lang('navs.frontend.dashboard')</a>
        </li>
        @endauth


        @guest
        <li class="nav-item">
            <a href="{{route('frontend.auth.login')}}" class="nav-link {{ active_class(Active::checkRoute('frontend.auth.login')) }}">@lang('navs.frontend.login')</a>
        </li>

        @if(config('access.registration'))
        <li class="nav-item">
            <a href="{{route('frontend.auth.register')}}"class="nav-link {{ active_class(Active::checkRoute('frontend.auth.register')) }}">@lang('navs.frontend.register')</a>
        </li>
        @endif

        @else

        <li>
            <a href="{{ route('frontend.user.account') }}"  class="dropdown-item {{ active_class(Active::checkRoute('frontend.user.account')) }}">{{ $logged_in_user->name }}</a>
        </li>
         @can('view backend')
        <li>
            <a href="{{ route('admin.dashboard') }}"
                class="dropdown-item">@lang('navs.frontend.user.administration')</a>
        </li>
        @endcan

        @endguest

    </ul>
</nav>
<!-- END / NAVIGATION -->