export interface PersonalIntroduction {
  name: string;
  tagline: string;
  images: string[];
}

export const personalIntroduction: PersonalIntroduction = {
  name: "Galit",
  tagline: "Full Stack student and online Personal trainer",
  images: [
    "../images/Galit1.jpg",
    "../images/Galit2.jpg",
    "../images/Galit3.jpg"
  ],
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

  deleteNote(index: number): void {
    this.notes.splice(index, 1);
    this.saveNotes();
  }

  private saveNotes(): void {
    localStorage.setItem('notes', JSON.stringify(this.notes));
  }
}

const notesModel = new NoteModel();

notesModel.addNote({
  title: "HomePuzzle",
  note: "You need to make the homePuzzle until next Friday.",
});
