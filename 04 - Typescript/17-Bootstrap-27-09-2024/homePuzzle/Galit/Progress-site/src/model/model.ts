////////// ABOUT /////////

export interface PersonalIntroduction {
  name: string;
  tagline: string;
  image: string[];
  learned: string;
  git: string;
}

export const personalIntroduction: PersonalIntroduction = {
  name: "Galit",
  tagline: "Full Stack student and online Personal trainer",
  learned: "HTML, CSS, SCSS, TypeScript, Vite",
  git: "https://github.com/Galit97/Galit",
  image: [
    "./images/Galit1.jpg",
    "./images/Galit2.jpg",
    "./images/Galit3.jpg"
  ],
};

////////// NOTES /////////
export interface Note {
  title: string;
  note: string;
}

export class NoteModel {
  private notes: Note[] = [];

  constructor() {
    this.loadNotes();
    console.log("Initialized NoteModel with notes:", this.notes); // Debugging statement
  }

  private loadNotes() {
    const savedNotes = localStorage.getItem('notes');
    if (savedNotes) {
      this.notes = JSON.parse(savedNotes);
    }
    console.log("Loaded notes from localStorage:", this.notes); // Debugging statement
  }

  private saveNotes() {
    localStorage.setItem('notes', JSON.stringify(this.notes));
    console.log("Saved notes to localStorage:", this.notes); // Debugging statement
  }

  getNotes(): Note[] {
    console.log("Returning notes:", this.notes); // Debugging statement
    return this.notes;
  }

  addNote(note: Note): void {
    console.log("Adding note:", note); // Debugging statement
    this.notes.push(note);
    this.saveNotes();
  }

  editNote(index: number, updatedNote: Note): void {
    console.log(`Editing note at index ${index}:`, updatedNote); // Debugging statement
    this.notes[index] = updatedNote;
    this.saveNotes();
  }

  deleteNote(index: number): void {
    console.log(`Deleting note at index ${index}`); // Debugging statement
    this.notes.splice(index, 1);
    this.saveNotes();
  }
}


////////// GAME /////////

export interface ImagePosition {
  x: number;
}

export class GameModel {
  private position: ImagePosition;

  constructor() {
    this.position = { x: 0 };
  }

  getPosition(): ImagePosition {
    return this.position;
  }

  moveLeft(): void {
    this.position.x = Math.max(0, this.position.x - 10);
    console.log('Moved left to position:', this.position.x);
  }

  moveRight(maxWidth: number): void {
    this.position.x = Math.min(maxWidth - 100, this.position.x + 10);
    console.log('Moved right to position:', this.position.x);
  }
}
