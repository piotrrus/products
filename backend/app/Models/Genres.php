<?php

namespace App\Models;

use DB;
use Illuminate\Http\Request;
use Illuminate\Database\Eloquent\Model;
use App\Interfaces\CrudInterface;

class Genres extends Model implements CrudInterface
{
    protected $table = 'genres';

    public function products()
    {
        return $this->hasMany(Products::class);
    }

    public static function getAll()
    {
        return DB::table('genres')
                ->select('id', 'name')
                ->orderBy('name', 'ASC')
                ->get();
    }

    public static function search(int $id)
    {
        return Genres::find($id);
    }

    public static function insert(array $input)
    {
        $genres = new Genres();
        self::saveIt($input, $genres);
    }

    public static function updateIt(int $id, array $input)
    {
        $genres = Genres::find($id);
        self::saveIt($input, $genres);
    }

    private static function saveIt(array $input, $model)
    {
        if (!empty($input['name'])) {
            $model->name = $input['name'];
            $model->save();
        } else {
            return true;
        }
    }

    public static function softDelete(int $id)
    {
        $products             = Products::find($id);
        $products->deleted_at = Carbon::toDateString();
        $products->save();
    }
}
