import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { ApiService } from "../../providers/api-service";
import { MenuPage } from '../../pages/menu/menu';

@Component({
  selector: 'page-restaurant',
  templateUrl: 'restaurant.html'
})

export class RestaurantPage {
    restaurant: any;
    courses: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private apiService: ApiService) {
      
      this.restaurant = this.navParams.get('restaurant');
      
      this.apiService.GetCoursesForRestaurants(this.restaurant.RestaurantId).then(courses =>{
        this.courses = courses;  
      });
      
  }  
selectedCourse(course){
  this.navCtrl.push(MenuPage, {
    course: course,
    restaurant: this.restaurant
 });
}

}

