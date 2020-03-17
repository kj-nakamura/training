@extends('web.layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
            <div class="card-header">{{ $user_event->name }}　<span>{{ $user_event->event_at }}</span></div>
                <div class="card-body">
                  <form role="form" class="form" method="POST" action="{{ route('web::weight_count.add', $user_event) }}">
                    {{ csrf_field() }}
                  <input type="number" name="weight" min="1" value="{{ $user_event->weight_counts->max('weight')}}" required>kg
                  <input type="number" name="count" min="1" value="10" required>回
                    <button type="submit" class="btn btn-primary text-right">Add</button>
                  </form>
                  <ul>
                    @foreach($user_event->weight_counts as $weight_count)
                  <li>{{ $loop->index + 1 }}：{{ $weight_count->weight   }}kg ☓ {{ $weight_count->count }}回</li>
                    @endforeach
                  </ul>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
