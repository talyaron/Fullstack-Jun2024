import { alleExperience, experience } from "../model/experience";

export function renderExperiences() {
  try {
    const experience = document.querySelector("#experience");
    if (!experience) throw new Error("not find experience");
    const experienceHTML = alleExperience.map(experience => renderExperience(experience)).join('');
     experience.innerHTML = `${experienceHTML}`;
  } catch (e) {
    console.error(e);
  }
}
function renderExperience(experience:experience):string{
    return`
    <div class="col">
    <img src="${experience.imageUrl}" alt="${experience.imageUrl}">
    <div> ${experience.text}</div>
    </div>
    `
}
