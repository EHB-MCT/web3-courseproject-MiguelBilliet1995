<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateEventTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('event', function (Blueprint $table) {
            $table->id();

            $table->string('name'); // event name
            $table->foreignId('association')->constrained('associations'); // id van organiserende vereniging
            $table->enum('type', ['Cantus','TD','andere']);
            $table->date('date'); // datum van het evenement
            $table->foreignId('first_inventory')->nullable()->constrained('inventories'); // id van voorinventaris
            $table->foreignId('second_inventory')->nullable()->constrained('inventories'); // id van nainventaris
            $table->foreignId('invoice')->nullable()->constrained('invoice'); // id van factuur
            $table->enum('status', ['request', 'accepted', 'first_inventory', 'second_inventory', 'invoice_ready', 'payed', 'cancelled', 'rejected']); // status van het evenement

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
        Schema::dropIfExists('event');
    }
}
