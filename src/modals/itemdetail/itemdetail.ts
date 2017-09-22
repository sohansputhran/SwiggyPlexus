import { ViewController, NavParams } from 'ionic-angular';
import { Component } from '@angular/core';
@Component({
    selector: 'item-detail',
    templateUrl: 'itemdetail.html'

})

export class ItemDetailModal {
    items: any;
    itemId: number;
    item: any;
    restaurant: any;
    course: any;

    constructor(public navParams: NavParams, public viewCtrl: ViewController) {
        this.items = this.navParams.get('item');
        this.itemId = this.navParams.get('itemId');
        this.restaurant = this.navParams.get('restaurant');
        this.course = this.navParams.get('course');
        
        for (let i = 0; i < this.items.length; i++) {
            if (this.itemId === this.items[i].ItemId) {
                this.item = this.items[i];
                break;
            }
        }
    }

    dismiss() {
        this.viewCtrl.dismiss();
    }
}