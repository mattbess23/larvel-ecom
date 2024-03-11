<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PagesController extends Controller
{
    //Home
    public function home()
    {
        echo "Home";
    }

    //Cart
    public function cart()
    {
        echo "Cart";
    }
}
