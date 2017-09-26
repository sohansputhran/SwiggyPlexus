import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import {SignupPage} from '../signup/signup';
import {TabsPage} from '../tabs/tabs';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import {UserdetailProvider} from '../../providers/userdetail/userdetail';
import { Storage } from "@ionic/storage";

/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  
  signin:FormGroup;
  userAccount: any;

  constructor(public navCtrl: NavController, public toastCtrl: ToastController,public storage: Storage,public navParams: NavParams,public usrDtl:UserdetailProvider) {
    this.signin = new FormGroup({
      name: new FormControl('', Validators.required),
      password: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(60)]),
     
    });
  }

  ionViewDidLoad() {
    this.storage.get("USERID").then(value =>{
      this.userAccount = value;
    });
  }

  signInFunction(){
    let password = this.signin.value.password;  
    this.usrDtl.isPasswordValid(password).then(passwordMatch =>{
      console.log("passwordMatch: ",passwordMatch);
      if(passwordMatch == true){
        this.navCtrl.pop();
      }else{
        let toast = this.toastCtrl.create({                   
          message: 'Invalid Password',
          duration: 200,
          position: 'center',
          closeButtonText: 'Ok'
        });
        toast.present();
      }
    });
  } 
}
