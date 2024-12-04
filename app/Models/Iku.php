<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Iku extends Model
{
    use HasFactory;
    protected $table ='sinori_sakip_iku';
    public $timestamps = false;
    protected $primaryKey = 'id';
    protected $fillable = [
        'id_satker','id_periode','id_perubahan','id_filename','id_tglupload'];
}
