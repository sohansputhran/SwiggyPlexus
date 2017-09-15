import { Component, ElementRef } from '@angular/core';
import { Storage } from '@ionic/storage';
import { ToastController } from 'ionic-angular';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AddToCartProvider } from "../../providers/add-to-cart/add-to-cart";
/**
 * Generated class for the CartPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html',

})
export class CartPage {
  items: any;
  totalItemprice: any = [];
  total: number = 0;
  constructor(public toastCtrl: ToastController,public navCtrl: NavController, public addCart: AddToCartProvider, public elem: ElementRef,public storage:Storage) {

    // this.addCart.sendData().then(result => {
    //   this.items = result;
    //   //console.log();
    //   console.log("Inside cart :", this.items);
    //   // for(var i = 0; i< 3; i++){
    //   //   console.log('this.items[i].item.Price: ',this.items[i].item.Price);
    //   //   console.log('this.items[i].quantity: ',this.items[i].quantity);
    //   //   this.total += this.items[i].item.Price * this.items[i].quantity;
    //   // }
    //   var total = 0;
    //   this.items.array.forEach(element => {
    //     total += element.item.Price * element.quantity;
    //   });
    //   console.log('this.total: ',total);
    // });
    
  }

  ionViewDidEnter(){
    this.items = this.addCart.sendData();
    this.total = this.addCart.totalPrice();
    console.log('this.total: ', this.total);
  }

  changeQuantity(index, changeStatus) {
    if (changeStatus) {
      this.items[index].quantity += 1;
      this.total = this.total + this.items[index].item.Price;

    }
    else {
      this.items[index].quantity -= 1;
      this.total = this.total - this.items[index].item.Price;

    }

  }
  checkout(){
    this.storage.clear();
    let toast = this.toastCtrl.create({
      message: 'Checkout!',
      duration: 3000,
      position: 'middle',
      closeButtonText: 'Ok'
    });
    toast.present();

  }
}


    // increment(i){
    //  // this.counter = this.elem.nativeElement.getAttribute('value');
    //   this.quantity[i]+=1;
    //   this.totalAmnt(i);
    //  // console.log(i,this.quantity[i]);
    // }
    // decrement(i){
    //   if(this.quantity[i]>1){
    //   this.quantity[i]-=1;
    //   this.totalAmnt(i);
    // }
    // }
    // totalAmnt(i){
    //     this.totalItemprice[i]=this.quantity[i] * 95;
    // }
    // removeItem(itemKey){
    //   this.addCart.removeData(this.data[itemKey].name);
    // }

