<?php

namespace App\Http\Controllers;

use App\Eloquent\Post;
use App\Repository\PostRepository;
use Dotenv\Exception\ValidationException;
use Illuminate\Http\Request;

class PostController extends Controller
{
    protected $postRepository;

    public function __construct(PostRepository $postRepository)
    {
        $this->postRepository = $postRepository;
    }

    public function list()
    {
        return $this->postRepository->list();
    }

    public function create(Request $request)
    {
        $post = new Post();
        $post->title = $request->get('title');
        \Log::debug(print_r($post,true));
        if (!$post->title) {
            throw new ValidationException('タイトルとコンテンツは必須です');
        }

        return $this->postRepository->create($post);
    }

    public function delete(int $id)
    {
        $post = $this->postRepository->find($id);
        if (!$post) {
            throw new ValidationException('削除対象のpostが存在しません');
        }

        $this->postRepository->delete($post);

        return [];
    }
}
