import './view/style.scss'
import me from '/images/me.jpg'
import { setupCounter } from './counter.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${me}" class="logo" alt="image" />
    </a>
  
    <h1>Alexis Vishnevezky</h1>
  
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
