import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import {SignupPage} from '../signup/signup';
import {TabsPage} from '../tabs/tabs';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import {UserdetailProvider} from '../../providers/userdetail/userdetail';
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
  signin:FormGroup
  constructor(public navCtrl: NavController, public toastCtrl: ToastController,public navParams: NavParams,public usrDtl:UserdetailProvider) {
    this.signin = new FormGroup({
      name: new FormControl('', Validators.required),
      password: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(60)]),
     
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  onSignin(){
    let passwd = this.signin.value.password;
    
  let res = this.usrDtl.isPasswordValid(passwd);
  console.log("res",res)
  if(res == true){
    this.navCtrl.pop();
  }else{
    let toast = this.toastCtrl.create({                     //Displaying a toast message after adding the item to the cart
      message: 'invalid pass',
      duration: 100,
      position: 'bottom',
      closeButtonText: 'Ok'
    });
    console.log("login sucessfull")
    toast.present();
  }
   
  }

  onSignUp(){
    
    this.navCtrl.push(SignupPage);
  
  }
}
