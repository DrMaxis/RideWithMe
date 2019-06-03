<nav class="navbar ow-navigation">
        <div class="container">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <div class="navbar-brand logo-block">
                    <a href="#">
                        <img src="{{asset('img/frontend/logo/logoicon-r.png')}}" alt="Logo" />
                        <b>Ride With Me</b><span>Carpooling Made Easy</span>
                    </a>
                </div>
            </div>
            <div id="navbar" class="navbar-collapse collapse">
                <ul class="nav navbar-nav">
                   
                    <li><a href="{{route('frontend.index')}}">Home</a></li>
                    <li><a href="{{route('frontend.user.booking.index')}}">Request A Ride</a></li>
                    <li><a href="#">Current Rides</a></li>

                     <li><a href="#">About Us</a></li>
                    <li><a href="#">Contact US</a></li>	
                    @auth
            <li><a href="{{route('frontend.user.dashboard')}}" class="nav-link {{ active_class(Active::checkRoute('frontend.user.dashboard')) }}">@lang('navs.frontend.dashboard')</a></li>
        @endauth

        @guest
            <li class="nav-item"><a href="{{route('frontend.auth.login')}}" class="nav-link {{ active_class(Active::checkRoute('frontend.auth.login')) }}">@lang('navs.frontend.login')</a></li>

            @if(config('access.registration'))
                <li class="nav-item"><a href="{{route('frontend.auth.register')}}" class="nav-link {{ active_class(Active::checkRoute('frontend.auth.register')) }}">@lang('navs.frontend.register')</a></li>
            @endif

        @else

            <li>
                <a href="{{ route('frontend.user.account') }}" class="dropdown-item {{ active_class(Active::checkRoute('frontend.user.account')) }}">{{ $logged_in_user->name }}</a>  
            </li>   @can('view backend')
                      <li>
                          
                            <a href="{{ route('admin.dashboard') }}" class="dropdown-item">@lang('navs.frontend.user.administration')</a>
                    
                    </li>  
                    @endcan
        @endguest						
                </ul>						
            </div>
            
        </div>
    </nav>