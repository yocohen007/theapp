import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { StoresPage } from "./stores";
import { TranslateModule } from "@ngx-translate/core";

@NgModule({
  declarations: [
    StoresPage,
  ],
  imports: [
    IonicPageModule.forChild(StoresPage),
    TranslateModule.forChild()                                       
  ],
})
export class StoresPageModule {}
