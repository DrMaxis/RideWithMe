@extends('frontend.layouts.app')

@section('title', app_name() . ' | ' . __('labels.frontend.passwords.reset_password_box_title'))


@section('xcss')
    {{ style(mix('css/frontend_a.css')) }}
@endsection




@section('content')

<div class="forgot-password-content-container">
        <section class="awe-parallax login-page-demo">
                    <div class="awe-overlay"></div>
                    <div class="container">
                        <div class="login-register-page__content" style="max-width: 400px">
                            
                            
                            @if(session('status'))
                            <div class="alert alert-success">
                                {{ session('status') }}
                            </div>
                        @endif
    
                        {{ html()->form('POST', route('frontend.auth.password.email.post'))->open() }}
                        <div class="content-title" style="margin-bottom: 1.5rem;">
                                <span>Forgot your Password?</span>
                                
                            </div>
                            <div class="row">
                                <div class="col">
                                    <div class="form-group">
                                        {{ html()->label(__('validation.attributes.frontend.email'))->for('email') }}
    
                                        {{ html()->email('email')
                                            ->class('form-control')
                                            ->placeholder(__('validation.attributes.frontend.email'))
                                            ->attribute('maxlength', 191)
                                            ->required()
                                            ->autofocus() }}
                                    </div><!--form-group-->
                                </div><!--col-->
                            </div><!--row-->
    
                            <div class="row">
                                <div class="col">
                                    <div class="form-group mb-0 clearfix">
                                        {{ form_submit(__('labels.frontend.passwords.send_password_reset_link_button')) }}
                                    </div><!--form-group-->
                                </div><!--col-->
                            </div><!--row-->
                        {{ html()->form()->close() }}
                        </div>
                    </div>
                </section>
    
    </div>

   
@endsection
@push('after-scripts')

@section('xjs')

<!-- Scripts -->
@stack('before-scripts')
{!! script(mix('js/manifest.js')) !!}
{!! script(mix('js/frontend_a.js')) !!} 
   



<script type="text/javascript" src="{{asset('js/base/plugins.js')}}"> </script>
@stack('after-scripts') 
@include('frontend.includes.partials.scripts.verification.phoneNumberInputValidation')



@endsection
