<?php

use Illuminate\Database\Seeder;

class GenreSeeder extends Seeder
{

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('products_genre')->insert([
            ['name' => 'Jackets', 'id' => 1],
            ['name' => 'Dresses', 'id' => 2],
            ['name' => 'Jeans', 'id' => 3],
            ['name' => 'Shirts', 'id' => 4],
            ['name' => 'Coats', 'id' => 5],
            ['name' => 'Suits', 'id' => 6],
            ['name' => 'Trousers', 'id' => 7],
        ]);
    }
}
