@extends('frontend.user.account.layout.ui')


@section('xcss')
<link href="{{asset('css/user/vendor/datatables/dataTables.bootstrap4.min.css')}}" rel="stylesheet">

@endsection


@section('content')


<!-- Begin Page Content -->
<div class="container-fluid">

       <!-- Page Heading -->
       <div class="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 class="h3 mb-0 text-gray-800">Dashboard</h1>
          </div>

  <!-- Content Row -->
  <div class="row">

        <!-- Earnings (Monthly) Card Example -->
        <div class="col-xl-4 col-md-6 mb-4">
          <div class="card border-left-primary shadow h-100 py-2">
            <div class="card-body">
              <div class="row no-gutters align-items-center">
                <div class="col mr-2">
                  <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">Account Balance</div>
                  <div class="h5 mb-0 font-weight-bold text-gray-800">{{-- {{$logged_in_user->account->account_balance}} --}}</div>
                </div>
                <div class="col-auto">
                  <i class="fas fa-dollar-sign  fa-2x text-gray-300"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Earnings (Monthly) Card Example -->
        <div class="col-xl-4 col-md-6 mb-4">
          <div class="card border-left-success shadow h-100 py-2">
            <div class="card-body">
              <div class="row no-gutters align-items-center">
                <div class="col mr-2">
                  <div class="text-xs font-weight-bold text-success text-uppercase mb-1">Open Rides</div>
                  <div class="h5 mb-0 font-weight-bold text-gray-800">{{count($logged_in_user->rides->where('completed', '=', 0))}}</div>
                </div>
                <div class="col-auto">
                  <i class="fas fa-clipboard-list fa-2x text-gray-300"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Earnings (Monthly) Card Example -->
        <div class="col-xl-4 col-md-6 mb-4">
          <div class="card border-left-info shadow h-100 py-2">
            <div class="card-body">
              <div class="row no-gutters align-items-center">
                <div class="col mr-2">
                  <div class="text-xs font-weight-bold text-info text-uppercase mb-1">Completed Rides</div>
                  <div class="row no-gutters align-items-center">
                    <div class="col-auto">
                      <div class="h5 mb-0 mr-3 font-weight-bold text-gray-800">{{count($logged_in_user->rides->where('completed', '=', 1))}}</div>
                    </div>
                  </div>
                </div>
                <div class="col-auto">
                  <i class="fas  fa-users fa-2x text-gray-300"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


        <!-- DataTales Example -->
        <div class="card shadow mb-4">
          <div class="card-header py-3">
            <h6 class="m-0 font-weight-bold text-primary">Most Recent Rides</h6>
          </div>
          <div class="card-body">
            <div class="table-responsive">
              <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                <thead>
                  <tr>
                    <th>Ride Name</th>
                    <th>Position</th>
                    <th>Total Fare</th>
                    <th>Date</th>
                  </tr>
                </thead>
                <tfoot>
                  <tr>
                      <th>Ride Name</th>
                      <th>Position</th>
                      <th>Total Fare</th>
                      <th>Date</th>
                  </tr>
                </tfoot>

                  <tbody>

                    @forelse($logged_in_user->rides as $ride)


                  <tr>
                    <td>{{$ride->ride_name}}</td>
                    <td>p/d</td>
                    <td>{{$ride->calculated_fare}}</td>
                    <td>{{timezone()->convertToLocal($ride->created_at) }}</td>
                  </tr>

                  @empty

                  <h4> You have not created or joined any rides.</h4>

                  @endforelse
                 
                </tbody>  
              </table>
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