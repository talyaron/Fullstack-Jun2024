import {Book} from "../model/itemModel";

export function renderItem(book:Book):string{
    const html = `
        <img src="${book.name}" alt="${book.name}">
        <h3>${book.author}</h3>
        <p>${book.year}</p>
    `;
    return html;
}

export function renderItems(items:Book[]):string{
  
    const html = items.map(item => renderItem(item)).join('');
    return html;
}


