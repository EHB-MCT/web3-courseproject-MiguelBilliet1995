<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('sur_name'); // voornaam
            $table->string('name'); // naam
            $table->string('email')->unique(); // email
            $table->string('telephone')->unique(); // telefoon
            $table->boolean('active'); // 0: inactief / 1: actief
            $table->json('type'); // type (webmaster / voorzitter / ondervoorzitter / secretaris / penning / inventaris / kring)
            $table->integer('kring'); // indien type kring: id van kring anders null
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password'); // wachtwoord
            $table->rememberToken();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
}
