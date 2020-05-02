<!doctype html>
<html lang="ja">

<head>
  <!-- Required meta tags -->
  <meta charset="utf-8">
  <meta name="csrf-token" content="{{ csrf_token() }}">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <!-- CSS -->
  <link rel="stylesheet" href="{{ asset('css/app.css') }}">

  <title>react test</title>
</head>

<body>
  <div id="root"></div>
  <script src="{{ asset('js/app.js')}}"></script>
</body>

</html>