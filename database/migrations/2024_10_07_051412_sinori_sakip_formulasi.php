<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('sinori_sakip_formulasi', function (Blueprint $table) {
            $table->id();
            $table->char('id_saspro',10);
            $table->char('id_indikator',10);
            $table->string('nama_kegiatan');

        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('sinori_sakip_formulasi');
    }
};
