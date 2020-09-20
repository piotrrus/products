<?php

namespace App\Interfaces;

//use Illuminate\Http\Request;
//use Illuminate\Database\Eloquent\Model;

interface CrudInterface
{

    public static function getAll();

    public static function search(int $id);

    public static function insert(array $request);

    //public function saveIt(array $request, Model $model);

    public static function updateIt(int $id, array $request);

    public static function softDelete(int $id);
}
