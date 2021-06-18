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
            $table->string('vehicle_name');
            $table->string('vehicle_brand');
            $table->string('vehicle_overview');
            $table->string('price_per_day');
            $table->string('fuel_type');
            $table->integer('model_year');
            $table->integer('seating_capacity');
            $table->string('veh_img')->nullable();
            $table->boolean('is_available')->nullable();
            $table->date('registration_date',0)->nullable();
            $table->date('updation_date',0)->nullable();
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
