import {Credencial} from "../../model/credencial";
import {LoginProvider} from "../../providers/login-provider";
import {RegistrarPage} from "../registrar/registrar";
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TarefasListPage} from '../tarefas-list/tarefas-list'
/*
  Generated class for the Login page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  credencial:Credencial;
  constructor(public navCtrl: NavController, public navParams: NavParams, public loginProvider:LoginProvider) {
    this.credencial = new Credencial();
  }
  ionViewDidEnter() {
  
  }
  ionViewDidLoad() {


    console.log('ionViewDidLoad LoginPage');
    this.loginProvider.loginSuccessEventEmitter.subscribe(
      user => this.navCtrl.setRoot(TarefasListPage))
      this.loginProvider.loginFalhaEventEmitter.subscribe(error=>console.log(error))
  }
  loginComCredencial(){
    this.loginProvider.loginComCredencial(this.credencial)
  }
  loginComFacebook(){
    this.loginProvider.loginComFacebook();
  }
  loginComGoogle(){
    this.loginProvider.loginComGoogle();
  }
  doRegister(){
    this.navCtrl.push(RegistrarPage);
  }
  sair(){
    this.loginProvider.sair();
  }
}
