import { Component } from '@angular/core';
import { ModalController, NavParams,ViewController } from 'ionic-angular';
@Component({
    selector:'item-detail',
    templateUrl:'itemdetail.html'
})
export class ItemDetailPage {
fooditem:any;
image :any;
 constructor(public viewCtrl:ViewController,public nav:NavParams) {
    this.fooditem=this.nav.get('foodItemName');
    this.image=this.nav.get('image');
}
 onDismiss(){
    
     this.viewCtrl.dismiss();
 }
}