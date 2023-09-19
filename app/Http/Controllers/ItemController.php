<?php

namespace App\Http\Controllers;

use App\Models\Item;
use App\Models\Unit;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ItemController extends Controller
{
    //
    public function index(){
        $items = Item::query()
            ->get();

        return Inertia::render('Items/Index',[
            'items'=>$items,
        ]);
    }
    public function create()
    {
        $units = Unit::query()
            ->get(['id','name']);
        return Inertia::render('Items/Create',[
            'units'=>$units
        ]);
    }
}
