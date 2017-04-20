import {Component,ViewChild,trigger, state, style, transition, animate, keyframes} from '@angular/core';
import {NavController, ToastController,Scroll} from 'ionic-angular';
import { DomSanitizer} from '@angular/platform-browser';

import {ItemService} from '../../services/item-service';
import {CartPage} from "../cart/cart";

/*
  Generated class for the LoginPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-item',
  templateUrl: 'item.html',
  animations: [
    trigger('bounce', [
      state('bouncing', style({
        transform: 'translate3d(0,0,0)'
      })),
      transition('* => bouncing', [
        animate('300ms ease-in', keyframes([
          style({transform: 'translate3d(0,0,0)', offset: 0}),
          style({transform: 'translate3d(-10px,0,0)', offset: 0.2}),
          style({transform: 'translate3d(0px,0,0)', offset: 0.4}),
          style({transform: 'translate3d(10px,0,0)', offset: 0.6}),
          style({transform: 'translate3d(0px,0,0)', offset: 1})  
        ]))
      ]),
      transition('bouncing =>*', [
        animate('300ms ease-in', keyframes([
          style({transform: 'translate3d(0,0,0)', offset: 0}),
          style({transform: 'translate3d(-10px,0,0)', offset: 0.2}),
          style({transform: 'translate3d(0px,0,0)', offset: 0.4}),
          style({transform: 'translate3d(10px,0,0)', offset: 0.6}),
          style({transform: 'translate3d(0px,0,0)', offset: 1})  
        ]))
      ])
    ])
 
  ]
})
export class ItemPage {
  item: any;
  items: any;
  quantity = 1;
  bounceState: String = 'noBounce';
  @ViewChild(Scroll) content: Scroll;

  constructor(public nav: NavController, public itemService: ItemService, public toastCtrl: ToastController,private sanitizer: DomSanitizer) {
    // set data for item
    
    this.items = itemService.getAll();
    this.item = itemService.getItem(1);
  }

  transform(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
  // plus quantity
  plusQty() {
    this.quantity++;
  }

  // minus quantity
  minusQty() {
    if (this.quantity > 1)
      this.quantity--;
  }

  // add item to cart
  addCart() {
    let toast = this.toastCtrl.create({
      message: 'Item added to cart',
      duration: 3000,
      position: 'middle'
    });

    toast.present();
  }

  // go to cart page
  goToCart() {
    this.nav.push(CartPage);
  }

  toggleBounce(id,event){
    this.item.color="light";
    this.item = this.itemService.getItem(id);
    this.item.color="secondary";
    this.item.bounceState = (!this.item.bounceState ||  this.item.bounceState == 'noBounce') ? 'bouncing' : 'noBounce'; 
    console.log(event.target.parentElement.offsetLeft);
    console.log(this.content.scrollElement);
    this.content.scrollElement.scrollLeft=event.target.parentElement.offsetLeft-10;
  }
 
}