<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class associationSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('associations')->insert([
            'name' => "Enigma",
            'school' => "Ehb",
            'president' => "Jean-Bosco",
            'email' => "info@enigma-brussel.be",
            'telephone' => "0470470470",
            'active' => true,
            'bill_number' => "001"
        ]);
    }
}
