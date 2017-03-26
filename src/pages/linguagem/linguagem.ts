import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TranslateService} from 'ng2-translate';
/*
  Generated class for the Linguagem page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-linguagem',
  templateUrl: 'linguagem.html'
})
export class LinguagemPage {
  linguagem:Array<{label:string, key:string}>
  constructor(public navCtrl: NavController, public navParams: NavParams, public tranlateService:TranslateService) {}


  ionViewDidLoad() {
    console.log('ionViewDidLoad LinguagemPage');
    this.linguagem=[{
      label:'global.labels.pt_BR',
      key:'pt_BR'
    },
    {
      label:'global.labels.en_US',
      key:'en_US'
    }]
  }
  isSelectedLinguagem(key:string){
    return localStorage.getItem('usedLanguage')==key;
  }
  selecionarLinguagem(key:string){

    localStorage.setItem('usedLanguage', key);
    this.tranlateService.use(key);

  }
}
