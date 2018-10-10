import { Component } from "@angular/core";
import { NavController, NavParams, Modal, ModalController } from "ionic-angular";
import { ModelService } from "../../model/model-service";
import { TranslateService } from "@ngx-translate/core";
import { Product } from "../../common/interfaces";
import { AddToDbPage } from "../add-to-db/add-to-db";

@Component({
  selector: "page-products",
  templateUrl: "products.html"
})
export class ProductsPage {
  selectedItem: Product;
  icons: string[];

  constructor(
    public translate: TranslateService,
    public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl: ModalController,
    public modelService: ModelService
  ) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get("product");

   }

  itemTapped(event, product) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(ProductsPage, {
      product: product
    });
  }

  presentAddProductPageModal(): void {
    let addProductModal: Modal = this.modalCtrl.create(AddToDbPage, {
      userId: 8675309
    });
    addProductModal.onDidDismiss(data => {
      console.log(data);
      let newItem = data.itemName;
      if (newItem != null) {
        this.modelService.addProduct(newItem);
      }
    });
    addProductModal.present();
  }
}
