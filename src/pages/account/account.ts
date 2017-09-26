import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from "@ionic/storage";
import {LoginPage}  from "../login/login";
import { SetPasswordPage } from "../set-password/set-password"
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { ActionSheetController } from 'ionic-angular';

/**
 * Generated class for the AccountPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-account',
  templateUrl: 'account.html',
})
export class AccountPage {

  userAccount: any;
  num = "1234567890";
  email = "abc@abc.com";
  info: FormGroup;

  constructor(public navCtrl: NavController,public actionSheetCtrl: ActionSheetController, public navParams: NavParams, public storage: Storage) {
    this.userAccount = this.getUserInfo();
    this.info = new FormGroup({
      number: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
    });
  }

  ionViewDidLoad() {
    
  }

  getUserInfo(){
    return this.storage.get("USERID").then(value =>{
      this.userAccount = value;
      console.log("userAccount: ", this.userAccount);
    });
  }

  changeInfo(){
      
    }

  changePassword(){
    this.navCtrl.push(SetPasswordPage);
  }
}
