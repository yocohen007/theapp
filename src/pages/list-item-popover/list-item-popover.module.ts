import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { ListItemPopoverPage } from "./list-item-popover";
import { TranslateModule } from "@ngx-translate/core";

@NgModule({
  declarations: [
    ListItemPopoverPage,
  ],
  imports: [
    IonicPageModule.forChild(ListItemPopoverPage),
    TranslateModule.forChild()          
  ],
})
export class ListItemPopoverPageModule {}
