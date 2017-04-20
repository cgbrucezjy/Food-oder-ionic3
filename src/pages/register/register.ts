import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {MainTabsPage} from "../main-tabs/main-tabs";


/*
  Generated class for the LoginPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  constructor(public nav: NavController) {}

  // register
  signUp() {
    // TODO add your code here
    this.nav.setRoot(MainTabsPage);
  }
}
