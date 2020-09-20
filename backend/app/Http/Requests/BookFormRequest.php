<?php

namespace App\Http\Requests;

use App\Http\Requests\AbstractFormRequest;

class BookFormRequest extends AbstractFormRequest
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
        return [
            'id_author' => 'bail|required|numeric',
            'id_genre' => 'required|numeric',
            'id_publisher' => 'required|numeric',
            'title' => 'required|max:100|string'
        ];
    }
}
