<?php

use App\Models\Auth\PriceOptions\PriceOption;
use Illuminate\Database\Seeder;

/**
 * Class PriceOptionsTableSeeder.
 */
class PriceOptionsTableSeeder extends Seeder
{
   

    /**
     * Run the database seed.
     */
    public function run()
    {
      

        
        PriceOption::create([
            'name' => 'Add10Percent',
            'value' => 0.10,
            'text' => 'Add 10 Percent',
        ]);

        PriceOption::create([
            'name' => 'Add15Percent',
            'value' => 0.15,
            'text' => 'Add 15 Percent',
        ]);

        PriceOption::create([
            'name' => 'Add20Percent',
            'value' => 0.20,
            'text' => 'Add 20 Percent',
        ]);

        PriceOption::create([
            'name' => 'Add25Percent',
            'value' => 0.25,
            'text' => 'Add 25 Percent',
        ]);

        PriceOption::create([
            'name' => 'Add30Percent',
            'value' => 0.30,
            'text' => 'Add 30 Percent',
        ]);

        PriceOption::create([
            'name' => 'NoFee',
            'value' => 0.00,
            'text' => 'Add No Fee',
        ]);


      

    }
}
