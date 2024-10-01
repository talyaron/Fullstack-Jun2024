import { alleExperience, experience } from "../model/experience";
import { renderExperiences } from "../view/renderExperience";

export function addExperience(imageUrl: string, text: string) {
  try {
    const experience = document.querySelector("#experience");
    if (!experience) throw new Error("not find experience");
    const e: experience = {
      imageUrl: imageUrl,
      text: text,
    };
    alleExperience.push(e);
    renderExperiences();
  } catch (e) {
    console.error(e);
  }
}


