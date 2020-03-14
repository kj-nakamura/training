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

Route::namespace('web')->group(function () {
Route::get('/', 'HomeController@index')->name('home');

    Route::name('web::')->middleware(['auth'])->group(function () {
        Route::post('events/add' , 'EventController@add')->name('event.add');
        Route::post('events/delete/{event}/{event_at}' , 'EventController@delete')->name('my_event.delete');
    });
});
