export class ProfileView {
    private appElement: HTMLDivElement | null;
  
    constructor() {
      this.appElement = document.querySelector<HTMLDivElement>('#app');
    }
  
    renderForm() {
      if (this.appElement) {
        this.appElement.innerHTML = `
          <h1>User Profile Editor</h1>
          <form id="profile-form">
            <label for="name">Name:</label>
            <input type="text" id="name" required />
            <label for="imageURL">Image URL:</label>
            <input type="text" id="imageURL" required />
            <label for="email">Email:</label>
            <input type="email" id="email" required />
            <label for="bio">Bio:</label>
            <textarea id="bio" required></textarea>
            <button type="submit">Add Profile</button>
          </form>
          <div id="profile-list"></div>
        `;
      }
    }
  
    renderProfileList(profiles: { name: string; imageURL: string; email: string; bio: string }[]) {
        const profileListElement = document.querySelector<HTMLDivElement>('#profile-list');
        if (profileListElement) {
          profileListElement.innerHTML = profiles.map((profile, index) => `
            <div class="profile">
              <h3>${profile.name}</h3>
              <img src="${profile.imageURL}" alt="${profile.name}" class="profile-image" />
              <p>Email: ${profile.email}</p>
              <p>Bio: ${profile.bio}</p>
              <button data-index="${index}" class="edit-profile">Edit</button>
              <button data-index="${index}" class="delete-profile">Delete</button>
            </div>
          `).join('');
        }
      }
  
    getFormData() {
      const name = (document.querySelector<HTMLInputElement>('#name')!).value;
      const imageURL = (document.querySelector<HTMLInputElement>('#imageURL')!).value;
      const email = (document.querySelector<HTMLInputElement>('#email')!).value;
      const bio = (document.querySelector<HTMLTextAreaElement>('#bio')!).value;
      return { name, imageURL, email, bio };
    }
  
    clearForm() {
      (document.querySelector<HTMLInputElement>('#name')!).value = '';
      (document.querySelector<HTMLInputElement>('#imageURL')!).value = '';
      (document.querySelector<HTMLInputElement>('#email')!).value = '';
      (document.querySelector<HTMLTextAreaElement>('#bio')!).value = '';
    }
  
    fillFormData(profile: { name: string; imageURL: string; email: string; bio: string }) {
      (document.querySelector<HTMLInputElement>('#name')!).value = profile.name;
      (document.querySelector<HTMLInputElement>('#imageURL')!).value = profile.imageURL;
      (document.querySelector<HTMLInputElement>('#email')!).value = profile.email;
      (document.querySelector<HTMLTextAreaElement>('#bio')!).value = profile.bio;
    }
  }
  