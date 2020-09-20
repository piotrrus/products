<?php

namespace App\Http\Controllers\Api;

use App\Models\Publishers;
use App\Http\Controllers\Api\BaseController;
use App\Http\Requests\PublisherFormRequest;

class PublishersController extends BaseController
{

    public function index()
    {
        $publishers = Publishers::getAll();
        return $this->response($publishers, 'publishers');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(int $id)
    {
        $publishers = Publishers::search($id);
        return $this->response($publishers, 'Specified publisher');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(PublisherFormRequest $request)
    {
        $validated = $request->validated();
        if ($validated) {
            $response = Publishers::insert($validated);
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
    public function update(PublisherFormRequest $request, int $id)
    {
        $validated = $request->validated();
        if ($validated) {
            $response = Publishers::updateIt($id, $validated);
            return $this->message($response);
        }
    }
}
