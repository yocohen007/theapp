import * as productsJson from "./products.json";

export class ModelService {
  private products: any;
  private shoppingList: product[];

  constructor() {
    console.log("constructor model-service");
    this.products = productsJson;
    // const word = data[0].name;
    // console.dir(data); // output 'testing'
  }

  getProductList(): product[] {
    if (this.products == null) {
      this.prepareData();
    }
    return this.products;
  }

  getShoppingList(): product[] {
    if (this.shoppingList == null) {
      this.prepareData();
    }
    return this.shoppingList;
  }

  addToShoppingList(product: string) {
    this.shoppingList.push({ name: product });
  }

  markShoppingList(product: string): void {
    var index: number = this.getIndexInShoppongList(product);
    if (index > -1) {
      this.shoppingList[index].marked = !this.shoppingList[index].marked;
    }
    console.log(this.shoppingList);
  }

  deleteFromShoppingList(product: string): void {
    var index: number = this.getIndexInShoppongList(product);
    if (index > -1) {
      this.shoppingList.splice(index, 1);
    }
    console.log(this.shoppingList);
  }

  private getIndexInShoppongList(product: string): number{
    for (var i: number = 0; i < this.shoppingList.length; i++) {
      if (this.shoppingList[i].name === product) {
        return i;
      }
    }
    return -1;
  } 
  private prepareData(): void {
    //init
    this.prepareShoppingList();
    this.prepareProducts();
  }

  prepareProducts(): void {
    // this.products = [];
    // this.products.push({
    //   name: "עגבניות",
    // });
    // this.products.push({
    //   name: "מלפפונים",
    // });
  }

  private prepareShoppingList(): void {
    this.shoppingList = [];
    this.shoppingList.push({
      name: "עגבניות"
    });
  }
}
