<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Booking extends Model
{
    use HasFactory;
    protected $table = 'bookings';
    protected $primaryKey='id';
    protected $fillable = ['vehicle_id','name','start_date','end_date','car_Type','status','posting_date'];

}
