<?php

namespace App\Http\Requests;

use App\Http\Requests\AbstractFormRequest;

/**
 * Description of ProductFormRequest
 *
 * @author piotrek
 */
class ProductFormRequest extends AbstractFormRequest
{

    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        //regex:/^\d+(\.\d{1,2})?$/
        return [
            'id_genre' => 'required|numeric',
            'name' => 'required|max:100|string',
            'price'=> 'required|regex:/^\d+(\.\d{1,2})?$/'
        ];
    }
}
