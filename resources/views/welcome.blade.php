@extends('layouts.app')

@section('content')
<div class="container">
    <h3 class="mt-5">トレーニング 管理システム</h3>
    <form role="form" class="form" method="POST" action="{{ route('web::event.add') }}">
        {{ csrf_field() }}
        <div id="category"></div>
    </form>
</div>
@endsection
