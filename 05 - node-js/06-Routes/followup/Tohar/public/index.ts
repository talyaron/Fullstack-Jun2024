import {posts} from '../src/models/postsModel';

function renderMainPage() {

    const html = `
    <h1>New Post</h1>
    <form onsubmit="handleCreatePost(event)">
        <input type="text" name="caption" placeholder="Write a caption..." required>
        <input type="url" name="imageURL" placeholder="Enter image URL" required>
        <button type="submit">Post</button>
    </form>
    `
    document.querySelector<HTMLDivElement>('#main')!.innerHTML = html;
    
};

renderMainPage();

async function handleCreatePost(event: Event) {
    event.preventDefault();
    const form = event.target as HTMLFormElement;

    const caption = (form.elements.namedItem('caption') as HTMLInputElement).value;
    const imageURL = (form.elements.namedItem('imageURL') as HTMLInputElement).value;
    
    
    try {
        console.log('Sending post:', { caption, imageURL });

        const response = await fetch('http://localhost:3000/api/add-post', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ caption, imageURL }),
        });

        if (!response.ok) throw new Error('Failed to add post');

        console.log('Post added successfully!');

        form.reset();
        fetchPosts();

    } catch (error) {
        console.error('Error sending post:', error);
    }
}

async function fetchPosts() {
    try {

        const response = await fetch('http://localhost:3000/api/get-posts');
        const data = await response.json();

        // const feedElement = document.getElementById("feed");
        // if (!feedElement) throw new Error("Feed element not found");

        renderPosts(data.posts);
    } catch (error) {
        console.error("Error fetching posts:", error);
    }
};

function renderPosts(posts: Post[]) {

    const feedElement = document.getElementById('feed');
    if (!feedElement) throw new Error('Feed element not found');
    
    const htmlPosts = posts.map((post) => {
    return renderPost(post);
    }).filter((post) => post !== null).join('');

    feedElement.innerHTML = htmlPosts;
};

function renderPost(post: Post) {
    try {
        // changeFileToImage();

        const html = `
        <div class="post" id="post">
            <img src="${post.imageURL}" id="imageURL-${post.id}" alt="inputImage" />
            <h3 id="caption-${post.id}">${post.caption}</h3>
            <button onclick="handleEditCaption('${post.id}')" >Edit</button>
            <button onclick="handlDeletePost('${post.id}')">Delete</button>
            <button onclick="handleEditImage('${post.id}')">Change Image</button>
            <div id="editImageInput"></div>
        </div>
        `;

        
        return html;
    } catch (error) {
        console.error('Error:', error);
    }
};
