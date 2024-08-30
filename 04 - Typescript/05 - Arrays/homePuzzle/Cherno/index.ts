interface Item
{
    id: number,
    name: string,
    price: number,
    quantity: number
}

interface Summery
{
    totalItems: number;
    avgPrice: number;
    mostExpensive: Item;
    leastExpensive: Item;
}


function addItem(inventory: Item[], item: Item): void
{
    inventory.push(item);
}

function removeItem(inventory: Item[], id: number): void
{
    const itemIndex = inventory.findIndex(item => item.id === id)
    inventory.splice(itemIndex, 1);
}

function updateQuantity(inventory: Item[], id: number, newQuantity: number): void
{
    const itemIndex = inventory.findIndex(item => item.id === id)
    inventory[itemIndex].quantity = newQuantity;
}

function itemByName(inventory: Item[], name: string): Item
{
    const itemIndex = inventory.findIndex(item => item.name === name);
    return inventory[itemIndex];
}

function calculateValue(inventory: Item[]): number
{
    return inventory.reduce((acc, item) => acc + (item.price * item.quantity), 0);
}

function listRares(inventory: Item[], threshold: number): Item[]
{
    return inventory.filter(item => item.quantity < threshold);
}

function swapItems(inventory: Item[], itemA: Item, itemB: Item)
{
    const indexA: number = inventory.indexOf(itemA);
    const indexB: number = inventory.indexOf(itemB);

    inventory[indexA] = itemB;
    inventory[indexB] = itemA;
}

function sortItems(inventory: Item[], asscending: boolean): void
{
    inventory.sort((itemA, itemB) => itemA.price - itemB.price);

    if (asscending)
    {
        inventory.reverse();
    }
}

function getSummery(inventory: Item[]): Summery
{
    const totalItems: number = inventory.reduce((acc, item) => acc + item.quantity, 0);
    const avgPrice: number = inventory.reduce((acc, item) => acc + item.price, 0) / totalItems;
    const mostExpensive: Item = inventory.reduce<Item>(
        (most, current) => (most.price > current.price ? most : current), inventory[0]);
    const leastExpensive: Item = inventory.reduce<Item>(
        (most, current) => (most.price > current.price ? current : most), inventory[0]);
    
    return {totalItems, avgPrice, mostExpensive, leastExpensive}
}


console.log(`======testing module======`)

const inventory: Item[] = [];

console.log(`add, remove and update test:`)

addItem(inventory, {id: 12, name: "", price: 1, quantity: 1});
addItem(inventory, {id: 23, name: "test item", price: 2, quantity: 1});
addItem(inventory, {id: 32, name: "", price: 3, quantity: 1});
addItem(inventory, {id: 42, name: "getMe", price: 4, quantity: 1});

removeItem(inventory, 32);

updateQuantity(inventory, 23, 4);

console.log(`expected: 12, 23 with 4 items, 42`);
console.log(inventory);

console.log(`itemByName test:`);
console.log(`expected: 42`);
console.log(itemByName(inventory, "getMe"));

console.log(`calculateValue test:`);
console.log(`${calculateValue(inventory)} (expected 1 + 2*4 + 4 = 13)`);

console.log(`listRares test:`);
console.log(`expected 12, 42`);
console.log(listRares(inventory, 2));

console.log(`swapItems test:`);
swapItems(inventory, itemByName(inventory, "getMe"), itemByName(inventory, "test item"));
console.log(`expected 12, 42, 23`);
console.log(inventory);

console.log(`sortItems test:`);
sortItems(inventory, true);
console.log(`expected 42, 23, 12`);
console.log(inventory);

console.log(`getSummery test:`);
console.log(getSummery(inventory));


console.log(`======testing end======`);