import './view/dist/style.css'
import me from '/images/me.jpg'
import { setupCounter } from './counter.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://www.instagram.com/p/Cin4IeYoDH5AeIk6z1y8zNoMTAXUIRQioYMXYs0/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==">
      <img src="${me}" class="logo" alt="image" />
    </a>
  
    <h1>Alexis Vishnevezky</h1>

`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
