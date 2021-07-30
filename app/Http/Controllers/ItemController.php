<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\ShopList;
use App\Models\Item;
use App\Http\Resources\Items as ItemsResource;
use App\Http\Resources\ItemsCollection;

class ItemController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        
        $id = 1;
        $shopList = ShopList::find($id);
        $items = $shopList->items;
        
        return response()->json($items);
        // return response()->json([
        //     'items' => ['chlieb', 'maslo', 'mlieko']
        // ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $shopList = ShopList::find($id);
        $items = $shopList->items;
        $data = $items;

        return response()->json($data);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
