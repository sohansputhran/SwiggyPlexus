import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController, AlertController } from 'ionic-angular';
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
  info: FormGroup;


  constructor(public navCtrl: NavController, public toastCtrl: ToastController, public alertCtrl: AlertController,public actionSheetCtrl: ActionSheetController, public navParams: NavParams, public storage: Storage) {
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
    console.log("userAccount: ", this.userAccount);
    let alert = this.alertCtrl.create({
      title: 'Change User Information',
      inputs: [
        {
          name: 'phoneNumber',
          placeholder: this.userAccount.phoneNo
        },
        {
          name: 'email',
          placeholder: this.userAccount.email
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
            text: 'Save',
            role: 'save',
            handler: data => {
              console.log('Save clicked');
              this.storage.set("USERID", {username : this.userAccount.username, password: this.userAccount.password, phoneNo: data.phoneNumber, email: data.email});
                let toast = this.toastCtrl.create({                   
                  message: "Changes are saved",
                  duration: 2000,
                  position: 'bottom',
                  closeButtonText: 'Ok'
                });
                toast.present();
              }
        }
      ]
    });
    alert.present();
    alert.onDidDismiss(()=>{
      this.getUserInfo();
    })
    }

  changePassword(){
    this.navCtrl.push(SetPasswordPage);
  }
}
