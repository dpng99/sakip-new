<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Bidang extends Model
{
    use HasFactory;
    protected $table ='sinori_sakip_bidang';
    protected $primarykey = 'id';
    protected $fillable = ['bidang_nama', 'bidang_level', 'bidang_lokasi', 'rumpun', ''];

}
