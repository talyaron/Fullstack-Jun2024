export async function fetchPosts() {
    try {

        const response = await fetch('http://localhost:3000/api/get-posts');
        const data = await response.json();

        const feedElement = document.getElementById("feed");
        if (!feedElement) throw new Error("Feed element not found");

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
        const html = `
        <div class="post">
            <img src="${post.imageURL}" alt="Image" />
            <h3 id="caption-${post.id}">${post.caption}</h3>
            <button onclick="handleEditCaption('${post.id}')" >Edit</button>
            <button onclick="handlDeletePost('${post.id}')">Delete</button>
            <button onclick="handlEditImage">Change Image</button>
            <p>${post.caption}</p>
        </div>
        `;
        return html;
    } catch (error) {
        console.error('Error:', error);
    }
}