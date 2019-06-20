@extends('frontend.layouts.app')

@section('title', app_name() . ' | ' . __('labels.frontend.contact.box_title'))

@section('xcss')
    {{ style(mix('css/frontend_a.css')) }}
@endsection

@section('content')

<section>
        <div class="container">
            <div class="row">
                
                <div class="col-md-12 col-md-offset-1">
                    <div class="contact-page__form">
                        <div class="title" style="text-align:center">
                            <span>We would like to know you</span>
                            <h2>CONTACT US</h2>
                        </div>
                        <div class="descriptions">
                            <p>Submit a contact request to recieve help and support</p>
                        </div>
                        {{ html()->form('POST', route('frontend.contact.send'))->open() }}
                    <div class="row">
                        <div class="col">
                            <div class="form-group">
                                {{ html()->label(__('validation.attributes.frontend.name'))->for('name') }}

                                {{ html()->text('name', optional(auth()->user())->name)
                                        ->class('form-control')
                                        ->placeholder(__('validation.attributes.frontend.name'))
                                        ->attribute('maxlength', 191)
                                        ->required()
                                        ->autofocus() }}
                            </div>
                            <!--form-group-->
                        </div>
                        <!--col-->
                    </div>
                    <!--row-->

                    <div class="row">
                        <div class="col">
                            <div class="form-group">
                                {{ html()->label(__('validation.attributes.frontend.email'))->for('email') }}

                                {{ html()->email('email', optional(auth()->user())->email)
                                        ->class('form-control')
                                        ->placeholder(__('validation.attributes.frontend.email'))
                                        ->attribute('maxlength', 191)
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
                                {{ html()->label(__('validation.attributes.frontend.message'))->for('message') }}

                                {{ html()->textarea('message')
                                        ->class('form-control')
                                        ->placeholder(__('validation.attributes.frontend.message'))
                                        ->attribute('rows', 3)
                                        ->required() }}
                            </div>
                            <!--form-group-->
                        </div>
                        <!--col-->
                    </div>
                    <!--row-->

                    @if(config('access.captcha.contact'))
                    <div class="row">
                        <div class="col">
                            @captcha
                            {{ html()->hidden('captcha_status', 'true') }}
                        </div>
                        <!--col-->
                    </div>
                    <!--row-->
                    @endif

                    <div class="row">
                        <div class="col">
                            <div class="form-group mb-0 clearfix">
                                {{ form_submit(__('labels.frontend.contact.button')) }}
                            </div>
                            <!--form-group-->
                        </div>
                        <!--col-->
                    </div>
                    <!--row-->
                    {{ html()->form()->close() }}
                    </div>
                </div>
            </div>
        </div>
    </section>




@endsection

@section('xjs')
<!-- Scripts -->
@stack('before-scripts')
{!! script(mix('js/manifest.js')) !!}
{!! script(mix('js/frontend_a.js')) !!} 
@push('after-scripts')
@if(config('access.captcha.contact'))
@captchaScripts
@endif
@endpush

@stack('after-scripts') 
@include('frontend.includes.partials.scripts.verification.phoneNumberInputValidation')








@endsection