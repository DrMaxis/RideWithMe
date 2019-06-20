<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateRideReviewsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('ride_reviews', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->uuid('uuid');
            $table->unsignedBigInteger('ride_id');
            $table->unsignedBigInteger('user_id');
            $table->double('safety_rating')->nullable();
            $table->double('quality_rating')->nullable();
            $table->double('punctuality_rating')->nullable();
            $table->double('charisma_rating')->nullable();
            $table->double('passengers_rating')->nullable();
            $table->longText('review')->nullable();
            $table->timestamps();
        });

        Schema::table('ride_reviews', function (Blueprint $table) {
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
            $table->foreign('ride_id')->references('id')->on('rides')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('ride_reviews');
    }
}
