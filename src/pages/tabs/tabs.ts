import { Component } from '@angular/core';
import { CartPage } from "../cart/cart";
import { LoginPage } from '../login/login';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = CartPage;
  tab3Root = LoginPage;

  constructor() {  
  }
}
