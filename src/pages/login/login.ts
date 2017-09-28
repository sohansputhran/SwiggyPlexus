import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, AlertController } from 'ionic-angular';
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

  constructor(public navCtrl: NavController, public toastCtrl: ToastController,public storage: Storage,public navParams: NavParams,public usrDtl:UserdetailProvider, public alertCtrl: AlertController) {
    this.userAccountDetails().then(value =>{
      this.userAccount = value;
    });
    
    this.signin = new FormGroup({
          password: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(60)])

    });
  }

  userAccountDetails(): Promise <any>{
    return new Promise (resolve => {
      this.storage.get("USERID").then(value =>{
        resolve(value);
        console.log("value", value);
      });
    })
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
          duration: 1000,
          position: 'center',
          closeButtonText: 'Ok'
        });
        toast.present();
      }
    });
  }
  
  forgotPassword(){
    let alert = this.alertCtrl.create({
      title: 'Forgot Password',
      inputs: [
        {
          name: 'username',
          placeholder: 'Username'
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
            text: 'Ok',
            role: 'ok',
            handler: data => {
              console.log('Ok clicked');
              if(data.username == this.userAccount.username){
                let toast = this.toastCtrl.create({                   
                  message: "Password: " + this.userAccount.password,
                  duration: 3000,
                  position: 'middle',
                  closeButtonText: 'Ok'
                });
                toast.present();
              }
              else{
                let toast = this.toastCtrl.create({                   
                  message: 'Invalid Password',
                  duration: 3000,
                  position: 'middle',
                  closeButtonText: 'Ok'
                });
                toast.present();
              }
            }
        }
      ]
    });
    alert.present();
  }
}
