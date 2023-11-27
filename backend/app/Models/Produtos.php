<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Produtos extends Model
{
    protected $fillable = [
        'nome_produto', 'categoria_id', 'valor_produto', 'data_vencimento', 'quantidade_estoque', 'produto_perecivel',
    ];
    protected $table = 'produtos';
}
