@extends('frontend.user.account.layout.ui')


@section('xcss')
<link href="{{asset('css/user/vendor/datatables/dataTables.bootstrap4.min.css')}}" rel="stylesheet">

@endsection


@section('content')


<!-- Begin Page Content -->
<div class="container-fluid">

       <!-- Page Heading -->
       <div class="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 class="h3 mb-0 text-gray-800">Your Cars</h1>
          </div>

  <!-- Content Row -->
  <div class="row">

      
    @forelse($cars as $car) 

<div class="col-lg-6 mb-4">

        <!-- Illustrations -->
        <div class="card shadow mb-4">
          <div class="card-header py-3">
            <h6 class="m-0 font-weight-bold text-primary">{{$car->color}} | {{$car->year}} - {{$car->model}}</h6>
          </div>
          <div class="card-body">
            <div class="text-center">
              <img class="img-fluid px-3 px-sm-4 mt-3 mb-4" style="width: 25rem;" src="img/undraw_posting_photo.svg" alt="">
            </div>
            <p>
               Plate Number: {{$car->plate_number}}
            </p>
            <p>
                Added: {{ timezone()->convertToLocal($car->created_at) }} ({{ $car->created_at->diffForHumans() }})
             </p>

             <form action="{{route('frontend.user.account.settings.car.delete', $car)}}" method="post">
                @csrf
                 @method('DELETE')
                 <button  class="btn btn-danger btn-icon-split">
                    <span class="icon text-white-50">
                      <i class="fas fa-trash"></i>
                    </span>
                    <span class="text">Remove This Car</span>
                  </button>
           
            </form>
            
            
          </div>
        </div>

        <!-- Approach -->
        

      </div>
    @empty 

 <!-- Page Heading -->
 <div class="d-sm-flex align-items-center justify-content-between mb-4" style="margin:0 auto;">
    <h1 class="h3 mb-0 text-gray-800">You Do Not Have Any Cars Saved To Your Account</h1>
  </div>


  <div class="col-lg-12 mb-4">

    <!-- Illustrations -->
    <div class="card shadow mb-4">
      <div class="card-header py-3">
        <h6 class="m-0 font-weight-bold text-primary">Add A Car To Your Account</h6>
      </div>
      <div class="card-body">
        
        {{ html()->modelForm($logged_in_user, 'POST', route('frontend.user.account.settings.car.save'))->class('form-horizontal')->attribute('enctype', 'multipart/form-data')->open() }}
  @method('POST')

 
  <div class="row">
      <div class="col">
          <div class="form-group">
              {{ html()->label(__('validation.attributes.frontend.car_model'))->for('car_model') }}

              {{ html()->text('car_model')
                  ->class('form-control')
                  ->placeholder(__('validation.attributes.frontend.car_model'))
                  ->attribute('maxlength', 191)
                  ->required()
                  ->autofocus() }}
          </div><!--form-group-->
      </div><!--col-->
  </div><!--row-->

  <div class="row">
      <div class="col">
          <div class="form-group">
              {{ html()->label(__('validation.attributes.frontend.car_year'))->for('car_year') }}

              {{ html()->text('car_year')
                  ->class('form-control')
                  ->placeholder(__('validation.attributes.frontend.car_year'))
                  ->attribute('maxlength', 191)
                  ->required() }}
          </div><!--form-group-->
      </div><!--col-->
  </div><!--row-->

  <div class="row">
          <div class="col">
              <div class="form-group">
                  {{ html()->label(__('validation.attributes.frontend.plate_number'))->for('plate_number') }}
  
                  {{ html()->text('plate_number')
                      ->class('form-control')
                      ->placeholder(__('validation.attributes.frontend.plate_number'))
                      ->attribute('maxlength', 191)
                      ->required() }}
              </div><!--form-group-->
          </div><!--col-->
      </div><!--row-->

      <div class="row">
              <div class="col">
                  <div class="form-group">
                      {{ html()->label(__('validation.attributes.frontend.car_color'))->for('car_color') }}
      
                      {{ html()->text('car_color')
                          ->class('form-control')
                          ->placeholder(__('validation.attributes.frontend.car_color'))
                          ->attribute('maxlength', 191)
                          ->required() }}
                  </div><!--form-group-->
              </div><!--col-->
          </div><!--row-->

  <div class="row">
      <div class="col">
          <div class="form-group mb-0 clearfix">
              {{ form_submit(__('labels.general.buttons.update')) }}
              
          </div><!--form-group-->
      </div><!--col-->
  </div><!--row-->
{{ html()->closeModelForm() }}


        
      </div>
    </div>

    <!-- Approach -->
    

  </div>

  





    @endforelse
    
    

    






      











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