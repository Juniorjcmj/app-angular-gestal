export interface ParcelaPagamento{
  id:string;
  numeroParcela:string;
  valorParcela:number;
  vencimento: string;
  numeroDocumento:string;
  observacao: string;
  boleto: string;
  formaPagamento:string;
  statusPagamento:string;
}
