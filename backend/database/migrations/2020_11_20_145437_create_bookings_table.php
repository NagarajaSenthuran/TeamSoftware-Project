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
            $table->string('Name');  
            $table->string('User_email');  
           // $table->unsignedBigInteger('Vehicle_id'); 
            $table->date('Start_date',0);
            $table->date('End_date',0);
            $table->string('Message');
            $table->string('Car_Type');
            $table->string('Status');
            $table->date('Posting_date',0);
            $table->timestamps();


           
            $table->foreign('User_email')->references('email')->on('users')->onDelete('cascade');
           // $table->foreign('Vehicle_id')->references('id')->on('vehicles')->onDelete('cascade');
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
