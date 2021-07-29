<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Item extends Model
{
    use HasFactory;

    protected $table = 'items';

    protected $primaryKey = 'id';

    protected $fillable = [
        'tags',
        'shop_list_id'
    ];

    public function shop_lists()
    {
        return $this->belongsTo(ShopList::class);
    }
}
