<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
use Inertia\Inertia;
class SakipPengukuran extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {   
        $user = Auth::user();
        $id_kejati = $user->id_kejati;
        $satkers = User::with([
            'keputusan',
            'renstra',
            'renja',
            'penetapan',
            'iku',
            'dipa',
            'renaksi',
            'lakip'
        ])->where('id_kejati', $id_kejati)
        ->whereHas('penetapan', function($query) {
            $query->where('id_hide', '!=', '1'); // Condition on the related penetapan model
        }) // Menambahkan kondisi untuk id_kejati
          ->get();

        // Menyusun data dengan status capaian kinerja
        $data = $satkers->map(function($satker) {
            $status_capaian_kinerja = 'Belum diapprove PK';
            
            if ($satker->penetapan && $satker->penetapan->id_approved != "0") {
                if ($satker->penetapan->id_otentikasi_tw4 != '0') {
                    $status_capaian_kinerja = 'Sudah otentikasi sampai TW4';
                } elseif ($satker->penetapan->id_otentikasi_tw3 != '0') {
                    $status_capaian_kinerja = 'Sudah otentikasi sampai TW3';
                } elseif ($satker->penetapan->id_otentikasi_tw2 != '0') {
                    $status_capaian_kinerja = 'Sudah otentikasi sampai TW2';
                } elseif ($satker->penetapan->id_otentikasi_tw1 != '0') {
                    $status_capaian_kinerja = 'Sudah otentikasi sampai TW1';
                } else {
                    $status_capaian_kinerja = 'PK sudah diapprove';
                }
            }

            return [
                'id_satker' => $satker->id_satker,
                'satkernama' => $satker->satkernama,
                'id_approved' => optional($satker->penetapan)->id_approved,
                'id_otentikasi_tw1' => optional($satker->penetapan)->id_otentikasi_tw1,
                'id_otentikasi_tw2' => optional($satker->penetapan)->id_otentikasi_tw2,
                'id_otentikasi_tw3' => optional($satker->penetapan)->id_otentikasi_tw3,
                'id_otentikasi_tw4' => optional($satker->penetapan)->id_otentikasi_tw4,
                'kep_filesurat' => optional($satker->keputusan)->id_filesurat,
                'renstra_satker' => optional($satker->renstra)->id_satker,
                'renja_satker' => optional($satker->renja)->id_satker,
                'pk_satker' => optional($satker->penetapan)->id_satker,
                'iku_satker' => optional($satker->iku)->id_satker,
                'dipa_satker' => optional($satker->dipa)->id_satker,
                'renaksi_satker' => optional($satker->renaksi)->id_satker,
                'lkjip_satker' => optional($satker->lakip)->id_satker,
                'status_capaian_kinerja' => $status_capaian_kinerja,
            ];
        });


        
        return Inertia::render('DashboardAdmin', [
            'dataKejari' => $data,
        ]);
        
      
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
