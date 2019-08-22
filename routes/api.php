<?php

use Illuminate\Http\Request;

Route::group(['prefix' => '/auth', ['middleware' => 'throttle:20,5']], function (){
    Route::post('/register', 'Auth\RegisterController@register');
    Route::post('/login', 'Auth\LoginController@login');
 });

Route::group(['prefix' => 'user'], function ($route) {
    $route->get('/', 'UserController@index');
});
// Need Auth
Route::group(['middleware' => 'auth:api'], function (){
    Route::group(['prefix' => 'post'], function ($route) {
        $route->get('/', 'PostController@list');
        $route->post('/create', 'PostController@create');
        $route->delete('/delete/{id}', 'PostController@delete');
    });
});
