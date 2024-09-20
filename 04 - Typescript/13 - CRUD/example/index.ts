interface Pet {
    name: string;
    id: string;
    price: number;
    gender: "male" | "female";
    species: string;
    imageUrl: string;
    bread?: string;
}

const pets: Pet[] = [
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
function renderPet(pet: Pet) {
    const petDiv = document.createElement("div");
    petDiv.className = "pet";
    petDiv.innerHTML = `
    <div class="pet__name">
        <h2>${pet.name}</h2>
        <input type="text" value="${pet.name}" onkeyup="handleUpdateName(event, '${pet.id}')">
    </div>
    <img src="${pet.imageUrl}" alt="${pet.name}">
    <p>${pet.species}</p>
    <button onclick="handleDelete('${pet.id}')">Delete</button>
    `;
    return petDiv;
}

function renderPets(pets: Pet[], element: HTMLElement | null) {
    try {
        if (!element) throw new Error("Element not found");
        element.innerHTML = "";
        element.className = "pets";
        pets.forEach(pet => {
            element.appendChild(renderPet(pet));
        });
    } catch (error) {
        console.error(error);
    }

}

function main() {
    try {
        const petsDiv = document.getElementById("pets");
        if (!petsDiv) throw new Error("Element not found");
        renderPets(pets, petsDiv);
    } catch (error) {
        console.error(error);

    }
}
main();

//controller
function handleDelete(id: string) {
    try {
        const index = pets.findIndex(pet => pet.id === id);
        pets.splice(index, 1);
        renderPets(pets, document.getElementById("pets"));
    } catch (error) {
        console.error(error);
    }
}

function handleUpdateName(event, id: string) {
    try {
        console.log(event)
        if (!id) throw new Error("Id not found");

        if (event.key === "Enter") {
            console.log(event.target.value);

            //find the pet in the array and change the element in the array
            const pet = pets.find(pet => pet.id === id);
            if (pet) {
                pet.name = event.target.value;
                renderPets(pets, document.getElementById("pets"));
            }
        }

    } catch (error) {
        console.error(error);

    }
}

function handleAddPet(event) {
    try {
        event.preventDefault();
        const formData = new FormData(event.target);
        const newPet: Pet = {
            name: formData.get("name") as string,
            id: (pets.length + 1).toString(),
            price: Number(formData.get("price")),
            gender: formData.get("gender") as "male" | "female",
            species: formData.get("species") as string,
            imageUrl: formData.get("imageUrl") as string

        }
        console.log(newPet)
        pets.unshift(newPet);
        renderPets(pets, document.getElementById("pets"));
    } catch (error) {
        console.error(error);
    }
}