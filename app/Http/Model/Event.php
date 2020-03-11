<?php

namespace App\Http\Model;

use Illuminate\Database\Eloquent\Model;

class Event extends Model
{
    protected $fillable = [
        'name',
    ];

    public function categories()
    {
        return $this->belongsToMany('App\Http\Model\Category');
    }

    public function users()
    {
        return $this->belongsToMany('App\Http\Model\User');
    }
}
