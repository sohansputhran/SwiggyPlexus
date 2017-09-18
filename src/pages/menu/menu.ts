import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController } from 'ionic-angular';
import {AccordianComponent} from '../../components/accordian/accordian';
import {BasiccardComponent} from '../../components/basiccard/basiccard';

import { AddToCartProvider } from "../../providers/add-to-cart/add-to-cart";
import { ApiService } from "../../providers/api-service";

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {
  courseId : number;
  courseName : string;
  restaurantName: string;
  items: any;
  restaurantRating: number;
  itemForRecommnedation:any;
  constructor(public navCtrl: NavController, public add:AddToCartProvider, public navParams: NavParams,private apiService: ApiService) {
      
      this.courseId = this.navParams.get('courseId');
      this.courseName = this.navParams.get('courseName');
      this.restaurantName = this.navParams.get('restaurantName');
      this.apiService.GetItemsForCourse(this.courseId).then(items => {
        this.items = items

        this.itemForRecommnedation=items;
        console.log("is recommend",this.itemForRecommnedation);
      });
    
    }

  sendToCart(item){
    console.log("item: ",item);
    this.add.toCart(item);
  }
}
