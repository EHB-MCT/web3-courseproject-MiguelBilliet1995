<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateInventoryTable extends Migration
{

    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('inventories', function (Blueprint $table) {
            $table->id();

            $table->foreignId('inventory_person')->constrained('users'); // id van inventaris persoon.
            $table->string('type'); // voor/na-inventaris.
            $table->foreignId('association')->constrained('associations'); // id van kring of organisatie.
            $table->string('event_name'); // naam van het evenement.
            $table->string('organistor_name'); // naam persoon van organisatie aanwezig op de inventaris.
            $table->json('inventory_data'); // inventaris data.

            $table->timestamps(); // tijdstip inventaris
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('inventory');
    }
}
