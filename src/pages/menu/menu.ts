import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController } from 'ionic-angular';
import {AccordianComponent} from '../../components/accordian/accordian';
import {BasiccardComponent} from '../../components/basiccard/basiccard';

import { AddToCartProvider } from "../../providers/add-to-cart/add-to-cart";
import { ApiService } from "../../providers/api-service";

import {ItemDetailModal} from "../../modals/itemdetail/itemdetail";
@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {

  course : any;
  restaurant: any;
  items: any;
  recommendedItems: any;
  notRecommendedItems: any;
  restaurantRating: number;
  itemsLength : number;

  constructor(public navCtrl: NavController, public add:AddToCartProvider, public navParams: NavParams,private apiService: ApiService,public modalCtrl:ModalController) {
      
    this.course = this.navParams.get('course');
    this.restaurant = this.navParams.get('restaurant');
    this.recommendedItems = [];
    this.notRecommendedItems = [];
    this.apiService.GetItemsForCourse(this.course.CourseId).then(items => {
      this.items = items;
        for(var i = 0; i< items.length; i++){
          if(items[i].IsRecommended == true){
            this.recommendedItems.push(items[i]);
          }

          else{
            this.notRecommendedItems.push(items[i]);
          }
        }
    });
  }

  cart(item){
    console.log("item: ",item);
    this.add.cartFunction(item,this.course,this.restaurant);
  }

  ionViewDidEnter(){
    this.itemsLength = this.items.length - 1;
  }

  itemDetail(itemId){
    console.log(itemId);
    let itemDetailModal = this.modalCtrl.create(ItemDetailModal, {item: this.items, index: itemId});
    itemDetailModal.present();
  }
}
