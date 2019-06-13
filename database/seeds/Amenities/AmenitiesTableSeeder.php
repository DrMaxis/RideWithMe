<?php

use App\Models\Auth\Amenities\Amenity;
use Illuminate\Database\Seeder;

/**
 * Class AmenitiesTableSeeder.
 */
class AmenitiesTableSeeder extends Seeder
{
   

    /**
     * Run the database seed.
     */
    public function run()
    {
      

        
        Amenity::create([
            'name' => 'Air Conditioning',
            'slug' => slugify('Air Conditioning'),
            
        ]);

        Amenity::create([
            'name' => 'Heating',
            'slug' => slugify('Heating'),
            
        ]);

        Amenity::create([
            'name' => 'Radio',
            'slug' => slugify('Radio'),
            
        ]);
        Amenity::create([
            'name' => 'Aux Sound Input',
            'slug' => slugify('Aux Sound Input'),
            
        ]);
        Amenity::create([
            'name' => 'Booster Seats',
            'slug' => slugify('Booster Seats'),
            
        ]);
        
        Amenity::create([
            'name' => 'Iphone & Micro Usb Chargers',
            'slug' => slugify('Iphone & Micro Usb Chargers'),
            
        ]);





      

    }
}
