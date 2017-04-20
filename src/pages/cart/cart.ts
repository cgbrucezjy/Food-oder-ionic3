import {Component} from '@angular/core';
import {NavController, ToastController} from 'ionic-angular';

import {CartService} from '../../services/cart-service';
import {MainTabsPage} from "../main-tabs/main-tabs";

/*
  Generated class for the LoginPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html',
})
export class CartPage {
  cart: any;

  constructor(public nav: NavController, public cartService: CartService, public toastCtrl: ToastController) {
    // set sample data
    this.cart = cartService.getCart();
  }

  // send order
  sendOrder() {
    let toast = this.toastCtrl.create({
      message: 'Order sent',
      duration: 3000,
      position: 'middle'
    });

    toast.present();
    this.nav.setRoot(MainTabsPage);
  }
}