<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Dipa;
use App\Models\Iku;
use App\Models\Keputusan;
use App\Models\Lakip;
use App\Models\Renaksi;
use App\Models\Renja;

class PerencanaanController extends Controller
{
    public function inputData (){
       return Inertia::render('Perencanaan');
    }
    public function index()
    {
        $user = Auth::user();
        $id_satkers = $user->id_satker;
    
        $data = User::with('getDipa')
                    ->where('id_satker', $id_satkers)
                    ->get();
    
        $data_store = $data->flatMap(function ($user) {
            // Loop over each Dipa instance related to the user
            return $user->getDipa->map(function ($dipa) use ($user) {
                return [
                    'id_satker' => $user->id_satker,
                    'id_periode' => $dipa->id_periode,
                    'id_perubahan' => $dipa->id_perubahan,
                    'id_filename' => $dipa->id_filename,
                    'id_pagu' => $dipa->id_pagu,
                    'id_gakyankum' => $dipa->id_gakyankum,
                    'id_dukman' => $dipa->id_dukman,
                    'id_tglupload' => $dipa->id_tglupload,
                ];
            });
        });
    
        return Inertia::render('Dipa', [
            'dipa' => $data_store
        ]);
    }
    
    public function create()
    {
        
    }

    public function storeDipa(Request $request)
    {   $user = Auth::user();

        $request->validate([
            'dipa_file' => 'required|mimes:pdf|max:2048',
        ]);
        $id_pagu = $request->input('id_pagu');
        $id_gakyankum = $request->input('id_gakyankum');
        $id_dukman = $request->input('id_dukman');
        $id_periode = $request->input('id_periode');
        
        $id_satkers = $user->id_satker;
        $latestdipa =  Dipa::where('id_satker', $id_satkers)
        ->where('id_periode', $id_periode)
        ->first();

        $id_perubahan = $latestdipa ? $latestdipa->id_perbubahan + 1 : 0;

        $file = $request->file('dipa_file');
        $fileName = 'dipa_'.$id_perubahan.'_'.$id_satkers.'_'.$id_periode.'.pdf';
        $file->move(public_path('uploads/'.$id_satkers.'/dipa'), $fileName);

        Dipa::create([
            'id_satker' => $id_satkers,
            'id_periode' => $id_periode,
            'id_perubahan' => $id_perubahan,
            'id_filename' => $fileName,
            'id_pagu' => $id_pagu,
            'id_gakyankum' => $id_gakyankum,
            'id_dukman' => $id_dukman,
            'id_tglupload' => now()->format('d/m/Y h:i A'),
        ]);
        return redirect()->route('data-perencanaan')->with('success', 'File dipa berhasil diupload.')->with('active_tab', 'dipa');
    }
    public function storeIku(Request $request)
    {   $user = Auth::user();
        $request->validate([
            'iku_file' => 'required|mimes:pdf|max:2048',
        ]);
        $id_periode = $request->input('id_periode');
        $id_satkers = $user->id_satker;
        $latestdipa =  Iku::where('id_satker', $id_satkers)
        ->where('id_periode', $id_periode)
        ->first();

        $id_perubahan = $latestdipa ? $latestdipa->id_perbubahan + 1 : 0;

        $file = $request->file('iku_file');
        $fileName = 'iku_'.$id_perubahan.'_'.$id_satkers.'_'.$id_periode.'.pdf';
        $file->move(public_path('uploads/'.$id_satkers.'/iku'), $fileName);

        Iku::create([
            'id_satker' => $id_satkers,
            'id_periode' => $id_periode,
            'id_perubahan' => $id_perubahan,
            'id_filename' => $fileName,
            'id_tglupload' => now()->format('d/m/Y h:i A'),
        ]);
        return redirect()->route('data-perencanaan')->with('success', 'File dipa berhasil diupload.')->with('active_tab', 'Perencanaan');
    } 
    public function storeLakip(Request $request)
    {   $user = Auth::user();
        $request->validate([
            'lakip_file' => 'required|mimes:pdf|max:2048',
        ]);
        $id_periode = $request->input('id_periode');
        $id_satkers = $user->id_satker;
        $latestdipa =  Lakip::where('id_satker', $id_satkers)
        ->where('id_periode', $id_periode)
        ->first();

        $id_perubahan = $latestdipa ? $latestdipa->id_perbubahan + 1 : 0;

        $file = $request->file('lakip_file');
        $fileName = 'lakip_'.$id_perubahan.'_'.$id_satkers.'_'.$id_periode.'.pdf';
        $file->move(public_path('uploads/'.$id_satkers.'/lakip'), $fileName);

        Lakip::create([
            'id_satker' => $id_satkers,
            'id_periode' => $id_periode,
            'id_perubahan' => $id_perubahan,
            'id_filename' => $fileName,
            'id_tglupload' => now()->format('d/m/Y h:i A'),
        ]);
        return redirect()->route('data-perencanaan')->with('success', 'File dipa berhasil diupload.')->with('active_tab', 'Perencanaan');
    }    
    public function storeRenaksi(Request $request)
    {   $user = Auth::user();
        $request->validate([
            'renaksi_file' => 'required|mimes:pdf|max:2048',
        ]);
        $id_periode = $request->input('id_periode');
        $id_satkers = $user->id_satker;
        $latestdipa =  Renaksi::where('id_satker', $id_satkers)
        ->where('id_periode', $id_periode)
        ->first();

        $id_perubahan = $latestdipa ? $latestdipa->id_perbubahan + 1 : 0;

        $file = $request->file('lakip_file');
        $fileName = 'renaksi_'.$id_perubahan.'_'.$id_satkers.'_'.$id_periode.'.pdf';
        $file->move(public_path('uploads/'.$id_satkers.'/renaksi'), $fileName);

        Renaksi::create([
            'id_satker' => $id_satkers,
            'id_periode' => $id_periode,
            'id_perubahan' => $id_perubahan,
            'id_filename' => $fileName,
            'id_tglupload' => now()->format('d/m/Y h:i A'),
        ]);
        return redirect()->route('data-perencanaan')->with('success', 'File dipa berhasil diupload.')->with('active_tab', 'Perencanaan');
    }
    
