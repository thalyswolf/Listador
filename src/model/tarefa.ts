import {EstadoTarefa} from './estado-tarefa'
export class Tarefa{
  keyReference:number;
  titulo:string;
  descricao?:string;
  state:EstadoTarefa;
}
