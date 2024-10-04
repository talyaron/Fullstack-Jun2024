import { FormValidator } from "./models/formValidator";
import { FormView } from "./views/formView";
import { FormController } from "./controllers/formController";

const formValidator = new FormValidator();
const formView = new FormView();
const formController = new FormController(formValidator, formView);

formController.init();
