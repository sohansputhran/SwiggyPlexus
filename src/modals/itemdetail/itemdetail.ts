import { ViewController, NavParams } from 'ionic-angular';
import { Component } from '@angular/core';
@Component({
    selector: 'item-detail',
    templateUrl: 'itemdetail.html'

})

export class ItemDetailModal {
    items: any
    index: any
    item: any
    constructor(public navParams: NavParams, public viewCtrl: ViewController) {
        this.items = this.navParams.get('item');
        this.index = this.navParams.get('index');
        for (let i = 0; i < this.items.length; i++) {
            if (this.index === this.items[i].ItemId) {
                this.item = this.items[i]
            }
        }
    }

    dismiss() {
        this.viewCtrl.dismiss();
    }
}