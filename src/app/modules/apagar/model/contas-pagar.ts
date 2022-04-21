export interface ContasPagar {

    id?: string;
    dataVencimento?: Date;
    dataPagamento?: Date;
    valorDuplicata?:number;
    jurosMulta?:number;
    valorPago?:number;
    desconto?:number;
    fornecedor?:String;
    nd?:string;
    parcela?:String;
    localPagamento?:String;
    formaPagamento?:String;
    tipoDespesa?:String;
    classificacao?:String;
    subClassificacao?:String;
    situacao?:String;
    observacao?:String;
    isAprovado?:Boolean;
    isPedirBoleto?:Boolean;
    numeroParcelas?:number;
    empresa_id?:String;
    nomeEmpresa?: String;


}
