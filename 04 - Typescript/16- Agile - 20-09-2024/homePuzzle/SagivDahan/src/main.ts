import { renderJokes } from './view/render.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div id="jokepage"></div>
`
renderJokes()
