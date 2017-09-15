import { Component } from '@angular/core';
import { CartPage } from "../cart/cart";
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
//import {AddToCartProvider} from "../../providers/add-to-cart/add-to-cart";
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = CartPage;
  tab3Root = ContactPage;

  constructor() {

  
  }
 
}