    public function storeRenja(Request $request)
    {   $user = Auth::user();
        $request->validate([
            'renja_file' => 'required|mimes:pdf|max:2048',
        ]);
        $id_periode = $request->input('id_periode');
        $id_satkers = $user->id_satker;
        $latestdipa =  Renja::where('id_satker', $id_satkers)
        ->where('id_periode', $id_periode)
        ->first();

        $id_perubahan = $latestdipa ? $latestdipa->id_perbubahan + 1 : 0;

        $file = $request->file('lakip_file');
        $fileName = 'renja_'.$id_perubahan.'_'.$id_satkers.'_'.$id_periode.'.pdf';
        $file->move(public_path('uploads/'.$id_satkers.'/renja'), $fileName);

        Renja::create([
            'id_satker' => $id_satkers,
            'id_periode' => $id_periode,
            'id_perubahan' => $id_perubahan,
            'id_filename' => $fileName,
            'id_tglupload' => now()->format('d/m/Y h:i A'),
        ]);
        return redirect()->route('data-perencanaan')->with('success', 'File dipa berhasil diupload.')->with('active_tab', 'Perencanaan');
    }public function storeKeputusan(Request $request)
    {   $user = Auth::user();
        $request->validate([
            'keputusan_file' => 'required|mimes:pdf|max:2048',
        ]);
        $id_periode = $request->input('id_periode');
        $id_satkers = $user->id_satker;
        $latestdipa =  Keputusan::where('id_satker', $id_satkers)
        ->where('id_periode', $id_periode)
        ->first();

        $id_perubahan = $latestdipa ? $latestdipa->id_perbubahan + 1 : 0;

        $file = $request->file('lakip_file');
        $fileName = 'lakip_'.$id_perubahan.'_'.$id_satkers.'_'.$id_periode.'.pdf';
        $file->move(public_path('uploads/'.$id_satkers.'/lakip'), $fileName);

        Keputusan::create([
            'id_satker' => $id_satkers,
            'id_periode' => $id_periode,
            'id_perubahan' => $id_perubahan,
            'id_filename' => $fileName,
            'id_tglupload' => now()->format('d/m/Y h:i A'),
        ]);
        return redirect()->route('data-perencanaan')->with('success', 'File dipa berhasil diupload.')->with('active_tab', 'Perencanaan');
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
