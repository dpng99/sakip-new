<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ListData extends Model
{
    use HasFactory;

    protected $table ='sinori_sakip_penetapan';
    protected $primarykey = 'id';
    protected $fillable = [
       'id_tahun','id_satker','id_bidang','id_saspro','id_indikator','id_tipe','id_target','id_tglpenetapan','id_realisasi_tw1','id_narasi_tw1','id_narasi_tw1_2','id_narasi_tw1_3','id_otentikasi_tw1','id_komentar_tw1','id_realisasi_tw2','id_narasi_tw2','id_narasi_tw2_2','id_narasi_tw2_3','id_otentikasi_tw2','id_komentar_tw2','id_realisasi_tw3','id_narasi_tw3','id_narasi_tw3_2','id_narasi_tw3_3','id_otentikasi_tw3','id_komentar_tw3','id_realisasi_tw4','id_narasi_tw4','id_narasi_tw4_2','id_narasi_tw4_3','id_otentikasi_tw4','id_komentar_tw4','id_koreksi','id_validasi','id_komentar','id_approved','id_hide'

    ];


}