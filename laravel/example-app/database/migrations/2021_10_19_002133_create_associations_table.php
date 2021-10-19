<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAssociationsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('associations', function (Blueprint $table) {
            $table->id();

            $table->string('name'); // naam vereniging
            $table->enum('school', ['EhB', 'VUB', 'other']); // instelling kring
            $table->string('president'); // preases kring
            $table->string('email')->unique(); // email kring
            $table->string('telephone'); // telefoon kring
            $table->boolean('active'); // 0: inactief / 1: actief
            $table->integer('bill_number'); // factuurnummer

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
        Schema::dropIfExists('associations');
    }
}
