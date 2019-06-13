<!-- Sidebar -->
<ul class="navbar-nav bg-gray-900 sidebar sidebar-dark accordion toggled" id="accordionSidebar">

  <!-- Sidebar - Brand -->
  <a class="sidebar-brand d-flex align-items-center justify-content-center" href="{{route('frontend.index')}}">
    <div class="sidebar-brand-icon rotate-n-15">
      <i class="fas fa-laugh-wink"></i>
    </div>
    <div class="sidebar-brand-text mx-3">{{$logged_in_user->name}}</div>
  </a>

  <!-- Divider -->
  <hr class="sidebar-divider my-0">

  <!-- Nav Item - Dashboard -->
  <li class="nav-item active">
    <a class="nav-link {{ active_class(Active::checkRoute('frontend.user.account')) }}"  href="{{ route('frontend.user.account') }}">
      <i class="fas fa-fw fa-tachometer-alt"></i>
      <span>Dashboard</span></a>
  </li>

  <!-- Divider -->
  <hr class="sidebar-divider">

  <!-- Heading -->
  <div class="sidebar-heading">
    Management
  </div>

  <!-- Nav Item - Pages Collapse Menu -->
  <li class="nav-item">
    <a class="nav-link {{ active_class(Active::checkRoute('frontend.user.account.settings')) }}" href="{{route('frontend.user.account.settings')}}">
      <i class="fas fa-fw fa-cog"></i>
      <span>Account Settings</span>
    </a>

  </li>
  <!-- Nav Item - Utilities Collapse Menu -->
  <li class="nav-item">
    <a class="nav-link" href="#">
      <i class="fas fa-fw fa-dollar-sign"></i>
      <span>Transactions</span>
    </a>

  </li>


  <!-- Nav Item - Utilities Collapse Menu -->
  <li class="nav-item">
    <a class="nav-link" href="{{route('frontend.user.account.cars.index')}}">
      <i class="fas fa-fw fa-car"></i>
      <span>Your Cars</span>
    </a>

  </li>


  
  <!-- Nav Item - Utilities Collapse Menu -->
  <li class="nav-item">
      <a class="nav-link" href="{{route('frontend.user.account.booking')}}">
        <i class="fas fa-fw fa-car"></i>
        <span>Create A Ride</span>
      </a>
  
    </li>
  


  <!-- Divider -->
  <hr class="sidebar-divider">


  <!-- Sidebar Toggler (Sidebar) -->
  <div class="text-center d-none d-md-inline">
    <button class="rounded-circle border-0" id="sidebarToggle"></button>
  </div>

</ul>
<!-- End of Sidebar -->