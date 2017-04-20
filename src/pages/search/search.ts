import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

import {CategoryService} from '../../services/category-service';
import {RestaurantService} from "../../services/restaurant-service";

/*
  Generated class for the LoginPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {
  categories: any;
  keyword = null;
  showResults = false;
  restaurants = [];

  constructor(public nav: NavController, public categoryService: CategoryService,
              public restaurantService: RestaurantService) {
    // set categories from service provider
    this.categories = categoryService.getAll();
  }

  // filter list categories
  filterCat(ev: any) {
    this.categories = this.categoryService.getAll();

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.categories = this.categories.filter((item) => {
        return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  // clear filter
  clearFilter(ev: any) {
    this.categories = this.categoryService.getAll();
    this.showResults = false;
    this.keyword = null;
  }

  // search by keyword
  search(keyword) {
    this.keyword = keyword;
    this.restaurants = this.restaurantService.getAll();
    this.showResults = true;
  }
}