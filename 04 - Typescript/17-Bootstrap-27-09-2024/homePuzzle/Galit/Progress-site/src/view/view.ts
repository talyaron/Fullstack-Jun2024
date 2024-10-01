////////// ABOUT /////////
export class AboutView {
  constructor() {}

  renderAbout(personalIntroduction: any) {
    const titleElement = document.getElementById('name');
    const contentElement = document.getElementById('content');
    const learnedElement = document.getElementById('learned');
    const gitElement = document.getElementById('git') as HTMLAnchorElement;
    const imageElement = document.getElementById('image') as HTMLImageElement;

    if (titleElement) titleElement.innerText = personalIntroduction.name;
    if (contentElement) contentElement.innerText = personalIntroduction.tagline;
    if (learnedElement) learnedElement.innerText = personalIntroduction.learned;
    if (gitElement) {
      gitElement.href = personalIntroduction.git;
      gitElement.innerText = "Visit my GitHub";
      gitElement.target = "_blank";
    }
    if (imageElement) imageElement.src = personalIntroduction.image[0];
  }

  cycleImages(personalIntroduction: any) {
    const imageElement = document.getElementById('image') as HTMLImageElement;
    let currentImageIndex = 0;

    if (imageElement) {
      setInterval(() => {
        currentImageIndex = (currentImageIndex + 1) % personalIntroduction.image.length;
        imageElement.src = personalIntroduction.image[currentImageIndex];
      }, 1500);
    }
  }
}

//////////NOTES //////////
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
    console.log("Displaying notes:", notes); 
    this.notesList.innerHTML = ''; 

    if (!Array.isArray(notes) || notes.length === 0) {
      console.log("No notes available to display.");
      this.notesList.innerHTML = '<p>No notes available.</p>';
      return;
    }

    notes.forEach((note, index) => {
      if (note && note.title && note.note) {
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
      } else {
        console.log("Invalid note object encountered:", note);
      }
    });
  }

  clearInputs() {
    console.log("Clearing input fields"); 
    this.titleInput.value = '';
    this.noteInput.value = '';
  }

  getInputs() {
    console.log("Getting input values:", {
      title: this.titleInput.value,
      note: this.noteInput.value,
    }); 
    return {
      title: this.titleInput.value,
      note: this.noteInput.value,
    };
  }

  setInputs(note: Note) {
    console.log("Setting input values for editing:", note);
    this.titleInput.value = note.title;
    this.noteInput.value = note.note;
  }
}

////////// GAME /////////
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
    this.imageElement.style.transform = `translateX(${x}px)`; 
  }
}
