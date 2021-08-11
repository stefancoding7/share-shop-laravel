<?php

namespace App\Models;
use App\Models\Item;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ShopList extends Model
{
    use HasFactory;

   

    protected $primaryKey = 'id';


    protected $fillable = [
        'shopListName',
        'slug'
    ];

    public function items()
    {
        return $this->hasMany(Item::class)->orderBy('completed', 'ASC');
    }

    public function users()
    {
        return $this->belongsTo(Users::class);
    }
    
}
