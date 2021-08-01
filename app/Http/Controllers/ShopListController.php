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
        $shopList = new ShopList();
        $shopList->shopListName = $request->shopListName;
        $shopList->slug = $request->slug;
        $shopList->save();
        $shop_list_id = $shopList->id;


        
        $tags = $request->tags;
        if(is_array($tags)){
            foreach($tags as $tag){
                $item = new Item();
                $item->tags = $tag;
                $item->shop_list_id = $shop_list_id;
                $item->save();
                
                
            }
        } else {
            return response()->json([
                'tags' => $tags,
                'message' =>'Is not array'
            ]);
        }

       return response()->json([
            'id' => $shop_list_id
        ]);
        
        
    //    ShopList::create([
    //         'shopListName' => $request->shopListName,
    //         'slug' => $request->slug
    //     ]);

       // $shopListId = $shoplist->id();
        

        // Item::create([
        //     'tags' => $request->tags,
        //     'shop_list_id' =>  5
        // ]);

        //loop on tags
        // $tags = $request->tags;
        // foreach($tags as $tag){
        //     Item::create([
        //         'tags' => $tag,
        //         'shop_list_id' =>  $shopListId
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
       
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $shopList = ShopList::find($id);
        // $shopList->items()->each(function($item) {
        //     $item->delete(); // <-- raise another deleting event on Post to delete comments
        //  });
       $shopList->items()->delete();
       $shopList->delete();
    }

    public function complete($id) 
    {
       
    }
}
