<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProductTable extends Migration
{

    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->string('name'); // product naam
            $table->double('price', 5, 2); // product prijs
            $table->enum('category', ['consumables', 'keg', 'other']); // product categorie (verbruiksgoeder / vat / andere)
            $table->integer('total_present'); // aantal aanwezig (bij vat vol) 
            $table->integer('total_empty')->nullable(); // bij vat: aantal leeg anders null
            $table->integer('total_warning')->nullable(); // waarschuwing bij aantal of minder
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
        Schema::dropIfExists('products');
    }
}
