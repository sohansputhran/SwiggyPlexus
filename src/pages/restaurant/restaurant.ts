import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { ApiService } from "../../providers/api-service";
import { MenuPage } from '../../pages/menu/menu';

@Component({
  selector: 'page-restaurant',
  templateUrl: 'restaurant.html'
})

export class RestaurantPage {
    restaurantId: number;
    restaurantName: string;
    courses: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private apiService: ApiService) {
      
      this.restaurantId = this.navParams.get('restaurantId');
      this.restaurantName = this.navParams.get('restaurantName');
      
      this.apiService.GetCoursesForRestaurants(this.restaurantId).then(courses =>{
        this.courses = courses;  
      });
      
  }  
selectedCourse(course){
  this.navCtrl.push(MenuPage, {
    courseId: course.CourseId,
    courseName: course.Name,
    restaurantName: this.restaurantName
 });
}

}

