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

Route::get('/', 'HomeController@index')->name('home');

Route::name('web::')->middleware(['auth'])->group(function () {
    Route::post('events/add' , 'api\EventController@add')->name('event.add');
    Route::post('events/delete/{event}' , 'api\EventController@delete')->name('my_event.delete');
});
