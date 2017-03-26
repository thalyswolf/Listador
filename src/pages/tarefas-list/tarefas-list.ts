import {NgZone} from "@angular/core/src/zone/ng_zone";
import {TarefaProvider} from "../../providers/tarefa-provider";
import {Tarefa} from "../../model/tarefa";
import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import {TarefasAddPage} from '../tarefas-add/tarefas-add';
@Component({
  selector: 'page-tarefas-list',
  templateUrl: 'tarefas-list.html'
})
export class TarefasListPage {
  tarefas:Array<Tarefa>;
  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     public tarefasProvider: TarefaProvider,
     public ngZone:NgZone,
     public toastCtrl:ToastController) {
       //value escuta todas as alterações
       // child_removed escuta filho removido
       //child_added pra quando um filho for add
       //child_changed
       this.tarefasProvider.reference.on('child_removed', (snapshot)=>{
         let tarefaRemovida = snapshot.val();
         this.toastCtrl.create({
           message: 'Tarefa '+tarefaRemovida.titulo+' foi removida',
           duration: 3000
         }).present();
       })
       this.tarefasProvider.reference.on('value', (snapshot) => {
         this.ngZone.run(() => {
           //firebase retorna um objeto esse metodo coloca o objeto dentor do array
           let innerArray = new Array();
           snapshot.forEach(elemento => {
             let el = elemento.val();
             innerArray.push(el);
           })
           this.tarefas=innerArray;
         })
       })
  }

  ionViewDidLoad() {


  }
  adicionarTarefas(){
      this.navCtrl.push(TarefasAddPage, {'tarefa' : new Tarefa()});
  }
  atualizarTarefa(tarefa:Tarefa){
    this.navCtrl.push(TarefasAddPage, {'tarefa':tarefa})
  }
  deletarTarefa(tarefa:Tarefa){
    this.tarefasProvider.deletar(tarefa).then(
      success => console.log('Tarefa deletada')).catch(
        falha => console.log('Falho erro: '+falha)
      );
  }

}
