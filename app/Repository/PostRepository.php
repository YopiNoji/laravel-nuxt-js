<?php

namespace App\Repository;

use App\Eloquent\Post;
use Illuminate\Support\Collection;

class PostRepository
{
    public function find(int $id): ?Post
    {
        return Post::query()->find($id);
    }

    public function list(): Collection
    {
        return Post::query()->get();
    }

    public function create(Post $new_post): Post
    {
        $post = new Post();
        $post->title = $new_post->title;

        $post->save();

        return $post;
    }

    public function delete(Post $post)
    {
        return Post::query()->find($post->id)->delete();
    }
}
