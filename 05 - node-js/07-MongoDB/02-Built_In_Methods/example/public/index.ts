interface Pet {
    name: string;
    gender: string;
    imageURL: string;
    id: string;
}

async function handleSendPet(event: Event) {
    event.preventDefault();
    const form = event.target as HTMLFormElement;

    const name = (form.elements.namedItem('name') as HTMLInputElement).value;
    const gender = (form.elements.namedItem('gender') as HTMLInputElement).value;
    const imageURL = (form.elements.namedItem('imageURL') as HTMLInputElement).value;

    try {
        

        const response = await fetch('http://localhost:3000/api/pets/add-pet', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, gender, imageURL }),
        });

        if (!response.ok) throw new Error('Failed to add post');

        const data = await response.json();
        console.log(data);

        form.reset();
        fetchPets();

    } catch (error) {
        console.error('Error sending post:', error);
    }
}

async function fetchPets() {
    try {

        const response = await fetch('http://localhost:3000/api/pets/get-pets');
        if (!response.ok) throw new Error('Failed to fetch posts');
        const data = await response.json();

        const feedElement = document.getElementById("feed");
        if (!feedElement) throw new Error("Feed element not found");
        if (data.pets.length === 0) return;

        renderPets(data.pets);
    } catch (error) {
        console.error("Error fetching posts:", error);
    }
}

fetchPets();


function savePostsToLocalStorage(posts: any[]) {
    localStorage.setItem('posts', JSON.stringify(posts));
}

function loadPostsFromLocalStorage(): any[] {
    const posts = localStorage.getItem('posts');
    return posts ? JSON.parse(posts) : [];
}

// async function handleSendPost(event: Event) {
//     event.preventDefault();
//     const form = event.target as HTMLFormElement;

//     const title = (form.elements.namedItem('title') as HTMLInputElement).value;
//     const text = (form.elements.namedItem('text') as HTMLInputElement).value;
//     const imageURL = (form.elements.namedItem('imageURL') as HTMLInputElement).value;

//     const newPost = { title, text, imageURL };
//     const posts = loadPostsFromLocalStorage();
//     posts.push(newPost);
//     savePostsToLocalStorage(posts);

//     form.reset();
//     renderPets();
// }

function renderPets(pets: Pet[]) {

    const feedElement = document.getElementById('feed');
    if (!feedElement) throw new Error('Feed element not found');


    const htmlPets = pets.map((pet) => {

        return renderPet(pet);

    }).filter((post) => post !== null).join('');

    feedElement.innerHTML = htmlPets;
}

function renderPet(pet: Pet) {
    try {
        console.log(pet)
        const html = `
        <div class="pet">
            <h3 id="title-${pet.id}">${pet.name}</h3>
            ${pet.imageURL ? `<img src="${pet.imageURL}" alt="Image" />` : ''}
            <button onclick="handleEditTitle('${pet.id}')" >Edit</button><button>Delete</button>
            <p>${pet.gender}</p>
        </div>
        `;
        return html;
    } catch (error) {
        console.error('Error:', error);

    }
}

function handleEditTitle(id: string) {
    try {
        console.log("Edit title:", id);
        const titleElement = document.getElementById(`title-${id}`);
        if (!titleElement) throw new Error('Title element not found');
        titleElement.contentEditable = 'true';
        titleElement.focus();
        titleElement.addEventListener("blur", (event) => {

            const title = titleElement.innerText;
            console.log("New title:", title);
            titleElement.contentEditable = 'false';

            //how to update the title in the server
        });

    } catch (error) {
        console.error('Error:', error);
    }

}
