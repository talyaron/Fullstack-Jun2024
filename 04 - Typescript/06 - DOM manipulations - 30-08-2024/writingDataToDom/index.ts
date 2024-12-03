//model
interface Pet {
    name: string;
    image: string;
    id: string;
}
console.log('test')
function createPet(name: string, image: string): Pet {
    return { name, image, id: crypto.randomUUID() };
}

const pets: Pet[] = [];
pets.push(createPet('Joi', 'https://www.pawlovetreats.com/cdn/shop/articles/pembroke-welsh-corgi-puppy_1000x.jpg?v=1628638716'));
pets.push(createPet('Mitzi', 'https://www.litter-robot.com/media/magefan_blog/rehoming-cat.png'));
pets.push(createPet('Sky', 'https://www.thesprucepets.com/thmb/_OLBCoSj8wLL89fDFLygbj_IsSo=/2121x0/filters:no_upscale():strip_icc()/GettyImages-1280919585-239302f6e0554d2fb156f24b8c618b78.jpg'));
pets.push(createPet('Luna', 'https://hips.hearstapps.com/hmg-prod/images/cutest-dog-breed-bernese-64356a43dbcc5.jpg'));


//view
function renderPets() {
    try {
        //catch the element with the id pets
        const petsElement = document.querySelector('#pets') as HTMLElement;
        if (!petsElement) throw new Error('Could not find an element with the id "pets"');
        
        //foe each pet in the pets array, create an article element and append it to the pets element
        pets.forEach(pet => {   
            //create an article element
            const petElement = document.createElement('article');
            
            //set the innerHTML of the article element to the pet's name and image
            petElement.innerHTML = `
            <h3>${pet.name}</h3>
            <img src="${pet.image}" />
        `;
            //add the class pet to the article element
            petElement.classList.add('pet');
           
            //add the id of the pet to the article element
            petElement.id = pet.id;
            //append the article element to the pets element
            petsElement.appendChild(petElement);
        });
    } catch (error) {
        console.error(error);
    }
}

renderPets();