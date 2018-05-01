import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CRiePage } from '../c-rie/c-rie';
import { PeriodontalPage } from '../periodontal/periodontal';
import { HalitosePage } from '../halitose/halitose';
import { CNcerDeBocaPage } from '../c-ncer-de-boca/c-ncer-de-boca';
import { AutoExamePage } from '../auto-exame/auto-exame';

@Component({
  selector: 'page-doen-as-bucal',
  templateUrl: 'doen-as-bucal.html'
})
export class DoenAsBucalPage {

  constructor(public navCtrl: NavController) {
  }
  goToCRie(params){
    if (!params) params = {};
    this.navCtrl.push(CRiePage);
  }goToPeriodontal(params){
    if (!params) params = {};
    this.navCtrl.push(PeriodontalPage);
  }goToHalitose(params){
    if (!params) params = {};
    this.navCtrl.push(HalitosePage);
  }goToCNcerDeBoca(params){
    if (!params) params = {};
    this.navCtrl.push(CNcerDeBocaPage);
  }goToAutoExame(params){
    if (!params) params = {};
    this.navCtrl.push(AutoExamePage);
  }
}
