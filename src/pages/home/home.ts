import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ApiService } from "../../providers/api-service";
import { RestaurantPage } from "../restaurant/restaurant";
import { MenuPage } from "../menu/menu";
import { PopoverController } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  restaurants: any;
  location: number = 1;
  filterType: any = "Rating";
  restCount: number = 0;
  splash = true;
  tabBarElement: any;
  
  constructor(public navCtrl: NavController, private apiService: ApiService,public popoverCtrl: PopoverController) {
    this.tabBarElement = document.querySelector('.tabbar');
    this.apiService.GetRestaurants(this.location).then(restaurants =>{
      this.restaurants = restaurants;
      this.restCount = this.restaurants.length;
      this.filters();
    })
    
  }
  
  ionViewDidLoad() {
    this.tabBarElement.style.display = 'none';
    setTimeout(() => {
      this.splash = false;
      this.tabBarElement.style.display = 'flex';
    }, 4000);
  }

  locationChanged(){
    this.apiService.GetRestaurants(this.location).then(restaurants =>{
      this.restaurants = restaurants;
    })
  }

  filters(){
    var tempItem: any;
    console.log("Filter Type :", this.filterType);
    if(this.filterType == "Cost"){
      for(var i=0; i< this.restaurants.length - 1; i++){
        for(var j=0; j < this.restaurants.length - 1 - i; j++){
          if(this.restaurants[j].Cost > this.restaurants[j+1].Cost){
            tempItem = this.restaurants[j];
            this.restaurants[j] = this.restaurants[j+1];
            this.restaurants[j+1] = tempItem;
          }
        }
      }
    }
      else if(this.filterType == "DeliveryTime"){
        for(var i=0; i< this.restaurants.length - 1; i++){
          for(var j=0; j < this.restaurants.length - 1 - i; j++){
            if(this.restaurants[j].DeliveryTime > this.restaurants[j+1].DeliveryTime){
              tempItem = this.restaurants[j];
              this.restaurants[j] = this.restaurants[j+1];
              this.restaurants[j+1] = tempItem;
            }
          }
        }
      }
      else{
        for(var i=0; i< this.restaurants.length - 1; i++){
          for(var j=0; j < this.restaurants.length - 1 - i; j++){
            if(this.restaurants[j].Rating < this.restaurants[j+1].Rating){
              tempItem = this.restaurants[j];
              this.restaurants[j] = this.restaurants[j+1];
              this.restaurants[j+1] = tempItem;
            }
          }
        }
      }

    console.log("Filter after:", this.restaurants);
  }

  selectedRestaurant(restaurant){
    this.navCtrl.push(RestaurantPage, {
       restaurant: restaurant,
    });
  }
}
