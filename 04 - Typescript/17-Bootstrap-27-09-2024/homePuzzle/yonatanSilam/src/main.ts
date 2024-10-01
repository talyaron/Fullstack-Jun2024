import { handleSubmit } from "./controllers/handelSubmit";
import { renderScreen } from "./view/renderScreen";
import "./view/style.scss";
renderScreen();
function main() {
  try {
    const form = document.querySelector<HTMLFormElement>('#submitBtn');
    if (!form) throw new Error('no form found');
    form.addEventListener('submit',handleSubmit);
} catch (error) {
    console.error(error);
}

}

main();



