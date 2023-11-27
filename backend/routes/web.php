<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProdutosController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/




Route::get('/produtos', [ProdutosController::class, 'index']);
Route::post('/produtos', [ProdutosController::class, 'store']);
Route::get('/produtos/{id}', [ProdutosController::class, 'show']);
Route::put('/produtos/{id}', [ProdutosController::class, 'update']);
Route::delete('/produtos/{id}',[ ProdutosController::class, 'destroy']);

Route::get('/', function () {
    return view('welcome');
});
