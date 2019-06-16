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
            'name' => 'Air Conditioning & Heating',
            'slug' => slugify('Air Conditioning'),
            'icon_class' => 'fas fa-fan'
            
        ]);

        Amenity::create([
            'name' => 'Radio',
            'slug' => slugify('Radio'),
            'icon_class' => 'fas fa-broadcast-tower',
            
        ]);
        Amenity::create([
            'name' => 'Aux Sound Input',
            'slug' => slugify('Aux Sound Input'),
            'icon_class' => 'fas fa-headphone',
            
        ]);
        Amenity::create([
            'name' => 'Booster Seats',
            'slug' => slugify('Booster Seats'),
            'icon_class' => 'fas fa-chair',
        ]);
        
        Amenity::create([
            'name' => 'Iphone & Micro Usb Chargers',
            'slug' => slugify('Iphone & Micro Usb Chargers'),
            'icon_class' => 'fas fa-battery-three-quarters',
        ]);





      

    }
}
