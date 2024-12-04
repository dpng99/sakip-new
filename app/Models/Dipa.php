<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Dipa extends Model
{
    use HasFactory;
    protected $table ='sinori_sakip_dipa';
    public $timestamps = false;
    protected $primaryKey = 'id';
    protected $fillable = [
        'id_satker','id_periode','id_perubahan','id_filename','id_pagu', 'id_gakyankum', 'id_dukman','id_tglupload'];
}
