<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Vehicle extends Model
{
    use HasFactory;
    protected $table = 'vehicles';
    protected $fillable = ['vehicle_name','vehicle_brand','vehicle_overview','price_per_day','fuel_type','model_year','seating_capacity','veh_img','registration_date','updation_date'];
    //
}
