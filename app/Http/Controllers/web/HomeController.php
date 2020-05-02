<?php

namespace App\Http\Controllers\web;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Model\UserEvent;

class HomeController extends Controller
{
    public function index(Request $request)
    {
        return view('web.index',[
            'events' => UserEvent::search($request),
        ]);
    }
}
