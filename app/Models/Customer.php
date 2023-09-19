<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Customer extends Model
{
    use HasFactory;
    protected $fillable =['firstname','lastname','email','phone','currency_id','website'];
    public function currency()
    {
        return $this->belongsTo(Currency::class);
    }
}
