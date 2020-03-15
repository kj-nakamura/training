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
        $faker = SeedGenerator::getFaker();

        foreach (SeedGenerator::$option_events as $event_set) {
            $event_category = \App\Http\Model\Category::create($event_set['category']);

            foreach ($event_set['events'] as $event_params) {
                $event = \App\Http\Model\Event::create($event_params);
                $event_category->events()->attach($event->id);
                $user = \App\Http\Model\User::create([
                    'name' => $faker->name,
                    'email' => str_replace('{tmp}', $event->id, 'kenji.nkmr.1117+{tmp}@gmail.com'),
                    'password' => bcrypt('1qaz2wsx'),
                ]);
                $user_events = \App\Http\Model\UserEvent::create([
                    'user_id' => $user->id,
                    'name' => $event->name,
                    'event_at' => now()->format('Y-m-d'),
                ]);
            }
        }

        \App\Http\Model\AdminUser::create([
            'name' => $faker->name,
            'email' => str_replace('{tmp}', 'admin', 'kenji.nkmr.1117+{tmp}@gmail.com'),
            'password' => bcrypt('1qaz2wsx'),
        ]);
    }
}
