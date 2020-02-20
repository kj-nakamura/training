<?php

namespace App\Http\Model;

use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    public static function getPost()
    {
        return self::all();
    }
}
