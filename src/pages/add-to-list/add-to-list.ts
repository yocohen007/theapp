import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams, ViewController } from "ionic-angular";
import { Product } from "../../common/interfaces";
import { ModelService } from "../../model/model-service";

/**
 * Generated class for the AddToListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-add-to-list",
  templateUrl: "add-to-list.html",
})
export class AddToListPage {
  public product: string = "";
  private fullShoppingList: Product[];

  constructor(public viewCtrl: ViewController, public modelService: ModelService,
    public navCtrl: NavController, public navParams: NavParams) {
    this.fullShoppingList = [];
    let shoppingList = this.modelService.getShoppingList();
    for (var i: number = 0; i < shoppingList.length; i++) {
      this.fullShoppingList.push(this.modelService.getProduct(shoppingList[i].product_id));
    }
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad AddToListPage");
  }

  getFilteredListItems(): Product[] {
    console.log("getFilteredListItems" + this.product);
    return this.fullShoppingList.filter(this.includes(this.product));
  }

  includes(wordToCompare: string) {
    return function(element: Product): boolean {
        return element.name.includes(wordToCompare);
    }
}

  dismiss(): void {
    let data = { "itemName": this.product };
    this.viewCtrl.dismiss(data);
  }

  cancel(): void {
    let data = { "itemName": null };
    this.viewCtrl.dismiss(data);
  }
}
