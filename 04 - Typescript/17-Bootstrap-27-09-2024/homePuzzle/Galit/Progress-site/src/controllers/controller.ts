import { PersonalIntroduction } from '../model/model.ts';

export const renderContent = () => {
  const titleElement = document.getElementById('title');
  const contentElement = document.getElementById('content');
  const imageElement = document.getElementById('image') as HTMLImageElement;

  if (titleElement) {
    titleElement.innerText = PersonalIntroduction.name;
  } else {
    console.error('titleElement not found');
  }

  if (contentElement) {
    contentElement.innerText = PersonalIntroduction.tagline;
  } else {
    console.error('contentElement not found');
  }

  if (imageElement) {
    startImageCarousel(imageElement);
  } else {
    console.error('imageElement not found');
  }
};


const startImageCarousel = (imageElement: HTMLImageElement) => {
  let currentIndex = 0;
  
  setInterval(() => {
    imageElement.src = PersonalIntroduction.images[currentIndex];

    currentIndex = (currentIndex + 1) % PersonalIntroduction.images.length;
  }, 1500);  
};
