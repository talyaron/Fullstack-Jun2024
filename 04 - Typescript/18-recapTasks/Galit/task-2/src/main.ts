import './style.scss'; 

import { ProfileModel } from './model.ts';
import { ProfileView } from './view.ts';
import { ProfileController } from './controller.ts';

const model = new ProfileModel();
const view = new ProfileView();
const controller = new ProfileController(model, view);

controller.init();
