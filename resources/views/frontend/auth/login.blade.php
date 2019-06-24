@extends('frontend.layouts.app')

@section('title', app_name() . ' | ' . __('labels.frontend.auth.login_box_title'))


@section('xcss')
    {{ style(mix('css/frontend_a.css')) }}
@endsection



@section('content')

<div class="login-content-container">
    <section class="awe-parallax login-page-demo">
                <div class="awe-overlay"></div>
                <div class="container">
                    <div class="login-register-page__content" style="max-width: 400px">
                        <div class="content-title">
                            <span>Welcome back</span>
                        </div>
                        {{ html()->form('POST', route('frontend.auth.login.post'))->open() }}
                        <div class="row">
                            <div class="col">
                                <div class="form-group">
                                    {{ html()->label(__('validation.attributes.frontend.phone_number'))->for('phone_number') }}

                                    {{ html()->text('phone_number')
                                        ->class('form-control')
                                        ->placeholder(__('validation.attributes.frontend.phone_number'))
                                        ->attribute('maxlength', 191)
                                        ->required() }}
                                        <span id="valid-msg" class="hide">✓ Valid</span>
                                        <span id="error-msg" class="hide"></span>
                                </div>
                                <!--form-group-->
                            </div>
                            <!--col-->
                        </div>
                        <!--row-->

                        <div class="row">
                            <div class="col">
                                <div class="form-group">
                                    {{ html()->label(__('validation.attributes.frontend.password'))->for('password') }}

                                    {{ html()->password('password')
                                        ->class('form-control')
                                        ->placeholder(__('validation.attributes.frontend.password'))
                                        ->required() }}
                                </div>
                                <!--form-group-->
                            </div>
                            <!--col-->
                        </div>
                        <!--row-->

                        <div class="row">
                            <div class="col">
                                <div class="form-group">
                                    <div class="checkbox">
                                        {{ html()->label(html()->checkbox('remember', true, 1) . ' ' . __('labels.frontend.auth.remember_me'))->for('remember') }}
                                    </div>
                                </div>
                                <!--form-group-->
                            </div>
                            <!--col-->
                        </div>
                        <!--row-->

                        <div class="row" style="text-align:center">
                            <div class="col">
                                <div class="form-group clearfix">
                                    {{ form_submit(__('labels.frontend.auth.login_button')) }}
                                </div>
                                <!--form-group-->
                            </div>
                            <!--col-->
                        </div>
                        <!--row-->

                        <div class="row">
                            <div class="col">
                                <div class="form-group text-right">
                                    <a
                                        href="{{ route('frontend.auth.password.reset') }}">@lang('labels.frontend.passwords.forgot_password')</a>
                                </div>
                                <!--form-group-->
                            </div>
                            <!--col-->
                        </div>
                        <!--row-->
                        {{ html()->form()->close() }}

                        <div class="login-register-link">
                            Dont have account yet? <a href="{{route('frontend.auth.register')}}">Register Here</a>
                        </div>
                        <div class="row">
                            <div class="col">
                                <div class="text-center">
                                    {!! $socialiteLinks !!}
                                </div>
                            </div>
                            <!--col-->
                        </div>
                        <!--row-->
                    </div>
                </div>
            </section>

</div>

            


            
     
@endsection




@section('xjs')

<!-- Scripts -->
@stack('before-scripts')
{!! script(mix('js/manifest.js')) !!}
{!! script(mix('js/frontend_a.js')) !!} 
   




@stack('after-scripts') 
@include('frontend.includes.partials.scripts.verification.phoneNumberInputValidation')



@endsection