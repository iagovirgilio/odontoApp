import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { PrincipalPage } from '../principal/principal';
import { OrientaODeHigieneBucalPage } from '../orienta-ode-higiene-bucal/orienta-ode-higiene-bucal';
import { DoenAsBucalPage } from '../doen-as-bucal/doen-as-bucal';
import { CRiePage } from '../c-rie/c-rie';
import { PeriodontalPage } from '../periodontal/periodontal';
import { HalitosePage } from '../halitose/halitose';
import { CNcerDeBocaPage } from '../c-ncer-de-boca/c-ncer-de-boca';
import { AutoExamePage } from '../auto-exame/auto-exame';
import { VerdadeOuMentiraPage } from '../verdade-ou-mentira/verdade-ou-mentira';

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignupPage {

  constructor(public navCtrl: NavController) {
  }
  goToLogin(params){
    if (!params) params = {};
    this.navCtrl.push(LoginPage);
  }goToPrincipal(params){
    if (!params) params = {};
    this.navCtrl.push(PrincipalPage);
  }goToOrientaODeHigieneBucal(params){
    if (!params) params = {};
    this.navCtrl.push(OrientaODeHigieneBucalPage);
  }goToDoenAsBucal(params){
    if (!params) params = {};
    this.navCtrl.push(DoenAsBucalPage);
  }goToCRie(params){
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
  }goToVerdadeOuMentira(params){
    if (!params) params = {};
    this.navCtrl.push(VerdadeOuMentiraPage);
  }goToSignup(params){
    if (!params) params = {};
    this.navCtrl.push(SignupPage);
  }
}
