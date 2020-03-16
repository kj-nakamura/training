<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Auth::routes();

Route::name('web::')->namespace('web')->group(function () {
Route::get('/', 'HomeController@index')->name('home');

    Route::middleware(['auth'])->group(function () {
        Route::get('events/{user_event}' , 'UserEventController@show')->name('event.show');
        Route::post('events/add' , 'UserEventController@add')->name('event.add');
        Route::post('events/delete/{user_event}' , 'UserEventController@delete')->name('my_event.delete');
    });
});
