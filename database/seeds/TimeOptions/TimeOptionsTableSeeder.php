<?php

use App\Models\Auth\TimeOptions\TimeOption;
use Illuminate\Database\Seeder;

/**
 * Class PriceOptionsTableSeeder.
 */
class TimeOptionsTableSeeder extends Seeder
{
   

    /**
     * Run the database seed.
     */
    public function run()
    {
      

        
       TimeOption::create([
            'name' => 'leave_in_10',
            'value' => 10,
            'text' => 'Leave In 10 Minutes',
        ]);

       TimeOption::create([
            'name' => 'leave_in_15',
            'value' => 15,
            'text' => 'Leave in 15 Minutes',
        ]);

       TimeOption::create([
            'name' => 'leave_in_20',
            'value' => 20,
            'text' => 'Leave In 20 Minutes',
        ]);

       TimeOption::create([
            'name' => 'leave_in_30',
            'value' => 30,
            'text' => 'Leave In 30 Minutes',
        ]);

       TimeOption::create([
            'name' => 'leave_now',
            'value' => 0,
            'text' => 'Leave Now',
        ]);


      

    }
}
