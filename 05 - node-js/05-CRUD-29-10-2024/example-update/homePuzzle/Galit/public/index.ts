async function handleSendPost(event: Event) {
    event.preventDefault();
    const form = event.target as HTMLFormElement;

    const title = (form.elements.namedItem('title') as HTMLInputElement).value;
    const text = (form.elements.namedItem('text') as HTMLInputElement).value;
    const imageURL = (form.elements.namedItem('imageURL') as HTMLInputElement).value;

    try {
        console.log('Sending post:', { title, text, imageURL });  // Debug log

        const response = await fetch('http://localhost:3000/api/add-post', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title, text, imageURL }),
        });

        if (!response.ok) throw new Error('Failed to add post');

        console.log('Post added successfully!'); 

        form.reset();
        await fetchPosts();  

    } catch (error) {
        console.error('Error sending post:', error);
    }
}

async function fetchPosts() {
    try {
        const response = await fetch('http://localhost:3000/api/get-posts');
        const data = await response.json();
        
        const feedElement = document.getElementById("feed");
        if (!feedElement) throw new Error("Feed element not found");

        feedElement.innerHTML = ''; 
        data.posts.forEach((post: { title: string, text: string, imageURL: string }) => {
            const postElement = document.createElement("div");
            postElement.className = "post";

            postElement.innerHTML = `
                <h3>${post.title}</h3>
                <img src="${post.imageURL}" alt="Image" />
                <p>${post.text}</p>
            `;

            feedElement.appendChild(postElement);
        });
    } catch (error) {
        console.error("Error fetching posts:", error);
    }
}

fetchPosts();


function savePostsToLocalStorage(posts: any[]) {
    localStorage.setItem('posts', JSON.stringify(posts));
}

function loadPostsFromLocalStorage(): any[] {
    const posts = localStorage.getItem('posts');
    return posts ? JSON.parse(posts) : [];
}

async function handleSendPost(event: Event) {
    event.preventDefault();
    const form = event.target as HTMLFormElement;

    const title = (form.elements.namedItem('title') as HTMLInputElement).value;
    const text = (form.elements.namedItem('text') as HTMLInputElement).value;
    const imageURL = (form.elements.namedItem('imageURL') as HTMLInputElement).value;

    const newPost = { title, text, imageURL };
    const posts = loadPostsFromLocalStorage();
    posts.push(newPost);
    savePostsToLocalStorage(posts);

    form.reset();
    renderPosts();
}

function renderPosts() {
    const posts = loadPostsFromLocalStorage();
    const feedElement = document.getElementById('feed');
    if (!feedElement) throw new Error('Feed element not found');

    feedElement.innerHTML = '';
    posts.forEach((post) => {
        const postElement = document.createElement('div');
        postElement.className = 'post';

        postElement.innerHTML = `
            <h3>${post.title}</h3>
            <img src="${post.imageURL}" alt="Image" />
            <p>${post.text}</p>
        `;
        feedElement.appendChild(postElement);
    });
}

renderPosts();
