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
  image:[  "../images/Galit1.jpg",
    "../images/Galit2.jpg",
    "../images/Galit3.jpg" ],
};

export interface Note {
  title: string;
  note: string;
}

export class NoteModel {
  private notes: Note[];

  constructor() {
    this.notes = JSON.parse(localStorage.getItem('notes') || '[]');
  }

  getNotes(): Note[] {
    return this.notes;
  }

  addNote(note: Note): void {
    this.notes.push(note);
    this.saveNotes();
  }

  editNote(index: number, updatedNote: Note): void {
    this.notes[index] = updatedNote;
    this.saveNotes();
  }

  deleteNote(index: number): void {
    this.notes.splice(index, 1);
    this.saveNotes();
  }

  private saveNotes(): void {
    localStorage.setItem('notes', JSON.stringify(this.notes));
  }
}


export interface ImagePosition {
  x: number;
}

export class GameModel {
  private position: ImagePosition;

  constructor() {
    this.position = { x: 0 }; // Initial horizontal position
  }

  getPosition(): ImagePosition {
    return this.position;
  }

  moveLeft(): void {
    this.position.x = Math.max(0, this.position.x - 10); // Move left and limit to 0
  }

  moveRight(maxWidth: number): void {
    this.position.x = Math.min(maxWidth - 100, this.position.x + 10); // Move right and limit by container
  }
}
