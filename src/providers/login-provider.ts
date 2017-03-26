
import {Credencial} from "../model/credencial";
import { Injectable, EventEmitter, NgZone } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import firebase from 'firebase';

@Injectable()
export class LoginProvider {
  currentUser:any;
  autenticado:boolean;
  loginSuccessEventEmitter:EventEmitter<any>;
  loginFalhaEventEmitter:EventEmitter<any>;
  logoutEventEmitter:EventEmitter<any>;
  constructor(public http: Http, public ngZone: NgZone) {
    this.loginSuccessEventEmitter = new EventEmitter();
    this.loginFalhaEventEmitter = new EventEmitter();
    this.logoutEventEmitter = new EventEmitter();
    firebase.auth().onAuthStateChanged(usuario =>{
      this.callbackStateChange(usuario);
    })
  }

  private callbackStateChange(usuario){
    this.ngZone.run( () =>{
      if(usuario==null){
        this.currentUser = null;
        this.autenticado = false;
      }else{
        this.currentUser = usuario;
        this.autenticado = true;
      }
    })
  }
  loginComCredencial(credencial:Credencial){
    firebase.auth().signInWithEmailAndPassword(credencial.email, credencial.senha)
    .then(resultado => this.callbackSuccessLogin(resultado)).catch(
      error => this.callbackFailLogin(error)
    )
  }
  loginComGoogle(){
    let provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithPopup(provider)
      .then(resultado => this.callbackSuccessLogin(resultado)).catch(
      error => this.callbackFailLogin(error)
    )
  }
  loginComFacebook(){
    let provider = new firebase.auth.FacebookAuthProvider();
    return firebase.auth().signInWithPopup(provider)
    .then(result =>this.callbackSuccessLogin(result)).catch(error => this.callbackFailLogin(error))
  }
  registrarUsuario(credencial:Credencial){
    firebase.auth().createUserWithEmailAndPassword(credencial.email,credencial.senha).then(
      result => console.log(result)
    ).catch(
      error => console.log(error)
    );
  }
  private callbackSuccessLogin(response){
    this.loginSuccessEventEmitter.emit(response.user);
  }
  private callbackFailLogin(error){
    this.loginFalhaEventEmitter.emit({code : error.code, message : error.message, email : error.email, credencial : error.credencial, senha : error.senha});
  }
  sair(){
    firebase.auth().signOut().then(resultado => this.logoutEventEmitter.emit(true)).catch(
      error => this.callbackFailLogin(error)
    )
  }
}
