<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\SakipPenetapan;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
class DashboardController extends Controller
{
    public function index(){
        $user = Auth::user();
        $id_satkers = $user->id_satker;
        $data = SakipPenetapan::with([
            'saspro',
            'indikator',
            'bidang'
        ])->where('id_satker', $id_satkers)
        ->where('id_hide', '!=', '1')
        ->get();
        $store = $data->map(function($capaian){
            return[
                'nama_bidang'=> $capaian->bidang->bidang_nama,
                'nama_saspro'=>$capaian->saspro->saspro_nama,
                'indikator'=>$capaian->indikator->indikator_nama,
                'target'=>$capaian->id_target,
                'realisasi_tw1'=>$capaian->id_realisasi_tw1,
                'realisasi_tw2'=>$capaian->id_realisasi_tw2,
                'realisasi_tw3'=>$capaian->id_realisasi_tw3,
                'realisasi_tw4'=>$capaian->id_realisasi_tw4,            ];
        });
        return Inertia::render('Dashboard', [
            'dataCapaian' => $store // Pass the mapped data
        ]);
        
    }
}
