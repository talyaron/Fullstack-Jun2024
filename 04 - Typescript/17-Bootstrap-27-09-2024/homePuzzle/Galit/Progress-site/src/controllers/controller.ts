import { personalIntroduction, NoteModel } from '../model/model.ts';
import { NotesView } from '../view/view.ts';

const notesModel = new NoteModel();
const notesView = new NotesView();

document.addEventListener('DOMContentLoaded', () => {
  renderContent();
  cycleImages();
});

export const renderContent = () => {
  const titleElement = document.getElementById('name');
  const contentElement = document.getElementById('content');
  const learnedElement = document.getElementById('learned');
  const gitElement = document.getElementById('git') as HTMLAnchorElement;
  const imageElement = document.getElementById('image') as HTMLImageElement;

  if (titleElement) {
    titleElement.innerText = personalIntroduction.name;
  } else {
    console.error('titleElement not found');
  }

  if (contentElement) {
    contentElement.innerText = personalIntroduction.tagline;
  } else {
    console.error('contentElement not found');
  }

  if (learnedElement) {
    learnedElement.innerText = personalIntroduction.learned;
  } else {
    console.error('learnedElement not found');
  }

  if (gitElement) {
    gitElement.href = personalIntroduction.git; 
    gitElement.innerText = "Visit my GitHub";
    gitElement.target = "_blank";
  } else {
    console.error('gitElement not found');
  }

  if (imageElement) {
    imageElement.src = personalIntroduction.image[0]; 
  } else {
    console.error('imageElement not found');
  }

  notesView.displayNotes(notesModel.getNotes());
}

const cycleImages = () => {
  const imageElement = document.getElementById('image') as HTMLImageElement;
  let currentImageIndex = 0;

  if (imageElement) {
    setInterval(() => {
      currentImageIndex = (currentImageIndex + 1) % personalIntroduction.image.length;
      imageElement.src = personalIntroduction.image[currentImageIndex];
    }, 1500);
  }
};

const totalLessons = 76;
let completedLessons = 21;

const updateProgressBar = () => {
  const progressBar = document.getElementById('progress-bar') as HTMLElement;
  const progressText = document.getElementById('progress-text') as HTMLElement;

  const progressPercentage = (completedLessons / totalLessons) * 100;

  progressBar.style.width = `${progressPercentage}%`;
  progressBar.setAttribute('aria-valuenow', `${progressPercentage}`);
  progressBar.innerText = `${Math.round(progressPercentage)}%`;

  progressText.innerText = `${completedLessons} out of ${totalLessons} completed`;
};

updateProgressBar();

const notesForm = document.querySelector('#notes') as HTMLFormElement;
let currentEditingIndex: number | null = null;

notesForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const { title, note } = notesView.getInputs();

  if (title && note) {
    if (currentEditingIndex === null) {
      notesModel.addNote({ title, note });
    } else {
      notesModel.editNote(currentEditingIndex, { title, note });
      currentEditingIndex = null;
    }

    notesView.displayNotes(notesModel.getNotes());
    notesView.clearInputs();
  }
});

(window as any).editNote = (index: number) => {
  const note = notesModel.getNotes()[index];
  notesView.setInputs(note);
  currentEditingIndex = index;
};

(window as any).deleteNote = (index: number) => {
  notesModel.deleteNote(index);
  notesView.displayNotes(notesModel.getNotes());
};
