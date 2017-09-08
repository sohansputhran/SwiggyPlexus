import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {DessertPage} from '../../pages/dessert/dessert';
import {MainCoursePage} from '../../pages/main-course/main-course';
import {StarterPage} from '../../pages/starter/starter';
/**
 * Generated class for the RestaurantPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-restaurant',
  templateUrl: 'restaurant.html',
})
export class RestaurantPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RestaurantPage');
  }

  starterPage(){
    let modal = this.navCtrl.push(StarterPage);
   }

   mainCoursePage(){
    let modal = this.navCtrl.push(MainCoursePage);
   }
   
   dessertPage(){
    let modal = this.navCtrl.push(DessertPage);
   }


}
