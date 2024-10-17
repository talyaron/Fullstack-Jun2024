import "./style.css";

import { checkForm } from "./controllers/controller";

(window as any).checkForm = checkForm;
export function main(event: Event) {
  checkForm(event);
}

(window as any).main = main;
