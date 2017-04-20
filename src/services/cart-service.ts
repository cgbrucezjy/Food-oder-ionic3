import {Injectable} from "@angular/core";
import {CART} from "./mock-carts";
import {RestaurantService} from "./restaurant-service";

@Injectable()
export class CartService {
  private cart:any;

  constructor(public restaurantService: RestaurantService) {
    this.cart = CART;
  }

  getCart() {
    this.cart.restaurant = this.restaurantService.getItem(this.cart.restaurant_id);
    return this.cart;
  }

  getItem(id) {
    for (let i = 0; i < this.cart.items.length; i++) {
      if (this.cart.items[i].id === parseInt(id)) {
        return this.cart.items[i];
      }
    }
    return null;
  }

  remove(item) {
    this.cart.items.splice(this.cart.items.indexOf(item), 1);
  }
}
