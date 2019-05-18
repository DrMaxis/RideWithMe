<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateRideRequestsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('ride_requests', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->uuid('uuid');
            $table->string('account_id');
            $table->string('stauts')->nullable();
            $table->string('driver')->nullable();
            $table->string('passenger')->nullable();
            $table->string('request_creator')->nullable();
            $table->text('passengers')->nullable();
            $table->string('passenger_phone')->nullable();
            $table->string('driver_phone')->nullable();
            $table->string('pickup_location')->nullable();
            $table->string('dropoff_location')->nullable();
            $table->double('pickup_location_latitude')->nullable();
            $table->double('pickup_location_longitude')->nullable();
            $table->double('dropoff_location_latitude')->nullable();
            $table->double('dropoff_location_longitude')->nullable();
            $table->integer('passenger_count')->default(1);
            $table->timestamp('pickup_time')->nullable();
            $table->boolean('scheduled')->default(false);
            $table->timestamp('scheduled_pickup_time')->nullable();
            $table->double('estimated_fare')->default(0.00);
            $table->double('calculated_fare')->default(0.00);
            $table->double('total_distance')->default(0.00);
            $table->double('fare_split')->default(0.00);
            $table->boolean('accepted_by_driver')->default(false);
            $table->boolean('canceled_by_driver')->default(false);
            $table->boolean('confirmed_pickup_by_driver')->default(false);
            $table->boolean('confirmed_dropoff_by_driver')->default(false);
            $table->boolean('confirmed_pickup')->default(false);
            $table->boolean('confirmed_dropoff')->default(false);
            $table->boolean('payment_sent')->default(false);
            $table->string('transaction_id')->nullable();
            $table->boolean('canceled')->default(false);
            $table->string('cancel_reason')->nullable();
            $table->boolean('accepted_terms')->default(false);
            $table->boolean('completed')->default(false);
            $table->integer('rating')->nullable();
            $table->timestamp('last_updated')->nullable();
            $table->timestamps();
        });

        Schema::table('ride_requests', function (Blueprint $table) {
            $table->foreign('account_id')->references('uuid')->on('accounts')->onDelete('cascade');
            $table->foreign('transaction_id')->references('uuid')->on('transactions')->onDelete('cascade');
        });


    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('ride_requests');
    }
}
