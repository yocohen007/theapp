import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  ViewController
} from "ionic-angular";
import { ModelService } from "../../model/model-service";
import { TranslateService } from "@ngx-translate/core";

/**
 * Generated class for the ListItemPopoverPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-list-item-popover",
  templateUrl: "list-item-popover.html"
})
export class ListItemPopoverPage {
  public listItem: listItem;

  constructor(
    public translate: TranslateService,
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    public modelService: ModelService
  ) {
    this.listItem = navParams.get("item");
    console.log(this.listItem);
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad ListItemPopoverPage");
  }

  delete(): void {
    console.log("delete " + this.listItem);
    this.modelService.deleteFromShoppingList(this.listItem);
    this.viewCtrl.dismiss();
  }

  mark(): void {
    console.log("delete " + this.listItem.product_id);
    this.modelService.markShoppingListItem(this.listItem);
    this.viewCtrl.dismiss();
  }

  moveUp(): void {
    this.modelService.moveUp(this.listItem);
  }

  moveDown(): void {
    this.modelService.moveDown(this.listItem);
  }
}
