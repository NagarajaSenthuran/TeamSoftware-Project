<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ContactQuerry extends Model
{
    use HasFactory;
    protected $table = 'contact_querries';
    protected $primaryKey='id';
    protected $fillable = ['name','email','phone_num','message','Posting_date'];

}
