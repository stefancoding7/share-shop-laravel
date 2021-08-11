<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\ShopList;
use App\Models\Item;
use App\Models\User;
use App\Http\Resources\Items as ItemsResource;
use App\Http\Resources\ItemsCollection;
use Throwable;

class ItemController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        
        // $id = 1;
        // $shopList = ShopList::find($id);
        // $items = $shopList->items;
        
        // return response()->json($items);
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

        $user = auth()->user();
        $error = array();
        if($user){
            try{
                    $shopList = ShopList::find($id);
                    $userAllShopList = $shopList->items;
                    $userAllShopList = $userAllShopList->where('user_id', $user->id);
                    $items = $userAllShopList;
                   
                    $data = $items;
                    return response()->json($data);
                    // $shopList = ShopList::find($id);
                    // $items = $shopList->items;
                    // $items = $items->where('user_id', '=', $user->id);
                    // $count = $items->count();
                    // if($count >= 1) {
                    //     $data = $items;
                    //     return response()->json($data);
                    // } else {
                    //     array_push($error, "Items not found");
                    //     return response()->json([
                    //             'error' => $error
                    //         ]);
                    // }
                    
               
               
        
           
            } catch(Throwable $e) {
                array_push($error, "Items not found");
                return response()->json([
                            
                                'error' => $error
                            ]); 
            }
            // $shopList = ShopList::find($id);
            
            // if($shopList) {

            //     $items = $shopList->items->where('user_id', $user->id);
            //     if($items) {
            //         $data = $items;
            //         return response()->json($data);
            //     } else {
            //        return response()->json([
            //             'error' => ['Item not found']
            //         ]); 
            //     }
               
        
            // } else {
            //     return response()->json([
            //         'error' => ['Item not found']
            //     ]);
            // }
        }
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
        $item = Item::find($id);
        if(!$item->completed){
           $item->completed = true;
           
            $item->update();
        } else {
            $item->completed = false;
           
            $item->update();
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $item = Item::find($id);
        return $item->delete();
    }

    public function addItems(Request $request, $id)
    {
        $user_id = auth()->user()->id;
        $tags = $request->tags;
        $shop_list_id =  $id;
       

        if(is_array($tags)){
            foreach($tags as $tag){
                $item = new Item();
                $item->tags = $tag;
                $item->shop_list_id = $shop_list_id;
                $item->user_id = $user_id;
                $item->save();
                
                
            }
        } else {
            return response()->json([
                'tags' => $tags,
                'message' =>'Is not array'
            ]);
        }
    }
}
