import { Component } from '@angular/core';
import { CartPage } from "../cart/cart";
import {LoginPage}  from "../login/login";
import { AccountPage } from '../account/account';
import { HomePage } from '../home/home';
import {Storage} from '@ionic/storage';
import {NavController} from 'ionic-angular';
import {SignupPage} from '../signup/signup';

/**
 * 
 * 
TabsPage is the root page now.
 *
 */

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  counter: boolean = false;
  tab1Root = HomePage;
  tab2Root = CartPage;
  tab3Root = AccountPage;

  constructor(public storage:Storage,public navCtrl:NavController) {  
    this.userAccount();
  }
  ionViewDidEnter() {
  
  }

  //Checks whether the user has created an account or not.
  userIdPresent(): Promise<any>{
    return new Promise(resolve =>{
      this.storage.get("USERID").then(value =>{
        if(value!=null || value!=undefined){
          this.counter = true;
        }
        resolve(value);
      });
    })
  }
  
  //Decides which page to load based on the return value of the userIdPresent function.
  userAccount(){
    this.userIdPresent().then( val =>{ 
      if(this.counter){
         console.log("counter",this.counter)
         this.navCtrl.push(LoginPage);
      }
      else{
         this.navCtrl.push(SignupPage);       
      } 
    });
  }
}