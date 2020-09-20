<?php

namespace App\Http\Controllers\Api;

// use App\Http\Controllers\Controller;
// use Illuminate\Http\Request;
use App\Models\Books;
// use Illuminate\Http\Request;
use App\Http\Controllers\API\BaseController;
use App\Http\Requests\BookFormRequest;
use App\Http\Resources\BooksResource;

class BooksController extends BaseController
{

    /**
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $books = Books::getAll();
        return $this->response($books, 'Books');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(int $id)
    {
        $books = Books::search($id);
        return $this->response($books, 'Specified book');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function create(BookFormRequest $request)
    {
        $validated = $request->validated();
        if ($validated) {
            $response = Books::insert($validated);
            return $this->message($response);
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(BookFormRequest $request, int $id)
    {
        $validated = $request->validated();
        if ($validated) {
            $response = Books::updateIt($id, $validated);
            return $this->message($response);
        }
    }

    public function mostPopular()
    {
        $books = Books::mostPopular();
        return $this->response($books, 'Most popular books');
    }

    public function rated()
    {
        $books = Books::rated();
        return $this->response($books, 'Highest rated books');
    }

    public function latest()
    {
        $books = Books::latest();
        return $this->response($books, 'Latest publishing');
    }
}
