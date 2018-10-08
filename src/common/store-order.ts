import { listItem } from "./interfaces";

export class StoreOrder {
    private order: number[];
    private store_id: number;
    private orderMap: any;

    constructor(
        order: number[],
        store_id: number
    ) {
        this.order = order;
        this.store_id = store_id;
        this.orderMap = {};
        var i = 0;
        this.order.forEach(element => {
            this.orderMap[element] = i++;
        });
    }

    public addProduct(product_id: number): void {
        this.order.push(product_id);
    }

    public getOrder(): number[] {
        return this.order;
    }

    public getStoreId(): number {
        return this.store_id;
    }

    public getOrderedList(listItems: listItem[]): listItem[] {
        return listItems;
    }
}