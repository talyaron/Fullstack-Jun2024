import './style.css'
//import typescriptLogo from './typescript.svg'
//import viteLogo from '/vite.svg'
//import { setupCounter } from './counter.ts'
import { jokes } from './model/model.ts'
import { render } from './render/render.ts'
//document.querySelector<HTMLDivElement>('#app')!.innerHTML = 
render(jokes)
//setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
