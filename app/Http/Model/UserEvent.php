<?php

namespace App\Http\Model;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Request;

class UserEvent extends Model
{
    protected $fillable = [
        'user_id',
        'name',
        'event_at'
    ];

    public function user()
    {
        return $this->belongsTo('App\Http\Model\User');
    }

    public function weight_counts()
    {
        return $this->hasMany('App\Http\Model\WeightCount');
    }

    public static function search(Request $request)
    {
        $query = self::query();

        $query->where('user_id', \Auth::user()->id);

        if ($request->filled('day')) {
            $query->where('event_at', now()->subDays($request->day)->format('Y-m-d'));
        } else {
            $query->where('event_at', now()->format('Y-m-d'));
        }

        return $query->get();
    }
}
