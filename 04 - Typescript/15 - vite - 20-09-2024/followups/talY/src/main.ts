import './style.css'

import { setupCounter } from './counter.ts'
import { items } from './model/itemsModel.ts';
import { renderItems } from './view/itemView.ts';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>Hello Vite!</h1>
    <div id="items"></div>
  </div>
`

function initializeItems() {
  try {
    const itemsElement = document.querySelector<HTMLDivElement>('#items');
    if(!itemsElement) throw new Error('items element not found');


    itemsElement.innerHTML = renderItems(items);

  } catch (error) {
    console.error(error)
  }
}
initializeItems();

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
