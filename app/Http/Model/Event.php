<?php

namespace App\Http\Model;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Request;

class Event extends Model
{
    protected $fillable = [
        'name',
    ];

    public function categories()
    {
        return $this->belongsToMany('App\Http\Model\Category');
    }
}
