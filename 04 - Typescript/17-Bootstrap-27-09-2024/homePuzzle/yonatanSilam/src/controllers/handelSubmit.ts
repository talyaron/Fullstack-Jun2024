import { addExperience } from "./addExperience";

export function handleSubmit( ev: SubmitEvent) {
  try{  
    ev.preventDefault();
    const form = ev.target as HTMLFormElement;
    const formData = new FormData(form);
    const imageUrl= formData.get('imageUrl')
    const text= formData.get('text')
    addExperience(String(imageUrl),String(text));
    form.reset();
    }catch(e){
        console.error(e);
    }
  }
    