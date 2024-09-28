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
      noteItem.className = 'noteItem';
      noteItem.innerHTML = `
        <h3>${note.title}</h3>
        <p>${note.note}</p>
        <button onclick="editNote(${index})">Edit</button>
        <button onclick="deleteNote(${index})">Delete</button>
      `;
      this.notesList.appendChild(noteItem);
    });
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
