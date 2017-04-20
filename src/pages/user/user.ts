import {Component} from '@angular/core';
import {NavController, App} from 'ionic-angular';
import {PaymentPage} from "../payment/payment";
import {HelpPage} from "../help/help";
import {PromotionsPage} from "../promotions/promotions";
import {SettingsPage} from "../settings/settings";


/*
  Generated class for the LoginPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-user',
  templateUrl: 'user.html',
})
export class UserPage {
  // username
  username = 'Bruce Zhang';

  constructor(public nav: NavController, public app: App) {}

  // got to payment setting
  goToPayment() {
    this.app.getRootNav().push(PaymentPage);
  }

  // go to help page
  goToHelp() {
    this.app.getRootNav().push(HelpPage);
  }

  // go to promotion page
  goToPromo() {
    this.app.getRootNav().push(PromotionsPage)
  }

  // go to setting page
  goToSetting() {
    this.app.getRootNav().push(SettingsPage)
  }
}