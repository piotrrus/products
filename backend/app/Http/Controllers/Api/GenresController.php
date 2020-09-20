<?php

namespace App\Http\Controllers\Api;

use App\Models\Genres;
use App\Http\Controllers\Api\BaseController;
use App\Http\Requests\GenreFormRequest;

class GenresController extends BaseController
{

    public function index()
    {
        $genres = Genres::getAll();
        return $this->response($genres, 'genres');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(int $id)
    {
        $genres = Genres::search($id);
        return $this->response($genres, 'Specified book genre');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function create(GenreFormRequest $request)
    {
        $validated = $request->validated();
        if ($validated) {
            $response = Genres::insert($validated);
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
    public function update(GenreFormRequest $request, int $id)
    {
        $validated = $request->validated();
        if ($validated) {
            $response = Genres::updateIt($id, $validated);
            return $this->message($response);
        }
    }
}
