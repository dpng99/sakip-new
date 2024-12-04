<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Keputusan extends Model
{
    use HasFactory;
    protected $table ='sinori_sakip_keputusan';
    protected $primaryKey = 'id';
    protected $fillable = [
        'id_satker','id_filesurat','id_nomorsurat','id_tglsurat'];
}
