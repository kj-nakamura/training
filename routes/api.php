<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::namespace('api')->group(function() {
    Route::middleware('auth:api')->get('/user', function (Request $request) {
        return $request->user();
    });
    
    Route::group(['middleware' => 'guest:api'], function(){
        Route::post('/login', 'ApiController@login');
    });
    
    Route::group(['middleware' => 'auth:api'], function(){
        Route::get('/me', 'ApiController@me');
        Route::post('/logout', 'ApiController@logout');

        // カテゴリー
        Route::get('categories' , 'CategoryController@index');

        // 種目
        Route::get('events/{id}' , 'EventController@index');
    });
});
