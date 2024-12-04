<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SakipPenetapan extends Model
{
    use HasFactory;
    protected $table ='sinori_sakip_penetapan';
    protected $primaryKey = 'id';
    protected $fillable = [
        'id_tahun','id_satker','id_bidang','id_saspro','id_indikator','id_target','id_tglpenetapan','id_realisasi_tw1','id_otentikasi_tw1', 'id_realisasi_tw2','id_otentikasi_tw2', 'id_realisasi_tw3','id_otentikasi_tw3', 'id_realisasi_tw4','id_realisasi_tw4', 'id_approved'];



    public function indikator()
    {
        return $this->belongsTo(Indikator::class, 'id_indikator', 'id');
    }
    public function saspro(){
        return $this->belongsTo(Saspro::class, 'id_saspro', 'id');
    }
    public function bidang(){
        return $this->belongsTo(Bidang::class, 'id_bidang', 'id');
    }
}
