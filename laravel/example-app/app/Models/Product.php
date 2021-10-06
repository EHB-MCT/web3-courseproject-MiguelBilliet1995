<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    protected $connection = 'pgsql'; // andere database gebruiken -> PosgreSQL

    public function createProduct(){
        $product = new Product();

        $product->name = $this->faker->word();
        $product->brand = $this->faker->word();
        $product->price = $this->faker->randomFloat(2, 10, 850);
        $product->description = $this->faker->paragraph();

    }


}
