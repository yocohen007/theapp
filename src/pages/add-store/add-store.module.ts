import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddStorePage } from './add-store';

@NgModule({
  declarations: [
    AddStorePage,
  ],
  imports: [
    IonicPageModule.forChild(AddStorePage),
  ],
})
export class AddStorePageModule {}
