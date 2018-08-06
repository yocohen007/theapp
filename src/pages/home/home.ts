import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AddToDbPage } from '../add-to-db/add-to-db';
import { ModelService } from '../../model/model-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public modelService: ModelService) {
  }

  navigateAddToDB(): void {
    this.navCtrl.push(AddToDbPage)
  }

}
