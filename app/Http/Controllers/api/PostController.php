<?php

namespace App\Http\Controllers\api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Model\Post;

class PostController extends Controller
{
    public function index()
    {
        $posts = Post::all();
        return $posts;
    }

    public function addPost(Request $request, Post $post)
    {
        $post->name = $request->name;
        $post->save();

        $posts = Post::all();
        return $posts;
    }

    //delete
    public function deletePost(Request $request)
    {
        $post = Post::find($request->id);
        $post->delete();

        $posts = post::all();
        return $posts;
    }
}
