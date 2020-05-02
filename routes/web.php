<?php

Route::name('web::')->namespace('web')->group(function () {
    // Auth::routes();

    Route::get('/', 'HomeController@index')->name('home');

    // Route::middleware(['auth'])->group(function () {
    //     Route::get('events/{user_event}' , 'UserEventController@show')->name('event.show');
    //     Route::post('events/add' , 'UserEventController@add')->name('event.add');
    //     Route::post('events/delete/{user_event}' , 'UserEventController@delete')->name('my_event.delete');
    //     Route::post('weight_count/{user_event}/add' , 'UserEventController@addWeightCount')->name('weight_count.add');
    // });
});
