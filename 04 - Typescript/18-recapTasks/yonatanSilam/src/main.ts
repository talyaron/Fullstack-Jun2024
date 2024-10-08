import { handleSubmit } from './controlers/handelSubmit';
import './view/style.scss'

function main(){
  try {
    const form = document.querySelector<HTMLFormElement>('#form');
    if (!form) throw new Error('no form found');
    form.addEventListener('submit',handleSubmit);
} catch (error) {
    console.error(error);
}
}
main();


