import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TutoScreen } from '../tuto-screen/tuto-screen';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    public navCtrl: NavController
  ) {

  }


}
