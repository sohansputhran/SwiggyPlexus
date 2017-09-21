import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {SignupPage} from '../signup/signup';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import {AddToCartProvider} from '../../providers/add-to-cart/add-to-cart';
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
  constructor(public navCtrl: NavController, public navParams: NavParams,public addCart:AddToCartProvider) {
    this.signin = new FormGroup({
      name: new FormControl('', Validators.required),
      password: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(60)]),
     
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  onSignin(){
    let username=this.signin.value.name;
    let passwd = this.signin.value.password;
    
    this.addCart.getUserDetail(username,passwd);
  }

  onSignUp(){
    
    this.navCtrl.push(SignupPage);
  
  }
}
