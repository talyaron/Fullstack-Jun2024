import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.ts'
import { render_person } from './view/index.ts'
import { change_pic } from './controller/index.ts'

const btn = document.getElementById("print_to_screen")
if (btn) {
  btn.addEventListener("click", () => {
    render_person()
  });
}

change_pic();