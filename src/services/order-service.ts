import {Injectable} from "@angular/core";
import {ORDERS} from "./mock-orders";
import {RestaurantService} from "./restaurant-service";

@Injectable()
export class OrderService {
  private orders:any;

  constructor(public restaurantService: RestaurantService) {
    this.orders = ORDERS;
  }

  getAll() {
    for (let i = 0; i < this.orders.length; i++) {
      this.orders[i].restaurant = this.restaurantService.getItem(this.orders[i].restaurant_id);
    }
    return this.orders;
  }

  getItem(id) {
    for (let i = 0; i < this.orders.length; i++) {
      if (this.orders[i].id === parseInt(id)) {
        this.orders[i].restaurant = this.restaurantService.getItem(this.orders[i].restaurant_id);
        return this.orders[i];
      }
    }
    return null;
  }

  remove(item) {
    this.orders.splice(this.orders.indexOf(item), 1);
  }
}