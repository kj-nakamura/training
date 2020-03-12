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

Route::group([
    'middleware' => ['api'],
    'prefix' => 'auth'
], function($router) {
    Route::post('login', 'AuthController@login');
    Route::post('logout', 'AuthController@logout');
    Route::post('refresh', 'AuthController@refresh');
    Route::post('me', 'AuthController@me');
});

Route::group([
    'middleware' => ['api'],
    'namespace' => 'api'
], function() {
    // Post（サンプル）
    Route::get('posts' , 'PostController@index');
    Route::post('add', 'PostController@addPost');
    Route::post('del', 'PostController@deletePost');

    // カテゴリー
    Route::get('categories' , 'CategoryController@index');

    // 種目
    Route::get('events/{id}' , 'EventController@index');
    Route::post('events/add' , 'EventController@addPost');
});
