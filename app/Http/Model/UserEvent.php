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

    // public static function search(Request $request)
    // {
    //     $query = self::query();

    //     // if ($request->filled('event_at')) {
    //     // }
    //     $query->whereHas('users', function ($query){
    //         $query->where('users.id', \Auth::user()->id);
    //     });

    //     return $query->get();
    // }
}
