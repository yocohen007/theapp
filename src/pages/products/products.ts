import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ModelService } from '../../model/model-service';

@Component({
  selector: 'page-products',
  templateUrl: 'products.html'
})
export class ProductsPage {
  selectedItem: product;
  icons: string[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public modelService: ModelService) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('product');

    // Let's populate this page with some filler content for funzies
    this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
    'american-football', 'boat', 'bluetooth', 'build'];

  }

  itemTapped(event, product) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(ProductsPage, {
      product: product
    });
  }
}
