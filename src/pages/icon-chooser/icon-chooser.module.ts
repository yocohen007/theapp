import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IconChooserPage } from './icon-chooser';

@NgModule({
  declarations: [
    IconChooserPage,
  ],
  imports: [
    IonicPageModule.forChild(IconChooserPage),
  ],
})
export class IconChooserPageModule {}
