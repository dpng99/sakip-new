<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Hash;

class User extends Authenticatable
{
    use HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $table = 'sinori_login';
    protected $fillable = [
        'id_satker', 'satkerpass', 'satkernama', 'satkerkey', 'token',
        'pejabat_kasatker', 'pejabat_bin', 'pejabat_intel', 'pejabat_pidum', 
        'pejabat_pidsus', 'pejabat_datun', 'pejabat_militer', 'pejabat_pengawasan', 'pejabat_aset'
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password', 'token',
    ];

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    public function keputusan()
    {
        return $this->hasOne(Keputusan::class, 'id_satker', 'id_satker');
    }

    public function renstra()
    {
        return $this->hasOne(Renstra::class, 'id_satker', 'id_satker');
    }

    public function renja()
    {
        return $this->hasOne(Renja::class, 'id_satker', 'id_satker');
    }

    public function penetapan()
    {
        return $this->hasOne(SakipPenetapan::class, 'id_satker', 'id_satker');
    }

    public function iku()
    {
        return $this->hasOne(Iku::class, 'id_satker', 'id_satker');
    }

    public function dipa()
    {
        return $this->hasOne(Dipa::class, 'id_satker', 'id_satker');
    }

    public function renaksi()
    {
        return $this->hasOne(Renaksi::class, 'id_satker', 'id_satker');
    }

    public function lakip()
    {
        return $this->hasOne(Lakip::class, 'id_satker', 'id_satker');
    }
    public function getIku()
    {
        return $this->hasMany(Iku::class, 'id_satker', 'id_satker');
    }

    public function getDipa()
    {
        return $this->hasMany(Dipa::class, 'id_satker', 'id_satker');
    }
    public function getLakip()
    {
        return $this->hasMany(Lakip::class, 'id_satker', 'id_satker');
    }

    public function getRenaksi()
    {
        return $this->hasMany(Renaksi::class, 'id_satker', 'id_satker');
    }
    public function getKeputusan()
    {
        return $this->hasMany(Keputusan::class, 'id_satker', 'id_satker');
    }

    public function getRenja()
    {
        return $this->hasMany(Renja::class, 'id_satker', 'id_satker');
    }
    public function getRenstra()
    {
        return $this->hasMany(Renstra::class, 'id_satker', 'id_satker');
    }
    public function setSatkerpassAttribute($value)
    {
        $this->attributes['password'] = Hash::make($value);
    }

    public function getAuthPassword()
    {
        return $this->password;
    }

    public function username()
    {
        return 'id_satker';
    }

    public function generateToken()
    {
        $this->token = Str::random(60);
        $this->save();

        return $this->token;
    }

    public function clearToken()
    {
        $this->token = null;
        $this->save();
    }
}