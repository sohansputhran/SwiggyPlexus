import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController } from 'ionic-angular';
import {FormGroup,Validators,FormControl} from "@angular/forms";
import {UserdetailProvider} from '../../providers/userdetail/userdetail';
/**
 * Generated class for the SetPasswordPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-set-password',
  templateUrl: 'set-password.html',
})
export class SetPasswordPage {
    recover:FormGroup
  constructor(public toastCtrl:ToastController,public navCtrl: NavController, public navParams: NavParams,public userdetail:UserdetailProvider) {
    this.recover = new FormGroup({
      oldpassword: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(60)]),
      newpassword: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(60)]),
      cnfrmpassword: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(60)])
    });
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad SetPasswordPage');
  }
  onSave(){
    let oldpassword=this.recover.value.oldpassword;
    let newpasswd = this.recover.value.newpassword;
    let confirmPass = this.recover.value.cnfrmpassword;
    if(oldpassword !=newpasswd && newpasswd==confirmPass){
      this.userdetail.getUserPassword(oldpassword,newpasswd);
      let toast = this.toastCtrl.create({                     //Displaying a toast message after adding the item to the cart
        message:' Password changed successfull..',
        duration: 100,
        position: 'bottom',
        closeButtonText: 'Ok'
      });
      toast.present();
    }
    else{
      let toast = this.toastCtrl.create({                     //Displaying a toast message after adding the item to the cart
        message:'Please enter correct password..',
        duration: 100,
        position: 'bottom',
        closeButtonText: 'Ok'
      });
      toast.present();
    }
  }

}
