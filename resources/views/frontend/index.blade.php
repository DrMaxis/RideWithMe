@extends('frontend.layouts.app')

@section('title', app_name() . ' | ' . __('navs.general.home'))

@section('content')
   


{!! $map['html'] !!}


<input type="text" id="myPlaceTextBox" />


@endsection
