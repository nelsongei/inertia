<?php

namespace Database\Seeders;

use Database\Factories\UnitFactory;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\App;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        \App\Models\Unit::factory(10)->create();
        $this->call([
            UsersTableSeeder::class,
            CurrencyTableSeeder::class,
            CountriesTableSeeder::class,
        ]);
    }
}
