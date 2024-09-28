import { personalIntroduction } from '../model/model.ts';
import { NoteModel } from '../model/model.ts';
import { NotesView } from '../view/view.ts';

const notesModel = new NoteModel();
const notesView = new NotesView();

export const renderContent = () => {
  const titleElement = document.getElementById('title');
  const contentElement = document.getElementById('content');
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

  if (imageElement) {
    startImageCarousel(imageElement);
  } else {
    console.error('imageElement not found');
  }

  notesView.displayNotes(notesModel.getNotes());
};

const startImageCarousel = (imageElement: HTMLImageElement) => {
  let currentIndex = 0;

  setInterval(() => {
    if (personalIntroduction.images[currentIndex]) {
      imageElement.src = personalIntroduction.images[currentIndex];
    } else {
      console.error('Image not found at index', currentIndex);
    }
    currentIndex = (currentIndex + 1) % personalIntroduction.images.length;
  }, 1500);
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

notesForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const titleInput = document.querySelector('#title') as HTMLInputElement;
  const noteInput = document.querySelector('#note') as HTMLTextAreaElement;

  const title = titleInput.value;
  const note = noteInput.value;

  if (title && note) {
    notesModel.addNote({ title, note });
    notesView.displayNotes(notesModel.getNotes());
    notesView.clearInputs();
  }
});

(window as any).editNote = (index: number) => {
  const note = notesModel.getNotes()[index];
  notesView.setInputs(note);
  notesModel.deleteNote(index);
  notesView.displayNotes(notesModel.getNotes());
};

(window as any).deleteNote = (index: number) => {
  notesModel.deleteNote(index);
  notesView.displayNotes(notesModel.getNotes());
};
