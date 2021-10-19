<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class eventSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('event')->insert([
            'name' => "test TD",
            'association' => 1,
            'type' => "TD",
            'date' => "2021-10-19",
            'status' => "request"
        ]);
    }
}
