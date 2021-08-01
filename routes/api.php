<?php
use App\Http\Controllers\ShopListController;
use App\Http\Controllers\ItemController;
use App\Http\Controllers\AuthController;
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

Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);

Route::group(['middleware' => ['auth:sanctum']], function () {
   
});

Route::get('/shoplist', [ShopListController::class, 'index']);
Route::get('/items/{id}', [ItemController::class, 'show']);
Route::delete('/itemdelete/{id}', [ItemController::class, 'destroy']);
Route::put('/itemcomplete/{id}', [ItemController::class, 'update']);
Route::post('/shoplist', [ShopListController::class, 'store']);
Route::delete('/shoplistdelete/{id}', [ShopListController::class, 'destroy']);

Route::post('/logout', [AuthController::class, 'logout']);




