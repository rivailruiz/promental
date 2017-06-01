import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the TutoScreen page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-tuto-screen',
  templateUrl: 'tuto-screen.html',
})
export class TutoScreen {

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public viewCtrl: ViewController
            ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TutoScreen');
  }
  
  dismiss() {
  this.viewCtrl.dismiss();
}


}
