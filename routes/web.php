<?php

use App\Models\User;
use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use Illuminate\Http\Request;
use App\Http\Controllers\ProfileController;

Route::get('/', function () {
    return redirect()->route('login');
});


Route::get('/dashboard', function () {
    $users = User::all();
    return Inertia::render('Dashboard', [
        'users' => $users,
    ]);
})->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/users/{user}/edit', function (User $user) {
    return Inertia::render('EditUser', ['user' => $user]);
})->middleware('auth');

Route::put('/users/{user}', function (Request $request, User $user) {
    $data = $request->validate([
        'name' => 'required|string|max:255',
        'email' => 'required|email|max:255',
        'phone' => 'nullable|string',
        'birthdate' => 'nullable|date',
    ]);

    $user->update($data);
    return redirect()->route('dashboard')->with('success', 'User updated.');
})->middleware('auth');

Route::delete('/users/{user}', function (User $user) {
    $user->delete();
    return back()->with('success', 'User deleted.');
})->middleware('auth');

Route::put('/users/{user}', function (Request $request, User $user) {
    $data = $request->validate([
        'name' => 'required|string|max:255',
        'email' => 'required|email|max:255',
        'phone' => 'nullable|string',
        'birthdate' => 'nullable|date',
    ]);

    $user->update($data);
    return redirect()->route('dashboard')->with('success', 'User updated.');
})->middleware('auth');

Route::delete('/users/{user}', function (User $user) {
    $user->delete();
    return back()->with('success', 'User deleted.');
})->middleware('auth');


Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
