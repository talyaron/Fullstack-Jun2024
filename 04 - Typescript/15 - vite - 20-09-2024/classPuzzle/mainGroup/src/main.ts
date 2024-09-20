import './style.css'

import { setupCounter } from './counter.ts'
import { renderRandom } from './view/components/randomView.ts'
import { renderMainPage } from './view/pages/mainPage.ts'



function main() {
  try {
    const mainElement = document.querySelector<HTMLDivElement>('#app');
    if (!mainElement) throw new Error('Element not found')
    mainElement.innerHTML = renderMainPage()
    const randomElement = document.querySelector<HTMLDivElement>('#random')!
    if (!randomElement) throw new Error('Element not found')

    randomElement.innerHTML = renderRandom()
  } catch (error) {
    console.error(error)
  }
}

main();

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
