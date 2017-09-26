import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Storage } from "@ionic/storage";
import { ToastController } from "ionic-angular";
/*
  Generated class for the UserdetailProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class UserdetailProvider {
  getUserDetails = [];
  constructor(public toastCtrl: ToastController, public http: Http, public storage: Storage) {
    console.log('Hello UserdetailProvider Provider');
  }

isPasswordValid(password):any{
  
  this.storage.get('USERID').then((val) => {
    this.getUserDetails = val;
    for (let i = 0; i < this.getUserDetails.length; i++) {
      if (this.getUserDetails[i].password === password) {
        console.log("inside if",this.getUserDetails[i]);
        return true;
        
      }
    }
  return false;}

);
}
  setNewPassword(username, newPwd) {
    this.storage.set("USERID", { username: username, password: newPwd })

  }
  getUserPassword(password, newPwd) {
    this.storage.get('USERID').then((val) => {
      this.getUserDetails = val;
      let i;
      for (i = 0; i < this.getUserDetails.length; i++) {
        if (this.getUserDetails[i].password == password) {
          this.setNewPassword(this.getUserDetails[i].username, newPwd);
          break;
        }
      }
    });

  }

  setUserDetail(user) {
    this.storage.set("USERID", user);
    // console.log("username:"+username+"password:"+password);
  }
}
