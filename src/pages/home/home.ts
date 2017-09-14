import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ApiService } from "../../providers/api-service";
import { RestaurantPage } from "../restaurant/restaurant";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  restaurants: any;

  constructor(public navCtrl: NavController, private apiService: ApiService) {
    // this.restaurants = [{name: "Hotel Empire", location: "Tamil Nadu", rating: "4.5",image:"../../assets/images/logos/empire.jpg"},
    //                     {name:"Green Leaf", location: "Karnataka", rating:"1",image:"../../assets/images/logos/green_leaf.png"},
    //                     {name:"Taj Mahal",location:"Kerala", rating: "5",image:"../../assets/images/logos/empire.jpg"}
    //                    ];

    this.apiService.GetRestaurants().then(restaurants =>{
      this.restaurants = restaurants;
    })
  }


  selectedItem(restaurant){
    this.navCtrl.push(RestaurantPage, {
       restaurant: restaurant
    });
  }
}
