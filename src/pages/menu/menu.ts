import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController } from 'ionic-angular';
import {AccordianComponent} from '../../components/accordian/accordian';
import {ItemgridComponent} from '../../components/itemgrid/itemgrid';
import {BasiccardComponent} from '../../components/basiccard/basiccard';
import {ImagecardComponent} from '../../components/imagecard/imagecard';
import { AddToCartProvider } from "../../providers/add-to-cart/add-to-cart";

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {
  restaurant : any;
  mealType : string;
  
  constructor(public navCtrl: NavController, public add:AddToCartProvider, public navParams: NavParams,public mdlCtrl:ModalController) {
      this.restaurant = this.navParams.get('restaurant');
      this.mealType = this.navParams.get('mealType');
  }

  addToCart(){
    this.add.toCart(this.restaurant);
  }
}
