<?php

namespace App\Http\Controllers\api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Model\Category;
use App\Http\Model\Event;

class  EventController extends Controller
{
    public function index(Request $request)
    {
        $category = Category::find($request->id);
        $events =  $category->events;
        return $events;
    }
}
