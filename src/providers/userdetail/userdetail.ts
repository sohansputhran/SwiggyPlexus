import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Storage } from "@ionic/storage";
import { ToastController } from "ionic-angular";

@Injectable()
export class UserdetailProvider {
 
  getUserDetails:any;


  constructor(public toastCtrl: ToastController, public storage: Storage) {

  }

  //Checking whether the entered password in the log in page matches the stored password of the user.
  isPasswordValid(password):Promise <any>{
    return new Promise (resolve =>{this.storage.get('USERID').then((value) => {
      this.getUserDetails = value;

      if (this.getUserDetails[0].password == password) {

        console.log("inside if",this.getUserDetails);
          resolve(true);
        }else{
          resolve(false);
        }
      
      });
    });
  }

  //Updating the user password
  getUserPassword(oldPassword, newPassword) {
    this.storage.get('USERID').then((value) => {
      this.getUserDetails = value;
      if(this.getUserDetails.password == oldPassword) {
          this.storage.set("USERID", {username : this.getUserDetails.username, password: newPassword});
        }
    });
  }

  //Setting up the user account when the applicaion is installed.
  setUserDetail(user) {
    this.storage.set("USERID", user);
  }
 
}
