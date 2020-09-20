<?php

namespace App\Http\Controllers\Api;

use App\Models\Products;
use App\Http\Controllers\API\BaseController;
use App\Http\Requests\ProductFormRequest;
use App\Http\Resources\ProductResource;

/**
 * Description of ProductController
 *
 * @author piotrek
 */
class ProductsController extends BaseController
{

    /**
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
// dd('asdasdas');
        $products = Products::getAll();
        return $this->response($products, 'Products');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(int $id)
    {
        $product = Products::search($id);
        return $this->response($product, 'Specified product');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function create(ProductFormRequest $request)
    {
        $validated = $request->validated();
        if ($validated) {
            $response = Products::insert($validated);
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
    public function update(ProductFormRequest $request, int $id)
    {
        $validated = $request->validated();
        if ($validated) {
            $response = Products::updateIt($id, $validated);
            return $this->message($response);
        }
    }

    public function delete(int $id)
    {
            $response = Products::softDelete($id);
            return $this->message($response);
    }
}
