<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class productSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        $productsArray = [[
            'name' => "Bavik 30l",
            'price' => 70.00,
            'category' => "keg",
            'total_present' => 10,
            'total_empty' => 2,
            'total_warning' => 5
        ],[
            'name' => "Bavik 50l",
            'price' => 120.00,
            'category' => "keg",
            'total_present' => 3,
            'total_empty' => 7,
            'total_warning' => 5
        ],[
            'name' => "Coca-Cola 1l",
            'price' => 2.85,
            'category' => "consumables",
            'total_present' => 40,
            'total_warning' => 5
        ],[
            'name' => "Hand sanitiser",
            'price' => 7.50,
            'category' => "other",
            'total_present' => 12
        ]];

        foreach($productsArray as $product){
            DB::table('products')->insert($product);
        }

    }
}
