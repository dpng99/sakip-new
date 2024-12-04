<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Saspro;
use Illuminate\Http\Request;
use Inertia\Inertia;

class BirocanaController extends Controller
{
    // Display the InputSaspro page
    public function showInputForm()
    {
        return Inertia::render('InputSaspro');
    }

    // Handle form submission
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'link' => 'required|string|max:5',
            'id_tahun' => 'required|string|max:5',
            'saspro_nama' => 'required|string',
            'saspro_penjelasan' => 'nullable|string',
            'lingkup' => 'required|string|max:5',
            'saspro_new' => 'nullable|integer',
        ]);

        // Create a new Saspro record
        Saspro::create($validatedData);

        return redirect()->back()->with('message', 'Saspro created successfully');
    }
}
