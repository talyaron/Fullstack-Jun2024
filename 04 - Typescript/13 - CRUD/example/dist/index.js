var pets = [
    {
        name: "Bella",
        id: "1",
        price: 100,
        gender: "female",
        species: "dog",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwyXeKDN29AmZgZPLS7n0Bepe8QmVappBwZCeA3XWEbWNdiDFB"
    },
    {
        name: "Max",
        id: "2",
        price: 200,
        gender: "female",
        species: "dog",
        imageUrl: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQ_-mK3pYYbRL4nTT2BJgipnOTYSDf86-GSxxz-Um8XLL0as4cr"
    },
    {
        name: "Charlie",
        id: "3",
        price: 300,
        gender: 'male',
        species: "rabbit",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5m1U6B6YmAn31dvG9n1oXgXdkC7k1gZzcbA&s"
    }
];
//view
function renderPet(pet) {
    var petDiv = document.createElement("div");
    petDiv.className = "pet";
    petDiv.innerHTML = "\n    <div class=\"pet__name\">\n        <h2>" + pet.name + "</h2>\n        <input type=\"text\" value=\"" + pet.name + "\" onkeyup=\"handleUpdateName(event, '" + pet.id + "')\">\n    </div>\n    <img src=\"" + pet.imageUrl + "\" alt=\"" + pet.name + "\">\n    <p>" + pet.species + "</p>\n    <button onclick=\"handleDelete('" + pet.id + "')\">Delete</button>\n    ";
    return petDiv;
}
function renderPets(pets, element) {
    try {
        if (!element)
            throw new Error("Element not found");
        element.innerHTML = "";
        element.className = "pets";
        pets.forEach(function (pet) {
            element.appendChild(renderPet(pet));
        });
    }
    catch (error) {
        console.error(error);
    }
}
function main() {
    try {
        var petsDiv = document.getElementById("pets");
        if (!petsDiv)
            throw new Error("Element not found");
        renderPets(pets, petsDiv);
    }
    catch (error) {
        console.error(error);
    }
}
main();
//controller
function handleDelete(id) {
    try {
        var index = pets.findIndex(function (pet) { return pet.id === id; });
        pets.splice(index, 1);
        renderPets(pets, document.getElementById("pets"));
    }
    catch (error) {
        console.error(error);
    }
}
function handleUpdateName(event, id) {
    try {
        console.log(event);
        if (!id)
            throw new Error("Id not found");
        if (event.key === "Enter") {
            console.log(event.target.value);
            //find the pet in the array and change the element in the array
            var pet = pets.find(function (pet) { return pet.id === id; });
            if (pet) {
                pet.name = event.target.value;
                renderPets(pets, document.getElementById("pets"));
            }
        }
    }
    catch (error) {
        console.error(error);
    }
}
function handleAddPet(event) {
    try {
        event.preventDefault();
        var formData = new FormData(event.target);
        var newPet = {
            name: formData.get("name"),
            id: (pets.length + 1).toString(),
            price: Number(formData.get("price")),
            gender: formData.get("gender"),
            species: formData.get("species"),
            imageUrl: formData.get("imageUrl")
        };
        console.log(newPet);
        pets.unshift(newPet);
        renderPets(pets, document.getElementById("pets"));
    }
    catch (error) {
        console.error(error);
    }
}
