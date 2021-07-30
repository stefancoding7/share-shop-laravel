<?php
use App\Http\Controllers\ShopListController;
use App\Http\Controllers\ItemController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

Route::get('/shoplist', [ShopListController::class, 'index']);

Route::get('/items/{id}', [ItemController::class, 'show']);

Route::post('/shoplist', [ShopListController::class, 'store']);

