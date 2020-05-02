<?php

Route::get('/{any}', function () {
    return view('web.index');
})->where('any', '.*');
