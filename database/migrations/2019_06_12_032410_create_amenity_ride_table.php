<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateAmenityRideTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
       
        Schema::create('amenity_ride_', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('amenity_id');
            $table->unsignedBigInteger('ride_id');
            $table->timestamps();
        });


        Schema::table('amenity_ride_', function (Blueprint $table) {
            $table->foreign('amenity_id')->references('id')->on('ride_amenities')->onDelete('cascade');
            $table->foreign('ride_id')->references('id')->on('rides')->onDelete('cascade');
            /* $table->foreign('transaction_id')->references('uuid')->on('transactions')->onDelete('cascade'); */
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('amenity_ride');
    }
}
