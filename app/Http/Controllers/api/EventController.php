<?php

namespace App\Http\Controllers\api;

use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Model\Category;
use App\Http\Model\Event;

class  EventController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth')->only(['addPost']);
    }

    public function index(Request $request)
    {
        $events = Category::find($request->id)->events;

        return ['events' => $events];
    }

    public function add(Request $request)
    {
        Auth::user()->events()->syncWithoutDetaching($request->event);

        return redirect('/')->with('result', '保存しました。');
    }

    public function delete(Request $request, Event $event)
    {
        \Auth()->user()->events()->detach($event->id);

        return redirect('/')->with('result', '削除しました。');
    }
}
