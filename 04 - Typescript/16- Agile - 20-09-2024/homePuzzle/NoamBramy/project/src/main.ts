import './style.css'
import { renderJokes } from './view/renderjokes.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div id="jokepage"></div>
`
renderJokes()
