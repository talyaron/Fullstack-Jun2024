interface Item {
    id: string;
    name: string;
    price: number;
    quantity: number;
}

const items: Item[] = []; //state

function addItem(name: string, price: number, quantity: number) {
    const id = crypto.randomUUID();
    items.push({ id, name, price, quantity });
}

addItem('apple', 1, 10);
console.log(JSON.stringify(items));

function removeItem(id: string) {
    const index = items.findIndex(item => item.id === id);
    if (index !== -1) {
        items.splice(index, 1);
    }
}

interface UpdateItemProps {
    id: string, name?: string, price?: number, quantity?: number
}

function updateItem({ id, name, price, quantity }: UpdateItemProps): void {
    const item = items.find(item => item.id === id);
    if (item) {
        if (name) item.name = name;
        if (price) item.price = price;
        if (quantity) item.quantity = quantity;
    }
}

updateItem({ id: items[0].id, name: 'orange' });
console.log(items);

function findByName(name: string): Item | undefined {
    return items.find(item => item.name === name);
}

addItem('banana', 2, 20);
console.log(findByName('banana'));
addItem("broccoli", 3, 30);

function totalInventory(): number {
    return items.reduce((total, item) => total + (item.price * item.quantity), 0);
}

console.log(totalInventory());

function filterItemsByPrice(price: number): Item[] {
    return items.filter(item => item.price < price);
}

function swapItems(index1: number, index2: number, arr: any[]): any[] {
    try {
        const _arr = [...arr];
        // const temp1 = _arr[index1];
        // const temp2 = _arr[index2];
        // _arr[index1] = temp2;
        // _arr[index2] = temp1;
        // return _arr;

        [_arr[index1], _arr[index2]] = [_arr[index2], _arr[index1]]
    } catch (e) {
        console.error(e);
        return [];
    }

}
console.log(items);
console.log(swapItems(0, 1, items));