import { ProfileModel } from './model';
import { ProfileView } from './view';

export class ProfileController {
  private model: ProfileModel;
  private view: ProfileView;
  private editingIndex: number | null = null;

  constructor(model: ProfileModel, view: ProfileView) {
    this.model = model;
    this.view = view;
  }

  init() {
    this.model.loadFromLocalStorage();
    this.view.renderForm();
    this.view.renderProfileList(this.model.getProfiles());
    this.setupFormListener();
    this.setupProfileActions();
  }

  setupFormListener() {
    const formElement = document.querySelector<HTMLFormElement>('#profile-form');
    if (formElement) {
      formElement.addEventListener('submit', (event) => {
        event.preventDefault();
        const { name, imageURL, email, bio } = this.view.getFormData();
        
        if (this.editingIndex !== null) {
    
          this.model.updateProfile(this.editingIndex, { name, imageURL, email, bio });
          this.editingIndex = null; 
        } else {

          this.model.addProfile(name, imageURL, email, bio);
        }

        this.view.renderProfileList(this.model.getProfiles());
        this.view.clearForm();
        this.setupProfileActions();
      });
    }
  }

  setupProfileActions() {
    const editButtons = document.querySelectorAll<HTMLButtonElement>('.edit-profile');
    const deleteButtons = document.querySelectorAll<HTMLButtonElement>('.delete-profile');

    editButtons.forEach(button => {
      button.addEventListener('click', () => {
        const index = Number(button.getAttribute('data-index'));
        const profile = this.model.getProfiles()[index];
        this.view.fillFormData(profile);
        this.editingIndex = index;
      });
    });

    deleteButtons.forEach(button => {
      button.addEventListener('click', () => {
        const index = Number(button.getAttribute('data-index'));
        this.model.deleteProfile(index);
        this.view.renderProfileList(this.model.getProfiles());
        this.setupProfileActions();
      });
    });
  }
}
