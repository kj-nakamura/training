<?php

namespace App\Http\Model;

use Illuminate\Database\Eloquent\Model;

class WeightCount extends Model
{
    protected $fillable = [
        'user_event_id',
        'weight',
        'count'
    ];

    public function userEvent()
    {
        return $this->belongsTo('App\Http\Model\UserEvent');
    }
}
