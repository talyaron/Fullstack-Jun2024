import { personalIntroduction, GameModel } from '../model/model.ts';
import { AboutView, GameView } from '../view/view.ts';

////////// ABOUT //////////
export const renderAboutContent = () => {
  const aboutView = new AboutView();
  aboutView.renderAbout(personalIntroduction);
  aboutView.cycleImages(personalIntroduction);
  
  //////// PROGRESS BAR ////////
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
}

/////////// NOTES ////////
import { NoteModel} from '../model/model.ts';
import { NotesView  } from '../view/view.ts';
export class NotesController {
  private noteModel: NoteModel;
  private notesView: NotesView;
  private currentEditingIndex: number | null = null;

  constructor(noteModel: NoteModel, notesView: NotesView) {
    this.noteModel = noteModel;
    this.notesView = notesView;

    this.notesView.displayNotes(this.noteModel.getNotes());

    const notesForm = document.getElementById('notes-form') as HTMLFormElement;
    notesForm.addEventListener('submit', (event) => {
      this.handleFormSubmit(event);
    });

    (window as any).editNote = (index: number) => this.editNoteHandler(index);
    (window as any).deleteNote = (index: number) => this.deleteNoteHandler(index);
  }

  private handleFormSubmit(event: Event): void {
    event.preventDefault();
    console.log("Form submitted");

    const { title, note } = this.notesView.getInputs();

    if (title && note) {
      if (this.currentEditingIndex === null) {
        console.log("Adding new note");
        this.noteModel.addNote({ title, note });
      } else {
        console.log(`Updating note at index ${this.currentEditingIndex}`); 
        this.noteModel.editNote(this.currentEditingIndex, { title, note });
        this.currentEditingIndex = null;
      }

      this.notesView.displayNotes(this.noteModel.getNotes());
      this.notesView.clearInputs();
    } else {
      console.log("Form validation failed: title or note missing");
    }
  }

  private editNoteHandler(index: number): void {
    console.log(`Editing note at index ${index}`);
    const note = this.noteModel.getNotes()[index];

    if (note) {
      this.notesView.setInputs(note);
      this.currentEditingIndex = index;
    } else {
      console.log("Invalid note at index for editing:", index);
    }
  }

  private deleteNoteHandler(index: number): void {
    console.log(`Deleting note at index ${index}`); 

    const notes = this.noteModel.getNotes();

    if (notes[index]) {
      this.noteModel.deleteNote(index);
      this.notesView.displayNotes(this.noteModel.getNotes());
    } else {
      console.log("Invalid note at index for deletion:", index); 
    }
  }
}

////////// GAME /////////
export class GameController {
  private model: GameModel;
  private view: GameView;
  private containerWidth: number;

  constructor(model: GameModel, view: GameView, containerWidth: number) {
    this.model = model;
    this.view = view;
    this.containerWidth = containerWidth;

    document.addEventListener('keydown', (event) => this.handleKeyPress(event));
    this.updateView();
  }

  handleKeyPress(event: KeyboardEvent): void {
    if (event.key === 'ArrowLeft') {
      this.model.moveLeft();
    } else if (event.key === 'ArrowRight') {
      this.model.moveRight(this.containerWidth);
    }
    this.updateView();
  }

  updateView(): void {
    const position = this.model.getPosition();
    this.view.updateImagePosition(position.x);
  }
}
