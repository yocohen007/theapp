import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddToDbPage } from './add-to-db';

@NgModule({
  declarations: [
    AddToDbPage,
  ],
  imports: [
    IonicPageModule.forChild(AddToDbPage),
  ],
})
export class AddToDbPageModule {}
