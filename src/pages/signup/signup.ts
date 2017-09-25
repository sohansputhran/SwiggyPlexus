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
  confirm_password :any
constructor(public toastCtrl:ToastController,public navCtrl: NavController, public navParams: NavParams,public usrDtl:UserdetailProvider) {
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
     if(passwd == confirmPass && passwd !="" ){
       
       let  user={
          username:username,
          password:passwd
        };
        console.log("user:",user.username,"pass",user.password);
        this.userDetail.push(user);
        this.usrDtl.setUserDetail(this.userDetail);
        let toast = this.toastCtrl.create({                     //Displaying a toast message after adding the item to the cart
          message:  'User Created!',
          duration: 1000,
          position: 'bottom',
          closeButtonText: 'Ok'
        });
        toast.present();
          this.navCtrl.pop();
    }
    else{
      let toast = this.toastCtrl.create({                     //Displaying a toast message after adding the item to the cart
        message:  'Please enter Username and password',
        duration: 1000,
        position: 'bottom',
        closeButtonText: 'Ok'
      });
      toast.present();

    }
    
   }
  
  onLogin(){
    this.navCtrl.pop();
  }

}
