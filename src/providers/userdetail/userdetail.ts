import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {Storage} from "@ionic/storage";
/*
  Generated class for the UserdetailProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class UserdetailProvider {
  getUserDetails = [];
  constructor(public http: Http,public storage:Storage) {
    console.log('Hello UserdetailProvider Provider');
  }

  getUserDetail(username, password) {
    
        this.storage.get('USERID').then((val) => {
          this.getUserDetails = val;
          for (let i = 0; i < this.getUserDetails.length; i++) {
            console.log(this.getUserDetails[0]);
            if (this.getUserDetails[i].username == username && this.getUserDetails[i].password == password) {
              console.log("Login succesful");
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
