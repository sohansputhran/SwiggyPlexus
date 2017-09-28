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
  signup:FormGroup;
  name:any;
  password:any;
  confirmPassword :any;
  phoneNo: number;
  email: any;
  
  constructor(public toastCtrl:ToastController,public navCtrl: NavController, public navParams: NavParams,public usrDtl:UserdetailProvider) {
	  this.signup = new FormGroup({
      name: new FormControl('', Validators.required),
      password: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(60)]),
      confirmPassword: new FormControl('', Validators.required),
      phoneNo: new FormControl('', Validators.compose([Validators.required, Validators.pattern('[0-9]*')])),
      email: new FormControl('', Validators.compose([Validators.required,Validators.pattern('[A-Z0-9a-z._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,64}')]))
    });
  }

  onJoin(){
    let userName=this.signup.value.name;
    let password = this.signup.value.password;
    let confirmPassword = this.signup.value.confirmPassword;
    let phoneNo = this.signup.value.phoneNo;
    let email = this.signup.value.email;

    if(password == confirmPassword && password !="" ){
      console.log("user:",userName,"pass",password);
      this.usrDtl.setUserDetail({username: userName, password : password, phoneNo: phoneNo, email: email});
      let toast = this.toastCtrl.create({                     
        message:  'User Account Created!',
        duration: 2000,
        position: 'middle',
        closeButtonText: 'Ok'
      });
      toast.present();
      this.navCtrl.pop();
    }
    else{
      let toast = this.toastCtrl.create({                     
        message:  'User Account not Created! Enter correct data....',
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
