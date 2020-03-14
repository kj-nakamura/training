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
                'user' => 'required|integer',
                'event_at' => Rule::unique('event_user')->where(function ($query) use ($request){
                    return $query->where('user_id', $request->user)
                        ->where('event_id', $request->event);
                })
            ]
        )->validate();

        $event = EventUser::create([
            'event_id' => $request->event,
            'user_id' => $request->user,
            'event_at' => $request->event_at,
        ]);

        return redirect('/')->with('result', '保存しました。');
    }

    public function delete(Request $request, Event $event)
    {
        \Auth::user()->events()->detach($event->id);

        return redirect('/')->with('result', '削除しました。');
    }
}
