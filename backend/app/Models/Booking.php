<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Booking extends Model
{
    use HasFactory;
    protected $table = 'vehicles';
    protected $primaryKey='id';
    protected $fillable = ['Name','User_email','Vehicle_id','Start_date','End_date','Message','Car_Type','Status','Posting_date'];

}
