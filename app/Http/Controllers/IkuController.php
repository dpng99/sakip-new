<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
class IkuController extends Controller
{
    public function index()
{
    $user = Auth::user();
    $id_satkers = $user->id_satker;

    $data = User::with('getIku')
                ->where('id_satker', $id_satkers)
                ->get();

    $data_store = $data->flatMap(function ($user) {
        // Loop over each Iku instance related to the user
        return $user->getIku->map(function ($iku) use ($user) {
            return [
                'id_satker' => $user->id_satker,
                'id_periode' => $iku->id_periode,
                'id_perubahan' => $iku->id_perubahan,
                'id_filename' => $iku->id_filename,
                'tgl_upload' => $iku->id_tglupload,
            ];
        });
    });

    return Inertia::render('Iku', [
        'iku' => $data_store
    ]);
}
}
