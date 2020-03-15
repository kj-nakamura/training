<?php

namespace App\Http\Controllers\web;

use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use App\Http\Controllers\Controller;
use App\Http\Model\Event;
use App\Http\Model\UserEvent;

class  EventController extends Controller
{
    public function add(Request $request)
    {
        // \Validator::make(
        //     $request->all(),
        //     [
        //         'event' => 'required|integer',
        //         'event_at' => Rule::unique('event_user')->where(function ($query) use ($request){
        //             return $query->where('user_id', \Auth::user()->id)
        //                 ->where('event_id', $request->event);
        //         })
        //     ]
        // )->validate();

        UserEvent::create([
            'user_id' => \Auth::user()->id,
            'name' => $request->event->name,
            'event_at' => $request->date,
        ]);

        return redirect('/')->with('result', '保存しました。');
    }

    public function delete(Request $request, Event $event, $event_at)
    {
        $event_user = EventUser::where('event_id', $event->id)
                        ->where('user_id', \Auth::user()->id)
                        ->where('event_at', $event_at)
                        ->first();
        $event_user->delete();

        return redirect('/')->with('result', '削除しました。');
    }
}
