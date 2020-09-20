<?php

namespace App\Http\Controllers\Api;

use App\Models\Authors;
use App\Http\Controllers\Api\BaseController;
use App\Http\Requests\AuthorFormRequest;

class AuthorsController extends BaseController
{

    public function index()
    {
        $authors = Authors::getAll();
        return $this->response($authors, 'authors');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(int $id)
    {
        $authors = Authors::search($id);
        return $this->response($authors, 'Specified author');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function create(AuthorFormRequest $request)
    {
        $validated = $request->validated();
        if ($validated) {
            $response = Authors::insert($validated);
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
    public function update(AuthorFormRequest $request, int $id)
    {
        $validated = $request->validated();
        if ($validated) {
            $response = Authors::updateIt($id, $validated);
            return $this->message($response);
        }
    }
}
