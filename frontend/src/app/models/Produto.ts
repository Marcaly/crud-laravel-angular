export default interface Produto {
    id: number;
    nome_produto: string;
    categoria_id: number;
    valor_produto: number;
    data_vencimento: Date;
    quantidade_estoque: number;
    produto_perecivel: boolean;

}
