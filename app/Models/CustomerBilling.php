<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CustomerBilling extends Model
{
    use HasFactory;

    protected $fillable = ['customer_id', 'country_id', 'name', 'state', 'city', 'phone', 'address_1', 'address_2', 'zip_code'];
}
