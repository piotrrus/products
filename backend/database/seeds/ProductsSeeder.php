<?php

use Illuminate\Database\Seeder;

class ProductsSeeder extends Seeder
{

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('products')->insert([
            ['name' => 'Winter Jacket', 'id_genre' => 1, 'price' => '79.99'],
            ['name' => 'Pleather Jacket', 'id_genre' => 1, 'price' => '75.99'],
            ['name' => 'Padded Jacket', 'id_genre' => 1, 'price' => '79.99'],
            ['name' => 'Cut Jeans', 'id_genre' => 3, 'price' => '19.99'],
            ['name' => 'Fit Jeans', 'id_genre' => 3, 'price' => '29.99'],
            ['name' => 'Stretch Trousers', 'id_genre' => 7, 'price' => '29.99'],
            ['name' => 'Work Suit', 'id_genre' => 6, 'price' => '89.99'],
            ['name' => 'Cardigan Dress', 'id_genre' => 2, 'price' => '19.99'],
            ['name' => 'Floral Dress', 'id_genre' => 2, 'price' => '24.99'],
            ['name' => 'Denim Jacket', 'id_genre' => 1, 'price' => '39.99'],
            ['name' => 'Rainy Day Jacket', 'id_genre' => 1, 'price' => '39.99'],
            ['name' => 'T-Shirt', 'id_genre' => 4, 'price' => '14.99'],
            ['name' => 'Print T-Shirt', 'id_genre' => 4, 'price' => '12.99']
        ]);
    }
}
