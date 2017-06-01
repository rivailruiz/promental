import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TutoScreen } from './tuto-screen';

@NgModule({
  declarations: [
    TutoScreen,
  ],
  imports: [
    IonicPageModule.forChild(TutoScreen),
  ],
  exports: [
    TutoScreen
  ]
})
export class TutoScreenModule {}
