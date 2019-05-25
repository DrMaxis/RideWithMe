<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateRidesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('rides', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->uuid('uuid');
            $table->unsignedBigInteger('user_id');
            $table->string('ride_name')->nullable();
            $table->longText('ride_notes')->nullable();
            $table->string('slug')->nullable();
            $table->string('stauts')->nullable();
            $table->string('driver')->nullable();
            $table->string('request_creator')->nullable();
            $table->text('passengers')->nullable();
            $table->string('passenger_phone')->nullable();
            $table->string('driver_phone')->nullable();
            $table->string('pickup_location')->nullable();
            $table->string('dropoff_location')->nullable();
            $table->string('scheduled_pickup_time')->nullable();
            $table->double('estimated_fare')->default(0.00);
            $table->double('calculated_fare')->default(0.00);
            $table->double('total_distance')->default(0.00);
            $table->double('fare_split')->default(0.00);
            $table->boolean('canceled')->default(false);
            $table->string('cancel_reason')->nullable();
            $table->boolean('accepted_terms')->default(false);
            $table->boolean('completed')->default(false);
            $table->integer('rating')->nullable();
            $table->timestamp('last_updated')->nullable();
            $table->timestamps();
        });

        Schema::table('rides', function (Blueprint $table) {
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
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
        Schema::dropIfExists('rides');
    }
}
