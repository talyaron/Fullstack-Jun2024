import { Note } from '../model/model.ts';

export class NotesView {
  private notesList: HTMLElement;
  private titleInput: HTMLInputElement;
  private noteInput: HTMLTextAreaElement;

  constructor() {
    this.notesList = document.getElementById('notesList') as HTMLElement;
    this.titleInput = document.getElementById('title') as HTMLInputElement;
    this.noteInput = document.getElementById('note') as HTMLTextAreaElement;
  }

  displayNotes(notes: Note[]) {
    this.notesList.innerHTML = ''; 
  
    notes.forEach((note, index) => {
      const noteItem = document.createElement('div');
      noteItem.className = 'col-md-4 mb-3'; 
  
      noteItem.innerHTML = `
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">${note.title}</h5>
            <p class="card-text">${note.note}</p>
            <button class="btn btn-warning btn-sm" onclick="editNote(${index})">Edit</button>
            <button class="btn btn-danger btn-sm" onclick="deleteNote(${index})">Delete</button>
          </div>
        </div>
      `;
  
      this.notesList.appendChild(noteItem);
    });

    if (notes.length === 0) {
      this.notesList.innerHTML = '<p>No notes available.</p>';
    }
  }

  clearInputs() {
    this.titleInput.value = '';
    this.noteInput.value = '';
  }

  getInputs() {
    return {
      title: this.titleInput.value,
      note: this.noteInput.value,
    };
  }

  setInputs(note: Note) {
    this.titleInput.value = note.title;
    this.noteInput.value = note.note;
  }
}

export class GameView {
  private imageElement: HTMLImageElement;

  constructor(imageId: string) {
    const img = document.getElementById(imageId) as HTMLImageElement;
    if (!img) {
      throw new Error('Image element not found');
    }
    this.imageElement = img;
  }

  updateImagePosition(x: number): void {
    this.imageElement.style.transform = `translateX(${x}px)`; // Move the image horizontally
  }
}
