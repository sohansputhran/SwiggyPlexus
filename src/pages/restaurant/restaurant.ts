import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {StarterPage} from '../../pages/starter/starter';
import {DessertPage} from '../../pages/dessert/dessert';
import {MainCoursePage} from '../../pages/main-course/main-course';

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
  items:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  this.items=[{name:"Starter",className:"StarterPage"},
  {name:"MainCourse",className:"MainCoursePage"},
  {name:"Dessert",className:"DessertPage"}
 ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RestaurantPage');
  }
  
   mainCoursePage(value){
     console.log(value);
    let modal = this.navCtrl.push(StarterPage);
   }
   
}
