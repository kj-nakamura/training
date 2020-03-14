<?php

namespace App\Http\Controllers\web;

use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use App\Http\Controllers\Controller;
use App\Http\Model\Event;
use App\Http\Model\EventUser;

class  EventController extends Controller
{
    public function add(Request $request)
    {
        \Validator::make(
            $request->all(),
            [
                'event' => 'required|integer',
                'event_at' => Rule::unique('event_user')->where(function ($query) use ($request){
                    return $query->where('user_id', \Auth::user()->id)
                        ->where('event_id', $request->event);
                })
            ]
        )->validate();

        \Auth::user()->events()->attach([$request->event => ['event_at' => $request->event_at]]);

        return redirect('/')->with('result', '保存しました。');
    }

    public function delete(Request $request, Event $event, $event_at)
    {
        $event_user = EventUser::where('event_id', $event->id)
                        ->where('user_id', \Auth::user()->id)
                        ->where('event_at', $event_at)
                        ->first();
        $event_user->delete();
        // $this->user->events()->detach([$event->id => ['event_at' => $event->pivot->event_at]]);

        return redirect('/')->with('result', '削除しました。');
    }
}
