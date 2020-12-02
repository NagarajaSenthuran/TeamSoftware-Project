<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Vehicle extends Model
{
    use HasFactory;
    protected $table = 'vehicles';
    protected $fillable = ['Vehicle_name','Vehicle_brand','Vehicle_overview','Price_per_day','Fuel_type','Model_year','Seating_capacity','Registration_date','Updation_date'];
}//'veh_img',
