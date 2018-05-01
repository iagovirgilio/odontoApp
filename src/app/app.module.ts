import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { PrincipalPage } from '../pages/principal/principal';
import { LoginPage } from '../pages/login/login';
import { OrientaODeHigieneBucalPage } from '../pages/orienta-ode-higiene-bucal/orienta-ode-higiene-bucal';
import { SignupPage } from '../pages/signup/signup';
import { DoenAsBucalPage } from '../pages/doen-as-bucal/doen-as-bucal';
import { CRiePage } from '../pages/c-rie/c-rie';
import { PeriodontalPage } from '../pages/periodontal/periodontal';
import { HalitosePage } from '../pages/halitose/halitose';
import { CNcerDeBocaPage } from '../pages/c-ncer-de-boca/c-ncer-de-boca';
import { AutoExamePage } from '../pages/auto-exame/auto-exame';
import { VerdadeOuMentiraPage } from '../pages/verdade-ou-mentira/verdade-ou-mentira';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    PrincipalPage,
    LoginPage,
    OrientaODeHigieneBucalPage,
    SignupPage,
    DoenAsBucalPage,
    CRiePage,
    PeriodontalPage,
    HalitosePage,
    CNcerDeBocaPage,
    AutoExamePage,
    VerdadeOuMentiraPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    PrincipalPage,
    LoginPage,
    OrientaODeHigieneBucalPage,
    SignupPage,
    DoenAsBucalPage,
    CRiePage,
    PeriodontalPage,
    HalitosePage,
    CNcerDeBocaPage,
    AutoExamePage,
    VerdadeOuMentiraPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}