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

Route::group(['middleware' => ['api']], function() {
    // Post（サンプル）
    Route::get('posts' , 'api\PostController@index');
    Route::post('add', 'api\PostController@addPost');
    Route::post('del', 'api\PostController@deletePost');

    // カテゴリー
    Route::get('categories' , 'api\CategoryController@index');

    // 種目
    Route::get('events/{id}' , 'api\EventController@index');
});
