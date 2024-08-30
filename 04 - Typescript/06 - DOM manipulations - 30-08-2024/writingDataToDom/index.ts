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
        const petsElement = document.querySelector('#pets') as HTMLElement;
        if (!petsElement) throw new Error('Could not find an element with the id "pets"');
        
        pets.forEach(pet => {
            const petElement = document.createElement('div');
            petElement.innerHTML = `
            <h3>${pet.name}</h3>
            <img src="${pet.image}" />
        `;
            petElement.classList.add('pet');
            petElement.id = pet.id;
            petsElement.appendChild(petElement);
        });
    } catch (error) {
        console.error(error);
    }
}

renderPets();