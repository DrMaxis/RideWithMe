@extends('frontend.user.account.layout.ui')


@section('xcss')
<link href="{{asset('css/user/vendor/datatables/dataTables.bootstrap4.min.css')}}" rel="stylesheet">
<style>

.op-0 {
  opacity: 0;
  
}

.hr-15{
  height: 1.5rem;
}

</style>
@endsection


@section('content')


<!-- Begin Page Content -->
<div class="container-fluid">

       <!-- Page Heading -->
       <div class="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 class="h3 mb-0 text-gray-800">Account Management</h1>
          </div>

  <!-- Content Row -->
  <div class="row">

        <!-- Area Chart -->
        <div class="col-lg-6 mb-4">

          <!-- Illustrations -->
          <div class="card shadow mb-4">
            <div class="card-header py-3">
              <h6 class="m-0 font-weight-bold text-primary">Account Settings</h6>
            </div>
            <div class="card-body">
              {{-- <div class="text-center">
                <img class="img-fluid px-3 px-sm-4 mt-3 mb-4" style="width: 25rem;" src="img/undraw_posting_photo.svg" alt="">
              </div>
              <p>Add some quality, svg illustrations to your project courtesy of <a target="_blank" rel="nofollow" href="https://undraw.co/">unDraw</a>, a constantly updated collection of beautiful svg images that you can use completely free and without attribution!</p>
              <a target="_blank" rel="nofollow" href="https://undraw.co/">Browse Illustrations on unDraw →</a> --}}

              <div role="tabpanel">
                    <ul class="nav nav-tabs" role="tablist">
                        <li class="nav-item">
                            <a href="#profile" class="nav-link active" aria-controls="profile" role="tab" data-toggle="tab">@lang('navs.frontend.user.profile')</a>
                        </li>

                        <li class="nav-item">
                            <a href="#edit" class="nav-link" aria-controls="edit" role="tab" data-toggle="tab">@lang('labels.frontend.user.profile.update_information')</a>
                        </li>

                        @if($logged_in_user->canChangePassword())
                            <li class="nav-item">
                                <a href="#password" class="nav-link" aria-controls="password" role="tab" data-toggle="tab">@lang('navs.frontend.user.change_password')</a>
                            </li>
                        @endif
                    </ul>

                    <div class="tab-content">
                        <div role="tabpanel" class="tab-pane fade show active pt-3" id="profile" aria-labelledby="profile-tab">
                            @include('frontend.user.account.partials.settings.account.profile')
                        </div><!--tab panel profile-->

                        <div role="tabpanel" class="tab-pane fade show pt-3" id="edit" aria-labelledby="edit-tab">
                            @include('frontend.user.account.partials.settings.account.edit')
                        </div><!--tab panel profile-->

                        @if($logged_in_user->canChangePassword())
                            <div role="tabpanel" class="tab-pane fade show pt-3" id="password" aria-labelledby="password-tab">
                                @include('frontend.user.account.partials.settings.account.change-password')
                            </div><!--tab panel change password-->
                        @endif
                    </div><!--tab content-->
                </div><!--tab panel-->



            </div>
          </div>

     

        </div>

        <!-- Pie Chart -->
        <div class="col-lg-6 mb-4">

          <!-- Illustrations -->
          <div class="card shadow mb-4">
            <div class="card-header py-3">
              <h6 class="m-0 font-weight-bold text-primary">Rider Settings</h6>
            </div>
            <div class="card-body">
              {{-- <div class="text-center">
                <img class="img-fluid px-3 px-sm-4 mt-3 mb-4" style="width: 25rem;" src="img/undraw_posting_photo.svg" alt="">
              </div>
              <p>Add some quality, svg illustrations to your project courtesy of <a target="_blank" rel="nofollow" href="https://undraw.co/">unDraw</a>, a constantly updated collection of beautiful svg images that you can use completely free and without attribution!</p>
              <a target="_blank" rel="nofollow" href="https://undraw.co/">Browse Illustrations on unDraw →</a> --}}



              <div role="tabpanel">
                    <ul class="nav nav-tabs" role="tablist">
                        <li class="nav-item">
                            <a href="#ride_profile" class="nav-link active" aria-controls="ride_profile" role="tab" data-toggle="tab">@lang('navs.frontend.user.rider_profile')</a>
                        </li>

                        <li class="nav-item">
                            <a href="#add_car" class="nav-link" aria-controls="add_car" role="tab" data-toggle="tab">@lang('labels.frontend.user.profile.add_car')</a>
                        </li>

                        @if($logged_in_user->canChangePassword())
                            <li class="nav-item">
                                <a href="#base_location" class="nav-link" aria-controls="base_location" role="tab" data-toggle="tab">@lang('navs.frontend.user.base_location')</a>
                            </li>
                        @endif
                    </ul>

                    <div class="tab-content">
                        <div role="tabpanel" class="tab-pane fade show active pt-3" id="ride_profile" aria-labelledby="ride_profile-tab">
                            @include('frontend.user.account.partials.settings.rideProfile.profile')
                        </div><!--tab panel profile-->

                        <div role="tabpanel" class="tab-pane fade show pt-3" id="add_car" aria-labelledby="add_car-tab">
                            @include('frontend.user.account.partials.settings.rideProfile.addCar')
                        </div><!--tab panel profile-->

                        @if($logged_in_user->canChangePassword())
                            <div role="tabpanel" class="tab-pane fade show pt-3" id="base_location" aria-labelledby="base_location-tab">
                                @include('frontend.user.account.partials.settings.rideProfile.baseLocation')
                            </div><!--tab panel change password-->
                        @endif
                    </div><!--tab content-->
                </div><!--tab panel-->

            </div>
          </div>

  

        </div>
      </div>






        {{-- {{PollWriter::draw(1)}} --}} 











      </div>
      <!-- /.container-fluid -->

@endsection


@section('xcomponents')
  <!-- Scroll to Top Button-->
  <a class="scroll-to-top rounded" href="#page-top">
        <i class="fas fa-angle-up"></i>
      </a>
  
      
          {{-- Logout Modal --}}
          @include('frontend.user.account.partials.modals.logout')
      

@endsection


@section('xjs')


 <!-- Page level plugins -->
  <!-- Page level plugins -->
  <script src="{{asset('js/user/vendor/datatables/jquery.dataTables.min.js')}}"></script>
  <script src="{{asset('js/user/vendor/datatables/dataTables.bootstrap4.min.js')}}"></script>

 <!-- Page level custom scripts -->
 {{-- <script src="{{asset('js/demo/datatables-demo.js')}}"></script> --}}

 <script>
 
 $(document).ready(function() {
  $('#dataTable').DataTable();
});

 
 </script>
@endsection