import { ListItem } from "./interfaces";

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

    public getOrderedList(listItems: ListItem[]): ListItem[] {
        if (listItems.length == 0 || listItems.length == 1) {
            return listItems;
        }
        var weightList: any[] = [];
        listItems.forEach(listItem => {
            weightList.push({ item: listItem, index: this.orderMap[listItem.product_id] });
        });
        weightList.sort(function (a, b) { return a.index - b.index });

        var result: ListItem[] = [];
        weightList.forEach(element => {
            result.push(element.item);
        });
        return result;
    }

    public moveItem(product_id1: number, product_id2: number): void {
        var index: number = this.getIndexOrder(product_id1);
        var newIndex: number = this.getIndexOrder(product_id2);
        let movedItem: number = this.order.splice(index, 1)[0];
        this.order.splice(newIndex, 0, movedItem);

    }

    getIndexOrder(product_id: number): number {
        for (var i: number = 0; i < this.order.length; i++) {
            if (this.order[i] === product_id) {
                return i;
            }
        }
        return -1;
    }

}