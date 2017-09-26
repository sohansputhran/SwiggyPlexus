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
      oldPassword: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(60)]),
      newPassword: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(60)]),
      reTypePassword: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(60)])
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SetPasswordPage');
  }

  onSave(){
    let oldPassword=this.recover.value.oldPassword;
    let newPassword = this.recover.value.newPassword;
    let reTypePassword = this.recover.value.reTypePassword;
    if(oldPassword != newPassword && newPassword==reTypePassword){
      this.userdetail.getUserPassword(oldPassword,newPassword);
      let toast = this.toastCtrl.create({                     
        message:' Password changed successfully..',
        duration: 300,
        position: 'bottom',
        closeButtonText: 'Ok'
      });
      toast.present();
    }
    else{
      let toast = this.toastCtrl.create({                    
        message:'Please Enter Correct Password..',
        duration: 300,
        position: 'bottom',
        closeButtonText: 'Ok'
      });
      toast.present();
    }
  }

}
