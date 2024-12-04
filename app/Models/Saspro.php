<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Saspro extends Model
{
    use HasFactory;

    protected $table = 'sinori_sakip_saspro';
    protected $primaryKey = 'id';
    protected $fillable = ['link', 'id_tahun', 'saspro_nama', 'saspro_penjelasan', 'lingkup', 'saspro_new'];
}
