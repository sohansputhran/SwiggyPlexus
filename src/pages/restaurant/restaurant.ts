import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';

import {MenuPage} from '../../pages/menu/menu';

@Component({
  selector: 'page-restaurant',
  templateUrl: 'restaurant.html',  
})

export class RestaurantPage {
    restaurant: string;
  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
      this.restaurant = this.navParams.get('restaurant');
  }  

nextPage(mealType){
    this.navCtrl.push(MenuPage, {
      restaurant: this.restaurant,
      mealType: mealType
    });
  }
}

