import {Credencial} from "../../model/credencial";
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {LoginProvider} from '../../providers/login-provider'
/*
  Generated class for the Registrar page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-registrar',
  templateUrl: 'registrar.html'
})
export class RegistrarPage {
  credencial:Credencial;
  constructor(public navCtrl: NavController, public navParams: NavParams, public loginProvider:LoginProvider) {
    this.credencial = new Credencial();
  }

  doRegister(){
    this.loginProvider.registrarUsuario(this.credencial);
  }
}
