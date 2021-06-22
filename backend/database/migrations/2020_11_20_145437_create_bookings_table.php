<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateBookingsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('bookings', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('vehicle_id'); 
            $table->string('name');  
            $table->string('email');
            $table->integer('phone_no'); 
            $table->date('start_date',0);
            $table->date('end_date',0);
            $table->string('car_Type');
            $table->boolean('status')->nullable();
            $table->date('posting_date',0);
            $table->timestamps();
           // $table->foreign('User_email')->references('email')->on('users')->onDelete('cascade');
            $table->foreign('vehicle_id')->references('id')->on('vehicles');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('bookings');
    }
}
