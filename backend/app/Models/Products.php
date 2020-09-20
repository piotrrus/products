<?php

namespace App\Models;

use DB;
use Illuminate\Http\Request;
use Illuminate\Database\Eloquent\Model;
use App\Interfaces\CrudInterface;
use App\Request\BookRequest;
use Carbon\Carbon;

/**
 * Description of Products
 *
 * @author piotrek
 */
class Products extends Model implements CrudInterface
{
    protected $table    = 'products';
    protected $fillable = [
        'id_genre', 'name',
        'price', 'deleted_at'
    ];

    public function genres()
    {
        return $this->belongsTo('App\Models\Genres', 'id_genre', 'id')
                ->select(['id', 'name']);
    }

    public static function getAll()
    {
        return DB::table('products')
                ->select('products.id', 'products.name as name', 'price', 'genres.name as genre','id_genre')
                ->leftJoin('genres', 'genres.id', '=', 'products.id_genre')
                ->whereNull('products.deleted_at')
                ->orderBy('products.name', 'ASC')
                ->get();
    }

    public static function search(int $id)
    {
        return Products::find($id);
    }

    public static function insert(array $input)
    {
        $products = new Products();
        self::saveIt($input, $products);
    }

    public static function updateIt(int $id, array $input)
    {
        $products = Products::find($id);
        self::saveIt($input, $products);
    }

    private static function saveIt(array $input, $model)
    {
        if (!empty($input['name'])) {
            $model->name = $input['name'];
            $model->id_genre = $input['id_genre'];
            $model->price = $input['price'];
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
