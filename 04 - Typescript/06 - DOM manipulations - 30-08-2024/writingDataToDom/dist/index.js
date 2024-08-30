console.log('test');
function createPet(name, image) {
    return { name: name, image: image, id: crypto.randomUUID() };
}
var pets = [];
pets.push(createPet('Joi', 'https://www.pawlovetreats.com/cdn/shop/articles/pembroke-welsh-corgi-puppy_1000x.jpg?v=1628638716'));
pets.push(createPet('Mitzi', 'https://www.litter-robot.com/media/magefan_blog/rehoming-cat.png'));
pets.push(createPet('Sky', 'https://www.thesprucepets.com/thmb/_OLBCoSj8wLL89fDFLygbj_IsSo=/2121x0/filters:no_upscale():strip_icc()/GettyImages-1280919585-239302f6e0554d2fb156f24b8c618b78.jpg'));
pets.push(createPet('Luna', 'https://hips.hearstapps.com/hmg-prod/images/cutest-dog-breed-bernese-64356a43dbcc5.jpg'));
//view
function renderPets() {
    try {
        var petsElement_1 = document.querySelector('#pets');
        if (!petsElement_1)
            throw new Error('Could not find an element with the id "pets"');
        pets.forEach(function (pet) {
            var petElement = document.createElement('article');
            petElement.innerHTML = "\n            <h3>" + pet.name + "</h3>\n            <img src=\"" + pet.image + "\" />\n        ";
            petElement.classList.add('pet');
            petElement.id = pet.id;
            petsElement_1.appendChild(petElement);
        });
    }
    catch (error) {
        console.error(error);
    }
}
renderPets();
