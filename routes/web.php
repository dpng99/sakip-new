<?php

use App\Http\Controllers\BirocanaController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\PerencanaanController;
use App\Http\Controllers\IkuController;
use App\Http\Controllers\InputController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\SakipPengukuran;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

/* Route::get('/dashboard', function () {
    
    return Inertia::render('Dashboard');

    
})->middleware(['auth', 'verified'])->name('dashboard'); */

/* Route::get('/dashboard-admin', function () {

    return Inertia::render('DashboardAdmin');
})->middleware(['auth', 'verified'])->name('dashboard-admin'); */

Route::middleware(['auth'])->group(function () {
    Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');
    Route::get('/dashboard-admin', [SakipPengukuran::class, 'index'])->name('dashboard-admin');
    Route::get('/data-dipa', [PerencanaanController::class, 'index'])->name('data-dipa');
    Route::get('/data-iku', [IkuController::class, 'index'])->name('data-iku');
    Route::get('/data-perencanaan', [PerencanaanController::class, 'inputData'])->name('data-perencanaan');
    Route::post('/data-perencanaan', [PerencanaanController::class, 'storeDipa'])->name('data-perencanaan.storeDipa');
    Route::post('/data-perencanaan', [PerencanaanController::class, 'storeIku'])->name('data-perencanaan.storeIku');
    Route::post('/data-perencanaan', [PerencanaanController::class, 'storeLakip'])->name('data-perencanaan.storeLakip');
    Route::post('/data-perencanaan', [PerencanaanController::class, 'storeRenaksi'])->name('data-perencanaan.storeRenaksi');
    Route::post('/data-perencanaan', [PerencanaanController::class, 'storeRenja'])->name('data-perencanaan.storeRenja');
    Route::post('/data-perencanaan', [PerencanaanController::class, 'storeKeputusan'])->name('data-perencanaan.storeKeputusan');
    Route::get('/input-saspro', [BirocanaController::class, 'showInputForm'])->name('saspro.input');
    Route::post('/input-saspro', [BirocanaController::class, 'store'])->name('saspro.store');
}); 



Route::middleware('auth.token')->group(function () {
    Route::get('/protectedoute', function () {
        return response()->json(['message' => 'This is a protected route.']);
    });
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
