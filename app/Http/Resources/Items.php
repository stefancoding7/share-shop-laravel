<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use App\Models\ShopList;
use App\Models\Item;

class Items extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id'         => $this->id,
            'tags'       => $this->tags,
            'shop_list_id'    => (int) $this->answers,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
        ];
    }
}
