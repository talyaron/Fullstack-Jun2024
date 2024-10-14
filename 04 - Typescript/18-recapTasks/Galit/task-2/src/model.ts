export class ProfileModel {
    private profiles: { name: string; imageURL: string; email: string; bio: string }[] = [];
  
    addProfile(name: string, imageURL: string, email: string, bio: string) {
      this.profiles.push({ name, imageURL, email, bio });
      this.saveToLocalStorage();
    }
  
    updateProfile(index: number, updatedProfile: { name: string; imageURL: string; email: string; bio: string }) {
      this.profiles[index] = updatedProfile;
      this.saveToLocalStorage();
    }
  
    deleteProfile(index: number) {
      this.profiles.splice(index, 1);
      this.saveToLocalStorage();
    }
  
    getProfiles() {
      return this.profiles;
    }
  
    private saveToLocalStorage() {
      localStorage.setItem('profiles', JSON.stringify(this.profiles));
    }
  
    loadFromLocalStorage() {
      const storedProfiles = localStorage.getItem('profiles');
      if (storedProfiles) {
        this.profiles = JSON.parse(storedProfiles);
      }
    }
  }
  