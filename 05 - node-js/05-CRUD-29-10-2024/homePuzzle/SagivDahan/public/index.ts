async function handleSendPost(event: Event) {
    // prevent refresh the page on click send in the form
    event.preventDefault();
    const form = event.target as HTMLFormElement;

    // get form information
    const title = (form.elements.namedItem('title') as HTMLInputElement).value;
    const text = (form.elements.namedItem('text') as HTMLInputElement).value;
    const imageURL = (form.elements.namedItem('imageURL') as HTMLInputElement).value;

    // יצירת מזהה ייחודי לפוסט
    const newPost = { id: Date.now(), title, text, imageURL }; // המזהה הוא timestamp
    // load files from the local storage
    const posts = loadPostsFromLocalStorage();
    // push new post to array
    posts.push(newPost);
    // save the new information in the local storage
    savePostsToLocalStorage(posts);

    try {
        console.log('Sending post:', newPost);
        // send post request to the server
        const response = await fetch('http://localhost:3000/api/add-post', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            // compile the information to json
            body: JSON.stringify(newPost),
        });
        if (!response.ok) throw new Error('Failed to add post');
        console.log('Post added successfully!'); 
        // clear the form after successfully request
        form.reset();
        await fetchPosts();  // update the feed after new post
        renderPosts(); // render posts from localstorage
    } catch (error) {
        console.error('Error sending post:', error);
    }
}

// fetch posts function from the server
async function fetchPosts() {
    try {
        const response = await fetch('http://localhost:3000/api/get-posts');
        const data = await response.json();

        const feedElement = document.getElementById("feed");
        if (!feedElement) throw new Error("Feed element not found");

        feedElement.innerHTML = '';  // מאפס את התוכן הקודם של הפיד
        data.posts.forEach((post: { id: number, title: string, text: string, imageURL: string }) => {
            const postElement = document.createElement("div");
            postElement.className = "post";
            postElement.innerHTML = `
                <h3>${post.title}</h3>
                <img src="${post.imageURL}" alt="Image" />
                <p>${post.text}</p>
                <button onclick="editPost(${post.id}, '${post.title}', '${post.text}', '${post.imageURL}')">Edit</button>
            `;
            feedElement.appendChild(postElement);
        });
    } catch (error) {
        console.error("Error fetching posts:", error);
    }
}

// save posts in the localstorage
function savePostsToLocalStorage(posts: any[]) {
    localStorage.setItem('posts', JSON.stringify(posts));
}

// load posts from the local storage function
function loadPostsFromLocalStorage(): any[] {
    const posts = localStorage.getItem('posts');
    return posts ? JSON.parse(posts) : [];  // ממיר את המחרוזת לפורמט אובייקט
}

// render posts from the local storage function
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
            <button onclick="editPost(${post.id}, '${post.title}', '${post.text}', '${post.imageURL}')">Edit</button>
        `;
        feedElement.appendChild(postElement); 
    });
}

renderPosts();