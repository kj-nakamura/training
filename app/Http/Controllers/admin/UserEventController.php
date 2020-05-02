<?php

namespace App\Http\Controllers\web;

use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use App\Http\Controllers\Controller;
use App\Http\Model\UserEvent;
use App\Http\Model\WeightCount;

class  UserEventController extends Controller
{
    public function show(UserEvent $user_event) {
        return view('user_event.show',[
            'user_event' => $user_event,
        ]);
    }

    public function add(Request $request)
    {
        \Validator::make(
            $request->all(),
            [
                'name' => 'required|string',
                'event_at' => Rule::unique('user_events')->where(function ($query) use ($request){
                    return $query->where('user_id', \Auth::user()->id)
                        ->where('name', $request->name);
                })
            ]
        )->validate();

        UserEvent::create([
            'user_id' => \Auth::user()->id,
            'name' => $request->name,
            'event_at' => $request->event_at,
        ]);

        return redirect(route('web::home', ['day' => $request->day]))->with('result', '保存しました。');
    }

    public function delete(Request $request, UserEvent $user_event)
    {
        $user_event->delete();

        return redirect(route('web::home', ['day' => $request->day]))->with('result', '削除しました。');
    }

    public function addWeightCount(Request $request, UserEvent $user_event)
    {
        \Validator::make(
            $request->all(),
            [
                'weight' => 'required|integer',
                'count' => 'required|integer',
            ]
        )->validate();

        WeightCount::create([
            'user_event_id' => $user_event->id,
            'weight' => $request->weight,
            'count' => $request->count,
        ]);

        return redirect(route('web::event.show', $user_event))->with('result', '保存しました。');
    }
}
