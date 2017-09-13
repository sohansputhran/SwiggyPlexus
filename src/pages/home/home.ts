import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { RestaurantPage } from "../restaurant/restaurant";
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  items: any;
  
  constructor(public navCtrl: NavController) {
    this.items = [{name: "Hotel Empire", location: "Tamil Nadu", rating: "4.5",image:"../../assets/images/logos/empire.jpg", type: "Biryani"},
                  {name:"Green Leaf", location: "Karnataka", rating:"1",image:"../../assets/images/logos/green_leaf.png", type: "North Indian"},
                  {name:"AAAAA",location:"Kerala", rating: "2",image:"../../assets/images/logos/empire.jpg", type: "Indian"},
                  
                ]
      
  }
  selectedItem(item){
     this.navCtrl.push(RestaurantPage, {
       item: item
     });
 }
}
