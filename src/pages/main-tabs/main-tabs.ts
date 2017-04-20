import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {HomePage} from "../home/home";
import {SearchPage} from "../search/search";
import {OrderPage} from "../order/order";
import {UserPage} from "../user/user";
import {ItemPage} from "../item/item"


/*
  Generated class for the LoginPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-main-tabs',
  templateUrl: 'main-tabs.html',
})
export class MainTabsPage {
  home: any;
  order: any;
  account: any;

  constructor(public nav: NavController) {
    this.home = ItemPage;
    this.order = OrderPage;
    this.account = UserPage;
  }
}