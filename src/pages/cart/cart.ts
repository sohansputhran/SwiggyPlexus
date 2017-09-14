import { Component,ElementRef } from '@angular/core';
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
  data: any = [];
  
  totalItemprice:any=[];
  constructor(public navCtrl: NavController, public addCart: AddToCartProvider,public elem:ElementRef) {

    this.addCart.sendData().then(result => {
      this.data = result;
      console.log("Inside cart :",this.data);

    });
    
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
}
