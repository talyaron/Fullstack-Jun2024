export interface PersonalIntroduction {
    name: string;
    tagline: string;
    images: string[];  
  }
  
  export const PersonalIntroduction: PersonalIntroduction = {
    name: "Galit",
    tagline: "Full Stack student and online Personal trainer",
    images: [
      "./images/Galit1.jpg",
      "./images/Galit2.jpg",
      "./images/Galit3.jpg"
    ],
  };