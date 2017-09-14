import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ApiService } from "../../providers/api-service";
import { RestaurantPage } from "../restaurant/restaurant";
import { MenuPage } from "../menu/menu";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  restaurants: any;

  constructor(public navCtrl: NavController, private apiService: ApiService) {

    this.apiService.GetRestaurants().then(restaurants =>{
      this.restaurants = restaurants;
    })
  }


  selectedRestaurant(restaurant){
    this.navCtrl.push(RestaurantPage, {
       restaurantId: restaurant.RestaurantId,
       restaurantName: restaurant.Name
    });

    // this.navCtrl.push(MenuPage, {
    //   restaurantRating : restaurant.Rating
    // })
  }
}
