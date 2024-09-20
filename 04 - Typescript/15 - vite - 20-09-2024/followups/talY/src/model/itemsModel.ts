export class Item{
    id:string;
    constructor(public name: string, public price: number, public imageUrl:string){
        this.id = `id-${crypto.randomUUID()}`;
    }
}

export const items:Item[] = [
    new Item('item1', 10, 'https://prd.cc.duluthtrading.com/dw/image/v2/BBNM_PRD/on/demandware.static/-/Sites-dtc-master-catalog/default/dw13c50eee/images/large/76020_EBR.jpg?sw=980'),
    new Item('item2', 20, 'https://via.placeholder.com/150'),
    new Item('item3', 30, 'https://via.placeholder.com/150'),
];