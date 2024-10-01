import './view/style.css'
import me from '/me.jpeg'
import skaiipicture from '/skaii.jpg'
import { setupCounter } from './counter.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://en.wikipedia.org/wiki/British_Shorthair" target="_blank">
      <img src="${skaiipicture}" class="logo" alt="Skaii" />
    </a>
    <a href="https://www.instagram.com/p/CckxvqxoTuIqbJ5cTDnSfnIz9DYK6WP98SKnKE0/?utm_source=ig_web_button_share_sheet&igsh=MzRlODBiNWFlZA==" target="_blank">
      <img src="${me}" class="logo vanilla" alt="Alexis" />
    </a>
    <h1>My life</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click here to learn more
    </p>
    <button type="button" class="btn btn-primary">Primary</button>
<button type="button" class="btn btn-secondary">Secondary</button>
<button type="button" class="btn btn-success">Success</button>
<button type="button" class="btn btn-danger">Danger</button>
<button type="button" class="btn btn-warning">Warning</button>
<button type="button" class="btn btn-info">Info</button>
<button type="button" class="btn btn-light">Light</button>
<button type="button" class="btn btn-dark">Dark</button>

<button type="button" class="btn btn-link">Link</button>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
