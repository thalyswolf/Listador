import {TranslateService} from "ng2-translate";
import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { TarefasListPage } from '../pages/tarefas-list/tarefas-list';
import { LinguagemPage } from '../pages/linguagem/linguagem';
import { LoginPage } from '../pages/login/login';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav:Nav;
  rootPage = LoginPage;
  menuSections:Array<{title:string, component:any}>
  constructor(platform: Platform, transService:TranslateService) {
    platform.ready().then(() => {
      transService.setDefaultLang("pt_BR");
      transService.use(localStorage.getItem('usedLanguage'));
      StatusBar.styleDefault();
      Splashscreen.hide();
      this.menuSections = [
        {title:'global.pages.tarefas.title', component: TarefasListPage},
        {title: 'global.pages.linguagem.title', component: LinguagemPage}
      ]
    });
  }
  navToComponent(component:any){
    this.nav.setRoot(component);
  }
}
