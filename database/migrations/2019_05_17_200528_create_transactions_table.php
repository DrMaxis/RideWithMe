<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTransactionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('transactions', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->uuid('uuid')->unique();
            $table->string('account_id');
            $table->string('user_id')->nullable();
            $table->string('sender_name')->nullable();
            $table->string('recipient_name')->nullable();
            $table->string('transaction_type')->nullable();
            $table->string('payment_type')->nullable();
            $table->double('bill_amount')->nullable();
            $table->string('recipient_id')->nullable();
            $table->string('recipient_email')->nullable();
            $table->string('recipient_phone')->nullable();
            $table->string('currency')->nullable();
            $table->string('country')->nullable();
            $table->string('ipaddress')->nullable();
            $table->string('txRef')->nullable();
            $table->string('orderRef')->nullable();
            $table->string('fingerprint')->nullable();
            $table->string('error')->nullable();
            $table->boolean('verified')->default(false);
            $table->boolean('completed')->default(false);
            $table->timestamps();
        });

        Schema::table('transactions', function (Blueprint $table) {
            $table->foreign('account_id')->references('uuid')->on('accounts')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('transactions');
    }
}
