export class ModelService {
  private products: product[];
  private shoppingList: product[];

  constructor() {
    console.log("constructor");
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

  private prepareData(): void {
    //init
      this.prepareShoppingList();
      this.prepareProducts();

  }

  prepareProducts(): void {
    this.products = [];
    this.products.push({
      name: "עגבניות",
    });
    this.products.push({
      name: "מלפפונים",
    });
}

  private prepareShoppingList(): void {
    this.shoppingList = [];
    // types 0=MP100, 1=FD100, 2=VS100
    this.shoppingList.push({
      name: "עגבניות",
    });
  }
}