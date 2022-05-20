import { ParcelaPagamento } from './parcelaPagamento';
export interface Pagamento{
  id: string;
  valorPagamento: number;
  qntddParcelas:number;
  intervaloParcelas:number;
  dataPrimeiraParcela: string;
  avistaParcelado:string;
  xml: string;
  notaFiscal:string;
  parcelasPagamento:ParcelaPagamento[];
}
