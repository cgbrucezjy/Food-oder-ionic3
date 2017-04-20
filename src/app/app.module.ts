import {NgModule} from '@angular/core';
import {IonicApp, IonicModule} from 'ionic-angular';
import {MyApp} from './app.component';

// import services
import {CategoryService} from '../services/category-service';
import {ItemService} from '../services/item-service';
import {OrderService} from '../services/order-service';
import {RestaurantService} from '../services/restaurant-service';
import {CartService} from '../services/cart-service';
// end import services

// import pages
import {AboutPage} from '../pages/about/about';
import {HelpPage} from '../pages/help/help';
import {HomePage} from '../pages/home/home';
import {LoginPage} from '../pages/login/login';
import {MainTabsPage} from '../pages/main-tabs/main-tabs';
import {OrderPage} from '../pages/order/order';
import {PaymentPage} from '../pages/payment/payment';
import {PromotionsPage} from '../pages/promotions/promotions';
import {RegisterPage} from '../pages/register/register';
import {SearchPage} from '../pages/search/search';
import {SettingsPage} from '../pages/settings/settings';
import {UserPage} from '../pages/user/user';
import {WelcomePage} from '../pages/welcome/welcome';
import {RestaurantPage} from '../pages/restaurant/restaurant';
import {ItemPage} from '../pages/item/item';
import {CartPage} from '../pages/cart/cart';
// end import pages

//pipes
import {SafePipe} from './safePipe';
@NgModule({
  declarations: [
    SafePipe,
    MyApp,
    AboutPage,
    HelpPage,
    HomePage,
    LoginPage,
    MainTabsPage,
    OrderPage,
    PaymentPage,
    PromotionsPage,
    RegisterPage,
    SearchPage,
    SettingsPage,
    UserPage,
    WelcomePage,
    RestaurantPage,
    ItemPage,
    CartPage,
    /* import pages */
  ],
  imports: [
      IonicModule.forRoot(MyApp,{mode: 'md'})
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    HelpPage,
    HomePage,
    LoginPage,
    MainTabsPage,
    OrderPage,
    PaymentPage,
    PromotionsPage,
    RegisterPage,
    SearchPage,
    SettingsPage,
    UserPage,
    WelcomePage,
    RestaurantPage,
    ItemPage,
    CartPage,
    /* import pages */
  ],
  providers: [
    CategoryService,
    ItemService,
    OrderService,
    RestaurantService,
    CartService,
    /* import services */
  ]
})
export class AppModule {
}
