import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {Tarefa} from '../model/tarefa';
import firebase from 'firebase';
import { LoginProvider } from './login-provider';
/*
  Generated class for the TarefaProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class TarefaProvider {

  reference;
  constructor(public http: Http, public loginProvider:LoginProvider) {
    console.log('Hello TarefaProvider Provider');
    this.initialize();
  }
  private initialize(){
    this.reference = firebase.database().ref(this.loginProvider.currentUser.uid+'/tarefas/');
  }

  adicionar(tarefa:Tarefa){

  }
  save(tarefa:Tarefa){
    console.log('chegou');
    let refKey;
    if (tarefa.keyReference != undefined) {
        //atualiza
        refKey = tarefa.keyReference;
    }else{
      //adiciona
      refKey = this.reference.push().key;
      tarefa.keyReference = refKey;
    }
    this.reference.child(refKey).update(tarefa);
  }

  deletar(tarefa:Tarefa):any{
    return this.reference.child(tarefa.keyReference).remove();
  }
}
