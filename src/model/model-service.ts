import { Storage } from "@ionic/storage";
import { Injectable } from "@angular/core";

@Injectable()
export class ModelService {
  private products: any;
  private shoppingList: listItem[];

  constructor(private storage: Storage) {
    console.log("constructor model-service");
  }

  getProductList(): product[] {
    if (this.products == null) {
      this.prepareData();
    }
    return this.products;
  }

  getShoppingList(): listItem[] {
    if (this.shoppingList == null) {
      this.prepareData();
    }
    return this.shoppingList;
  }

  addToShoppingList(product: string) {
    this.shoppingList.push({product:{ name: product }});
    this.storage.set('digitize.theapp.shoppingList', this.shoppingList);
  }

  markShoppingList(product: string): void {
    var index: number = this.getIndexInShoppongList(product);
    if (index > -1) {
      this.shoppingList[index].marked = !this.shoppingList[index].marked;
    }
    console.log(this.shoppingList);
    this.storage.set('digitize.theapp.shoppingList', this.shoppingList);
  }

  deleteFromShoppingList(product: string): void {
    var index: number = this.getIndexInShoppongList(product);
    if (index > -1) {
      this.shoppingList.splice(index, 1);
    }
    console.log(this.shoppingList);
    this.storage.set('digitize.theapp.shoppingList', this.shoppingList);
  }

  private getIndexInShoppongList(product: string): number{
    for (var i: number = 0; i < this.shoppingList.length; i++) {
      if (this.shoppingList[i].product.name === product) {
        return i;
      }
    }
    return -1;
  } 
  private prepareData(): void {
    //init
    console.log('prepare data');
    this.prepareShoppingList();
    this.prepareProducts();
  }

  prepareProducts(): void {
  }

  private prepareShoppingList(): void {
    // this.shoppingList = [];
    // this.shoppingList.push({
    //   product: {name: "עגבניות"}
    // });
    // storage.set('name', 'Max');

    console.log('prepareShoppingLi');
    this.shoppingList = [];   
    this.storage.get('digitize.theapp.shoppingList').then((val) => {
      if (val != null) {
        this.shoppingList = val;
      }  
      console.log('shopping list is', val);
    });
  }
}
