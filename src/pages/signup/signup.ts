import { Component,Inject,ViewChild,ElementRef,AfterViewInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import {LoginPage} from '../login/login';
import {UserdetailProvider} from '../../providers/userdetail/userdetail';
import { ToastController } from 'ionic-angular';
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
  confirmPassword :any
  
  constructor(public toastCtrl:ToastController,public navCtrl: NavController, public navParams: NavParams,public usrDtl:UserdetailProvider) {
	  this.signup = new FormGroup({
      name: new FormControl('', Validators.required),
      password: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(60)]),
      confirmPassword: new FormControl('', Validators.required),
    });
  }

  onJoin(){
    let userName=this.signup.value.name;
    let password = this.signup.value.password;
    let confirmPassword = this.signup.value.confirmPassword;
  
    if(password == confirmPassword && password !="" ){
      console.log("user:",userName,"pass",password);
      this.userDetail.push({username: userName, password : password});
      this.usrDtl.setUserDetail(this.userDetail);
      let toast = this.toastCtrl.create({                     
        message:  'User Created!',
        duration: 2000,
        position: 'middle',
        closeButtonText: 'Ok'
      });
      toast.present();
      this.navCtrl.pop();
    }
    else{
      let toast = this.toastCtrl.create({                     
        message:  'Entered passwords do not match! Please try again.',
        duration: 2000,
        position: 'middle',
        closeButtonText: 'Ok'
      });
      toast.present();
    }
  }
  
  onLogin(){
    this.navCtrl.pop();
  }
}
