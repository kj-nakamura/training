@extends('layouts.app')

@section('content')
<div class="container">
  <div>
    <h3 class="mt-5">トレーニング 管理</h3>
    <form role="form" class="form" method="POST" action="{{ route('web::event.add') }}">
      {{ csrf_field() }}
      <div class="row">
        <div class="form-group">
          <input type="date" value="{{ now()->format('Y-m-d') }}" class="form-control" name="event_at" />
        </div>
      </div>
      <div id="form"></div>
      <button type="submit" class="btn btn-primary text-right">Send</button>
    </form>
  </div>
  <div>
      <h3 class="mt-5">今日やった種目一覧</h3>
      <ul>
        @foreach($events as $event)
          <li>
            {{ $event->name }}
            {{ $event->event_at }}
            <button type="button"
                    class="btn btn-danger btn-xs"
                    data-toggle="modal"
                    data-target="#modal_delete"
                    data-title="種目 :  {{ $event->name }}"
                    data-event_url="{{ route('web::my_event.delete', $event) }}">
              削除
            </button>
          </li>
        @endforeach
      </ul>
  </div>
</div>

  {{-- 削除 モーダル --}}
  <div class="modal" tabindex="-1" role="dialog" id="modal_delete">
    <form role="form" class="form-inline" method="POST" action="">
      {{ csrf_field() }}
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <h4 class="modal-title">削除しますか？</h4>
          </div>
          <div class="modal-body">
            <p></p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default pull-left" data-dismiss="modal">キャンセル</button>
            <button type="submit" class="btn btn-danger">削除</button>
          </div>
        </div>
      </div>
    </form>
  </div>
@endsection

@section('page_assets_end_body_tag')
  <script>
    $('.datepicker').datepicker({
      language: 'ja',
      autoclose: true,
      format: 'yyyy-mm-dd'
    });
  </script>
  <script>
    $('#modal_delete').on('shown.bs.modal', function (event) {
      var button = $(event.relatedTarget);
      var title = button.data('title');
      var url = button.data('event_url');
      var modal = $(this);
      modal.find('.modal-body p').eq(0).text(title);
      modal.find('form').attr('action',url);
    });
  </script>
@endsection
