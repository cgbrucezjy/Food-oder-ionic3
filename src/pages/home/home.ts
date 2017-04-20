import {Component} from '@angular/core';
import {App} from 'ionic-angular';

import {RestaurantService} from '../../services/restaurant-service';
import {RestaurantPage} from "../restaurant/restaurant";

/*
  Generated class for the LoginPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  banner = 'assets/img/banner.png';
  restaurants: any;

  constructor(public app: App, public restaurantService: RestaurantService) {
    this.restaurants = restaurantService.getAll();
  }

  // view restaurant detail
  viewRestaurant(id) {
    this.app.getRootNav().push(RestaurantPage, {id: id})
  }
}