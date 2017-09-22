import { Component } from '@angular/core';
import { CartPage } from "../cart/cart";
import { LoginPage } from '../login/login';
import { HomePage } from '../home/home';
import {Storage} from '@ionic/storage';
import {NavController} from 'ionic-angular';
import {SignupPage} from '../signup/signup';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  counter:number=0;
  tab1Root = HomePage;
  tab2Root = CartPage;
  tab3Root = LoginPage;

  constructor(public storage:Storage,public navCtrl:NavController) {  
  }
  ionViewDidEnter() {
  
  }
  fn(): Promise<any>{
    return new Promise(resolve =>{
      this.storage.get("USERID").then(res =>{
        if(res!=null || res!=undefined){
          this.counter++;
        }
       
        resolve(res);
      });
    })
  }
  

  
  onSignInorSignUp(){
    console.log("this.counter outer",this.counter);
        this.fn().then( val =>{
         
          if(this.counter>0){
            console.log("counter",this.counter)
            this.navCtrl.push(LoginPage);
          }
          else
          {
            this.navCtrl.push(SignupPage);       
          } 

        });
          
   
      
}
}