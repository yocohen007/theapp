import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams, ModalController, Modal } from "ionic-angular";
import { Product } from "../../common/interfaces";
import { ModelService } from "../../model/model-service";
import { AddPriceCheckPage } from "../add-price-check/add-price-check";
import { IconChooserPage } from "../icon-chooser/icon-chooser";

/**
 * Generated class for the ProductPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-product",
  templateUrl: "product.html",
})
export class ProductPage {
  product: Product;

  constructor(public navCtrl: NavController,
    public modalCtrl: ModalController,
    public modelService: ModelService,
    public navParams: NavParams) {
    this.product = navParams.get("product");
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad ProductPage");
  }

  presentAddPricePageModal(): void {
    let addPriceCheckModal: Modal = this.modalCtrl.create(AddPriceCheckPage, {
      product: this.product
    });
    addPriceCheckModal.onDidDismiss(data => {
      console.log(data);
      if (data == null) {
        return;
      }
      let store_id: number = data.store_id;
      let price: number = data.price;
      this.modelService.addPriceCheck(this.product.id, store_id, price);
    });
    addPriceCheckModal.present();
  }

  presentIconChooser(): void {
    let iconChooserModal: Modal = this.modalCtrl.create(IconChooserPage, {
      product: this.product
    });
    iconChooserModal.onDidDismiss(data => {
      console.log(data);
      if (data == null) {
        return;
      }
      // let store_id: number = data.store_id;
      // let price: number = data.price;
      // this.modelService.addPriceCheck(this.product.id, store_id, price);
    });
    iconChooserModal.present();
  }

}
