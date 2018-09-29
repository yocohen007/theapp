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
    this.shoppingList.push({"name":product});
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
      name: "עגבניות",
    });
  }
}