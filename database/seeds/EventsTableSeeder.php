<?php

use Illuminate\Database\Seeder;

class EventsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        foreach (SeedGenerator::$option_events as $event_set) {
            $event_category = \App\Http\Model\Category::create($event_set['category']);

            foreach ($event_set['events'] as $event_params) {
                $event = \App\Http\Model\Event::create($event_params);
                $event_category->events()->attach($event->id);
            }
        }
    }
}
