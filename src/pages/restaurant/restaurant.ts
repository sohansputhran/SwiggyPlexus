import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import {HomePage} from '../../pages/home/home';
import {StarterPage} from '../../pages/starter/starter';


//@IonicPage()
@Component({
  selector: 'page-restaurant',
  templateUrl: 'restaurant.html',
  
  
})

export class RestaurantPage {
    item: string;
  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
      this.item = this.navParams.get('item');
  }  
nextPage(){
    this.navCtrl.push(StarterPage);
  }
}
