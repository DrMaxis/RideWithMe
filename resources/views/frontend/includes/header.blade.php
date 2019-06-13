<!-- HEADER PAGE -->
        <header id="header-page">
                <div class="header-page__inner">
                    <div class="container">
                        <!-- LOGO -->
                        <div class="logo">
                            <a href="{{route('frontend.rides.index')}}"><img src="{{asset('img/frontend/logo/logoicon-r.png')}}" alt=""></a>
                        </div>
                        <!-- END / LOGO -->
                        
                       @include('frontend.includes.navbar')

                       
                        
                        <!-- SEARCH BOX -->
                        <div class="search-box">
                            <span class="searchtoggle"><i class="awe-icon awe-icon-search"></i></span>
                            <form class="form-search">
                                <div class="form-item">
                                    <input type="text" value="Search &amp; hit enter">
                                </div>
                            </form>
                        </div>
                        <!-- END / SEARCH BOX -->
    
    
                        <!-- TOGGLE MENU RESPONSIVE -->
                        <a class="toggle-menu-responsive" href="#">
                            <div class="hamburger">
                                <span class="item item-1"></span>
                                <span class="item item-2"></span>
                                <span class="item item-3"></span>
                            </div>
                        </a>
                        <!-- END / TOGGLE MENU RESPONSIVE -->
    
                    </div>
                </div>
            </header>
            <!-- END / HEADER PAGE -->