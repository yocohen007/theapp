import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListItemPopoverPage } from './list-item-popover';

@NgModule({
  declarations: [
    ListItemPopoverPage,
  ],
  imports: [
    IonicPageModule.forChild(ListItemPopoverPage),
  ],
})
export class ListItemPopoverPageModule {}
