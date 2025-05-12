<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class UserController extends Controller
{
    public function index()
    {
        $users = User::all();
        return Inertia::render('Dashboard', ['users' => $users]);
    }

    public function create()
    {
        return Inertia::render('CreateUser');
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|unique:users,email|max:255',
            'phone' => 'nullable|string',
            'birthdate' => 'nullable|date',
            'password' => 'required|string|min:8|confirmed',
        ]);

        User::create([
            ...$data,
            'password' => bcrypt($data['password']),
        ]);

        return redirect()->route('users.index')->with('success', 'User created.');
    }

    public function show(User $user)
    {
        return Inertia::render('ShowUser', ['user' => $user]);
    }

    public function edit(User $user)
    {
        return Inertia::render('EditUser', ['user' => $user]);
    }

    public function update(Request $request, User $user)
    {
        $data = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255|unique:users,email,' . $user->id,
            'phone' => 'nullable|string',
            'birthdate' => 'nullable|date',
        ]);

        $user->update($data);
        return redirect()->route('users.index')->with('success', 'User updated.');
    }

    public function destroy(User $user)
    {
        $user->delete();
        return back()->with('success', 'User deleted.');
    }
}
