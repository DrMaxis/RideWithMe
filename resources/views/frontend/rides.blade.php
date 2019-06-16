@extends('frontend.layouts.app')

@section('title', app_name() . ' | ' . __('navs.general.home'))

@section('prescripts')@endsection

@section('xcss')@endsection

@section('content')


@include('frontend.partials.rides.breadcrumb')
@include('frontend.partials.rides.list')



@endsection


@section('xjs')










    @endsection