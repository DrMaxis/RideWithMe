<!-- Topbar -->
<nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">


  <div class="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
    <div class=" py-3 d-flex flex-row align-items-center justify-content-between">
          <h6 class="m-0 font-weight-bold text-gray-900">Ride With Me User Account Dashboard</h6>
          
        </div>
  </div>

        <!-- Sidebar Toggle (Topbar) -->
        <button id="sidebarToggleTop" class="btn btn-link d-md-none rounded-circle mr-3">
          <i class="fa fa-bars"></i>
        </button>

        <!-- Topbar Navbar -->
        <ul class="navbar-nav ml-auto">

          
          <!-- Nav Item - User Information -->
          <li class="nav-item dropdown no-arrow">
            
               
            <a class="nav-link dropdown-toggle" href="#" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <span class="mr-2 d-none d-lg-inline text-gray-600 small">{{$logged_in_user->character_name}}</span>
              <img class="img-profile rounded-circle" src="{{$logged_in_user->picture}}">
            </a>
            <!-- Dropdown - User Information -->
            <div class="dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="userDropdown">
 <a class="dropdown-item" {{ active_class(Active::checkRoute('frontend.user.account.settings')) }}" href="{{route('frontend.user.account.settings')}}">
                    <i class="fas fa-fw fa-cog"></i>
                    <span>Account Settings</span>
                  </a>
               <a class="dropdown-item" href="{{route('frontend.user.account.cars.index')}}">
                    <i class="fas fa-fw fa-car"></i>
                    <span>My Cars</span>
                  </a>
                  <a  class="dropdown-item" href="{{route('frontend.user.account.booking')}}">
                      <i class="fas fa-fw fa-plus"></i>
                      <span>Create A Ride</span>
                    </a>

              <div class="dropdown-divider"></div>


              <a href="#" class="dropdown-item" data-toggle="modal" data-target="#logoutModal" >
                <i class="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                @lang('navs.general.logout')
              </a>
              
            </div>
          </li>

        </ul>

      </nav>
      <!-- End of Topbar -->