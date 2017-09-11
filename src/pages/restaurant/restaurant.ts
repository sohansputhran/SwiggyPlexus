import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import {HomePage} from '../../pages/home/home';

@IonicPage()
@Component({
  selector: 'page-restaurant',
  templateUrl: 'restaurant.html',
  
  
})

export class RestaurantPage {
    item: string;
  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
      this.item = this.navParams.get('item');
  }
modalPage(){
    console.log("çalled");
    let modal=this.modalCtrl.create(HomePage,{
      image:"assets/img/starter.png"
    });
    modal.present();
  }
}