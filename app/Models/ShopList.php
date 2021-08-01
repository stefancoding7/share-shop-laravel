<?php

namespace App\Models;
use App\Models\Item;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ShopList extends Model
{
    use HasFactory;

    protected $table = 'shop_lists';

    protected $primaryKey = 'id';


    protected $fillable = [
        'shopListName',
        'slug'
    ];

    public function items()
    {
        return $this->hasMany(Item::class)->orderBy('completed', 'ASC');
    }
    
}
