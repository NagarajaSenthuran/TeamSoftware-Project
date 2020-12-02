<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateVehiclesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('vehicles', function (Blueprint $table) {
            $table->id();
            $table->string('Vehicle_name');
            $table->string('Vehicle_brand');
            $table->string('Vehicle_overview');
            $table->string('Price_per_day');
            $table->string('Fuel_type');
            $table->integer('Model_year');
            $table->integer('Seating_capacity');
          //  $table->binary('veh_img');
            $table->date('Registration_date',0);
            $table->date('updation_date',0);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('vehicles');
    }
}
