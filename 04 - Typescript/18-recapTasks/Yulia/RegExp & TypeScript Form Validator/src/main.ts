import { FormValidator } from "./models/FormValidator";
import { FormView } from "./views/FormView";
import { FormController } from "./controllers/FormController";

const formValidator = new FormValidator();
const formView = new FormView();
const formController = new FormController(formValidator, formView);

formController.init();
