@extends('frontend.layouts.app')

@section('title', app_name() . ' | ' . __('navs.general.home'))

@section('prescripts')@endsection

@section('xcss')@endsection

@section('content')


@include('frontend.partials.rides.breadcrumb')
@include('frontend.partials.rides.list')



@endsection


@section('xjs')



{{-- 
<script>


(function () {
  /* submit form */
				
$('.passenger_join').click(function(event) {
				event.preventDefault();

var confirmation = window.confirm('By Submitting this ride request you agree to our terms and conditions and ride policies');

if(confirmation) {
var slug = $('.passenger_join').attr('data-ride');
var token = '{{Session::token()}}';
var submitUrl = $('.passenger_join').attr('data-URL');


				
				console.log('show loader here');
				$('.transaction-loader').removeClass('off');
				$('.cblock').remove();
			
	$.ajax({
					method: 'POST',
					url: submitUrl,
					data: {
								slug: slug, 
								_token: token
						},

	success: function(e) {
	
		$.notify({
        wrapper: 'body',
        message: 'Your request submitted successfuly!',
        type: 'success',
        position: 8,
        dir: 'ltr',
        autoClose: true,
        duration: 4000,
        onOpen: null,
        onClose: null
		});
				}
						})

		.fail(function(jqXHR, textStatus, errorThrown) { 

							alert( jqXHR + errorThrown + textStatus);
							window.location.reload(false); 
							
					}) 
			.done(function(w) { 

								$('.transaction-loader').addClass('off');
						 
						});
} else {
	
}		
				});
})();


</script> --}}










    @endsection