<?php

namespace App\Models;

use DB;
use Illuminate\Http\Request;
use Illuminate\Database\Eloquent\Model;
use App\Interfaces\CrudInterface;
use App\Request\BookRequest;

class Books extends Model implements CrudInterface
{
    const AUTHOR = 'author';
    const TITLE  = 'title';

    protected $table    = 'books';
    protected $fillable = [
        'id_author',
        'title'
    ];

    public function authors()
    {
        return $this->belongsTo('App\Models\Authors', 'id_author', 'id')
                ->select(['id', 'name']);
    }

    public function publishers()
    {
        return $this->belongsTo('App\Models\Publishers', 'id_publisher', 'id')
                ->select(['id', 'name']);
    }

    public function genres()
    {
        return $this->belongsTo('App\Models\Genres', 'id_genre', 'id')
                ->select(['id', 'name']);
    }

    /**
     *
     * @return Collection with book status
     * according to when book is rented or not
     */
    public static function getAll()
    {
        $table = self::getDBTable();
        return $table->orderBy('id', 'ASC')
                ->get();

//        return DB::table('books')
//                ->select(
//                    'books.id', 'title', 'id_author', 'publishers.name',
//                    'authors.name', 'rate', 'votes'
//                )
//                ->leftJoin('genres', 'genres.id', '=', 'books.id_genre')
//                ->leftJoin('authors', 'authors.id', '=', 'books.id_author')
//                ->leftJoin('publishers', 'publishers.id', '=',
//                    'books.id_publisher')
//                ->orderBy('id', 'ASC')
//                ->get();
    }

    /**
     * shows choosen book data
     * @param int $id
     * @return type
     */
    public static function search(int $id)
    {
        $table = self::getDBTable();
        return $table->where('books.id', '=', $id)->get();
    }

    public static function searchBy($param, $method)
    {
        return $this->getSearchMethod($param, $method)
                ->leftJoin('authors', 'authors.id', '=', 'books.id_author')
                ->leftJoin('rentals', 'rentals.id_book', '=', 'books.id')
                ->get();
    }

    private static function getDBTable()
    {
        return DB::table('books')
                ->select(
                    'books.id', 'title', 'id_author', 'id_genre',
                    'id_publisher', 'publishers.name as publisher',
                    'authors.name as author', 'rate', 'votes',
                    'genres.name as genre'
                )
                ->leftJoin('genres', 'genres.id', '=', 'books.id_genre')
                ->leftJoin('authors', 'authors.id', '=', 'books.id_author')
                ->leftJoin('publishers', 'publishers.id', '=',
                    'books.id_publisher');
    }

    private function getSearchMethod($param, $method)
    {
        $table = self::getDBTable();

        if ($method == self::TITLE) {
            $table = self::queryForTitle($table, $param);
        } elseif ($method == self::AUTHOR) {
            $table = self::queryForAuthor($table, $param);
        }
        return $table;
    }

    public static function searchByTitle(string $title)
    {
        $table = self::getDBTable();
        $table = self::queryForTitle($table, $title);
        $table = $table->get();
        return $table;
    }

    public static function searchByAuthor(string $author)
    {
        $table = self::getDBTable();
        $table = self::queryForAuthorName($table, $author);
        $table = $table->get();
        return $table;
    }

    private static function queryForTitle($table, $param)
    {
        return $table->where('books.title', 'LIKE', '%' . $param . '%');
    }

    private static function queryForAuthorName($table, $param)
    {
        return $table->where('authors.name', 'LIKE', '%', $param . '%');
    }

    private static function queryForAuthorId($table, $param)
    {
        return $table->where('authors.id', '=', $param);
    }

    public static function mostPopular()
    {
        $table = self::getDBTable();
        return $table->orderBy('votes', 'DESC')
                ->limit(4)
                ->get();
    }

    public static function rated()
    {
        $table = self::getDBTable();
        return $table->orderBy('rate', 'DESC')
                ->limit(4)
                ->get();
    }

    public static function latest()
    {
        $table = self::getDBTable();
        return $table->orderBy('books.created_at', 'DESC')
                ->limit(4)
                ->get();
    }

    public static function insert(array $input)
    {
        $books = new Books();
        return self::saveIt($input, $books);
    }

    public static function updateIt(int $id, array $input)
    {
        $books = Books::find($id);
        self::saveIt($input, $books);
    }

    private static function saveIt(array $input, $model)
    {
        if (!empty($input['title']) && !empty($input['id_author'])) {
            $model->title        = trim($input['title']);
            $model->id_author    = $input['id_author'];
            $model->id_publisher = $input['id_publisher'];
            $model->id_genre     = $input['id_genre'];
            $model->save();
        } else {
            return true;
        }
    }
}
