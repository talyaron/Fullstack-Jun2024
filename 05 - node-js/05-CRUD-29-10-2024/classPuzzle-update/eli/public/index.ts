interface Post {
    title: string;
    text: string;
    imageURL: string;
    id: string;
    editTitle?: boolean;
    editText?: boolean;
}

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
        if (data.posts.length === 0) return;

        renderPosts(data.posts);
        return data.posts;
    } catch (error) {
        console.error("Error fetching posts:", error);
    }
}

fetchPosts();
async function updatePosts(pId,title) {
    try {

        const response = await fetch('http://localhost:3000/api/update-post', {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ pId,title}),
        });

        if(response.ok)
        {
            console.log("updated successfully")
        }
        
    } catch (error) {
        console.error("Error fetching posts:", error);
    }
}

async function deletePost(pId) {
    try {

        const response = await fetch('http://localhost:3000/api/delete-post', {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ pId}),
        });

        if(response.ok)
        {
            console.log("deleted successfully")
        }
        
    } catch (error) {
        console.error("Error fetching posts:", error);
    }
}



function savePostsToLocalStorage(posts: any[]) {
    localStorage.setItem('posts', JSON.stringify(posts));
}

function loadPostsFromLocalStorage(): any[] {
    const posts = localStorage.getItem('posts');
    return posts ? JSON.parse(posts) : [];
}


function renderPosts(posts: Post[]) {

    const feedElement = document.getElementById('feed');
    if (!feedElement) throw new Error('Feed element not found');


    const htmlPosts = posts.map((post) => {

        return renderPost(post);

    }).filter((post) => post !== null).join('');

    feedElement.innerHTML = htmlPosts;
}

function renderPost(post: Post) {
    try {
        const html = `
        <div class="post" id="${post.id}">
            <h3 id="title-${post.id}">${post.title}</h3><button onclick="handleEditTitle('${post.id}')" >Edit</button><button onclick="handleDeletePost('${post.id}')">Delete</button>
            <img src="${post.imageURL}" alt="Image" />
            <p>${post.text}</p>
        </div>
        `;
        return html;
    } catch (error) {
        console.error('Error:', error);

    }
}
function handleDeletePost(id: string) {
    try {
        console.log("Delete Post:", id);
        
        const postElement = document.getElementById(id);
        if (!postElement) throw new Error('Title element not found');
        console.log(postElement);
        postElement.remove();
        deletePost(id);
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
            updatePosts(id,title);
                //how to update the title in the server
        });

    } catch (error) {
        console.error('Error:', error);
    }

}
