import {EstadoTarefa} from "../model/estado-tarefa";
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class LovProvider {

  getTareStates():Array<EstadoTarefa>{
    return [EstadoTarefa.NOVA, EstadoTarefa.EXECUTANDO, EstadoTarefa.FINALIZADA]
  }
}
