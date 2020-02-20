<?php

use Illuminate\Database\Seeder;

class PostsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        \App\Http\Model\Post::insert([
            [
                'name' => '名前1',
            ],
            [
                'name' => '名前2',
            ],
            [
                'name' => '名前3',
            ],
        ]);
    }
}
