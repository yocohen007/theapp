import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddPriceCheckPage } from './add-price-check';

@NgModule({
  declarations: [
    AddPriceCheckPage,
  ],
  imports: [
    IonicPageModule.forChild(AddPriceCheckPage),
  ],
})
export class AddPriceCheckPageModule {}
