@extends('layouts.app')

@section('content')
<div class="container">
  <div>
    <h3 class="mt-5">トレーニング 管理</h3>
    <form role="form" class="form" method="POST" action="{{ route('web::event.add') }}">
        {{ csrf_field() }}
        <div id="category"></div>
        <button type="submit" class="btn btn-danger text-right">Send</button>
    </form>
  </div>
    <div>
        <h3 class="mt-5">今日やった種目一覧</h3>
        <ul>
        @foreach($events as $event)
            <li>{{ $event->name }}<button type="submit" class="btn btn-secondary">削除</button></li>
        @endforeach
        </ul>
    </div>
</div>
@endsection
