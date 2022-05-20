import { Proposta } from './proposta';
import { Cotacao } from './cotacao';
export interface Compra{

  id:string;
  data:string;
  valorTotal: number;
  descricao:string;
  status:string;
  prioridade:string;
  dataAtualizacao:string;
  dataCriacao: string;
}
