<?php

namespace App\Http\Controllers;
use App\Models\ShopList;
use App\Models\Item;
use Illuminate\Http\Request;

class ShopListController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return ShopList::all();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        
        ShopList::create([
            'shopListName' => $request->shopListName,
            'slug' => $request->slug
        ]);

        Item::create([
            'tags' => 'hello'
        ]);

        //loop on tags
        // $tags = $request->tags;
        // foreach($tags as $tag){
        //     Item::create([
        //         'tags' => $tag
        //     ]);
        // }
       
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
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
