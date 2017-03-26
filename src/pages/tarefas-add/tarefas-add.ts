import {TarefaProvider} from "../../providers/tarefa-provider";
import {LovProvider} from "../../providers/lov-provider";
import {Tarefa} from "../../model/tarefa";
import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { TarefasListPage } from '../tarefas-list/tarefas-list';

@Component({
  selector: 'page-tarefas-add',
  templateUrl: 'tarefas-add.html'
})

export class TarefasAddPage {
  tarefa:Tarefa;

  constructor(public navCtrl: NavController, public navParams: NavParams, public NavParams:NavParams,
              public lovProvider:LovProvider, public tarefaProvider:TarefaProvider, public viewCtrl:ViewController) {
      //this.navCtrl.setRoot(TarefasListPage)
      console.log('ionViewDidLoad TarefasAddPage');
      this.tarefa = this.navParams.get('tarefa');
      if(!this.tarefa){
        this.tarefa = new Tarefa();
      }

  }

  ionViewDidLoad() {

  }
  salvarTarefa(){
    console.log('Aqui');
    this.tarefa.state = 1;
    this.tarefaProvider.save(this.tarefa);
    this.viewCtrl.dismiss();
  }
}
