<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call([
            associationSeeder::class, // kring seeder
            eventSeeder::class, // event seeder
            productSeeder::class, // producten seeder
        ]);
    }
}
