import { Component,Inject,ViewChild,ElementRef,AfterViewInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import {LoginPage} from '../login/login';
import {AddToCartProvider} from '../../providers/add-to-cart/add-to-cart';
/**
 * Generated class for the SignupPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
  signup:FormGroup
  name:any
  userDetail=[];
  password:any
  confirm_password :any
constructor(public navCtrl: NavController, public navParams: NavParams,public addCart:AddToCartProvider) {
	   this.signup = new FormGroup({
      name: new FormControl('', Validators.required),
      password: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(60)]),
      confirm_password: new FormControl('', Validators.required),
    });

  }
	 onJoin(){
    let username=this.signup.value.name;
    let passwd = this.signup.value.password;
    let confirmPass = this.signup.value.confirm_password;
     if(passwd == confirmPass ){
       
       let  user={
          username:username,
          password:passwd
        };
        console.log("user:",user.username,"pass",user.password);
        this.userDetail.push(user);
        this.addCart.setUserDetail(this.userDetail);
    }
      
   }
  
  onLogin(){
    this.navCtrl.pop();
  }

}
