import { Component, ViewChild } from "@angular/core";
import { IonicPage, NavController, NavParams, ViewController, ToastController, Toast } from "ionic-angular";
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
  @ViewChild("input") myInput;
  public product: string = "";
  private fullProductsList: Product[];

  constructor(public viewCtrl: ViewController, private toastCtrl: ToastController,
    public modelService: ModelService,
    public navCtrl: NavController, public navParams: NavParams) {
    this.fullProductsList = this.modelService.getProductList();
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad AddToListPage");
    setTimeout(() => {
      this.myInput.setFocus();
    }, 150);
  }

  getFilteredListItems(): Product[] {
    console.log("getFilteredListItems" + this.product);
    return this.fullProductsList.filter(this.includes(this.product));
  }

  private includes(wordToCompare: string) {
    return function (element: Product): boolean {
      return element.name.includes(wordToCompare);
    }
  }

  onItemTap(event, product: Product): void {
    this.modelService.addToShoppingList(product.name);
    const toast: Toast = this.toastCtrl.create({
      message: product.name + " was added to the list",
      duration: 3000
    });
    toast.present();
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
