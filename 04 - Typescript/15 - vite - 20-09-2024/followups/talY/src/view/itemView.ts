import { Item } from "../model/itemsModel";

export function renderItem(item:Item):string{
    const html = `
        <img src="${item.imageUrl}" alt="${item.name}">
        <h3>${item.name}</h3>
        <p>${item.price}</p>
    `;
    return html;
}

export function renderItems(items:Item[]):string{
  
    const html = items.map(item => renderItem(item)).join('');
    return html;
}