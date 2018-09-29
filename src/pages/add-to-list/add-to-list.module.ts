import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddToListPage } from './add-to-list';

@NgModule({
  declarations: [
    AddToListPage,
  ],
  imports: [
    IonicPageModule.forChild(AddToListPage),
  ],
})
export class AddToListPageModule {}
