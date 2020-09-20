<?php

use Illuminate\Http\Request;
// use Illuminate\Support\Facades\Route;

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

/*Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});*/


Route::get('books', 'Api\BooksController@index');

Route::get('products', 'Api\ProductsController@index');

Route::get('products/show/{id}', 'Api\ProductsController@show');
Route::post('products/delete/{id}', 'Api\ProductsController@delete');
Route::post('products/update/{id}', 'Api\ProductsController@update');
Route::post('products/create', 'Api\ProductsController@create');

Route::get('products/edit/{id}', 'Api\ProductsController@edit');
Route::post('products/genre/{genre}', 'Api\ProductsController@genre');

Route::get('genres', 'Api\GenresController@index');
Route::post('genres/update/{id}', 'Api\GenresController@update');
Route::post('genres/delete/{id}', 'Api\GenresController@delete');
Route::post('genres/create', 'Api\GenresController@create');
