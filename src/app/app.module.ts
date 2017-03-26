import {LovProvider} from "../providers/lov-provider";
import {TarefaProvider} from "../providers/tarefa-provider";
import {Http} from '@angular/http';
import { LinguagemPage } from '../pages/linguagem/linguagem';
import {TranslateModule, TranslateStaticLoader, TranslateLoader} from 'ng2-translate';
import {LoginProvider} from "../providers/login-provider";
import { NgModule,ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { RegistrarPage } from '../pages/registrar/registrar';
import { TarefasListPage } from '../pages/tarefas-list/tarefas-list';
import { TarefasAddPage } from '../pages/tarefas-add/tarefas-add';
import {TarefaListItemComponent} from '../components/tarefa-list-item/tarefa-list-item'
import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyC0k7fYcUEUHZNo9CtE7WTL6Zg35kJyb4Y",
    authDomain: "listador-de-tarefas-1ae9e.firebaseapp.com",
    databaseURL: "https://listador-de-tarefas-1ae9e.firebaseio.com",
    storageBucket: "listador-de-tarefas-1ae9e.appspot.com",
    messagingSenderId: "426614268989"
  };

export function createTranslateLoader(http:Http){
  return new TranslateStaticLoader(http, './assets/i18n', '.json')
}

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    RegistrarPage,
    TarefasListPage,
    TarefasAddPage,
    TarefaListItemComponent,
    LinguagemPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    TranslateModule.forRoot({
      provide:TranslateLoader,
      useFactory:(createTranslateLoader),
      deps:[Http]
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    RegistrarPage,
    TarefasListPage,
    TarefasAddPage,
    LinguagemPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, LoginProvider, TarefaProvider, LovProvider]
})
export class AppModule {
  constructor(){
    firebase.initializeApp(firebaseConfig);
  }
}
