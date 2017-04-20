import {Injectable} from "@angular/core";
import {RESTAURANTS} from "./mock-restaurants";
import {CategoryService} from "./category-service";
import {ItemService} from "./item-service";

@Injectable()
export class RestaurantService {
  private restaurants:any;

  constructor(public categoryService:CategoryService, public itemService: ItemService) {
    this.restaurants = RESTAURANTS;
  }

  getAll() {
    for (let i = 0; i < this.restaurants.length; i++) {
      this.restaurants[i].categories = [];

      // bind category name to restaurant
      for (let j = 0; j < this.restaurants[i].category_ids.length; j++) {
        this.restaurants[i].categories.push(this.categoryService.getItem(this.restaurants[i].category_ids[j]));
      }
    }

    return this.restaurants;
  }

  getItem(id) {
    let restaurant,
        cat,
        items = this.itemService.getAll();

    for (let i = 0; i < this.restaurants.length; i++) {
      // if id is the id we are finding
      if (this.restaurants[i].id === parseInt(id)) {
        restaurant = this.restaurants[i];
        restaurant.categories = [];
        restaurant.items = [];

        // bind category name to restaurant
        for (let j = 0; j < restaurant.category_ids.length; j++) {
          cat = this.categoryService.getItem(restaurant.category_ids[j]);
          cat.items = [];

          // bind items to category
          for (let k = 0; k < items.length; k++) {
            if (items[k].restaurant_id == restaurant.id && items[k].category_id == cat.id) {
              cat.items.push(items[k]);
            }
          }

          // push category to item
          restaurant.categories.push(cat);
        }

        return restaurant;
      }
    }
    return null;
  }

  remove(item) {
    this.restaurants.splice(this.restaurants.indexOf(item), 1);
  }
}
