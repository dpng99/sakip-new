<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Formulasi extends Model
{
    use HasFactory;
    protected $table ='sinori_sakip_formulasi';
    protected $primaryKey = 'id';
    protected $fillable = ['id_indikator', 'id_saspro', 'nama_kegiatan'
        ];
}
