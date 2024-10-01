import "./style.css";
// import typescriptLogo from './typescript.svg'
// import viteLogo from '/vite.svg'
// import { setupCounter } from './counter.ts'
import { renderJokes } from "./view/renderJokes.ts";

// setupCounter(document.querySelector<HTMLButtonElement>('#counter')!);
function main() {
  document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
  <h1> all joke </h1>
  <div id="jokes"></div>
  </div>
`;
  renderJokes();
}
main();
