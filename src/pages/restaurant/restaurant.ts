import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';

import {RestaurantService} from '../../services/restaurant-service';
import {ItemPage} from "../item/item";

/*
  Generated class for the LoginPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-restaurant',
  templateUrl: 'restaurant.html',
})
export class RestaurantPage {
  restaurant: any;

  constructor(public nav: NavController, public restaurantService: RestaurantService, public navParams: NavParams) {
    this.restaurant = restaurantService.getItem(navParams.get('id'));
  }

  // view item
  viewItem(id) {
    this.nav.push(ItemPage, {id: id});
  }
}