<?php

namespace App\Http\Controllers;
use App\Models\Produtos;
use Illuminate\Http\Request;

class ProdutosController extends Controller
{

    public function index()
    {
        $produtos = Produtos::all();
        return response()->json($produtos);
    }

    
    public function store(Request $request)
    {
        $produtos = Produtos::create($request->all());
        return response()->json($produtos, 201);
    }

    public function show(string $id)
    {
        $produtos = Produtos::findOrFail($id);
        return response()->json($produtos);
    }

  
    public function update(Request $request, string $id)
    {
        $produtos = Produtos::findOrFail($id);
        $produtos->update($request->all());
        return response()->json($produtos, 200);
    }

    
    public function destroy(string $id)
    {
      $produtos = Produto::findOrFail($id);
      $produtos->delete();
      return response()->json(null, 204);  
    }
}
