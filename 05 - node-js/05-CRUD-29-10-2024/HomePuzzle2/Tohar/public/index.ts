interface Post {
    caption: string;
    imageURL: string;
    id: string;
    editTitle?: boolean;
    editText?: boolean;
}

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

function handleEditCaption(id: string) {
    try {
        const captionElement = document.getElementById(`caption-${id}`);
        if (!captionElement) throw new Error('Caption element not found');
        captionElement.contentEditable = 'true';
        captionElement.focus();
        captionElement.addEventListener("blur", (event) => {
            
                const caption = captionElement.innerText;
                captionElement.contentEditable = 'false';

                fetchEditedTitle(id, caption);
        });

    } catch (error) {
        console.error('Error:', error);
    }

};

async function fetchEditedTitle(id: string, caption:string) {
    
    const response = await fetch('http://localhost:3000/api/update-post', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({id, caption}),
    });

    if (!response.ok) {
        console.error("Failed to update title:", response.statusText);
        return;
    }

    const data = await response.json();
    console.log(data, 'success');
};


async function handlDeletePost(id: string) {
    

    try {
        const response = await fetch('http://localhost:3000/api/delete-post', {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({id}),
            
        });
        console.log('in delete');
        if (!response.ok) {
            console.error("Failed to update title:", response.statusText);
            return;
        }
        const data = await response.json();
        console.log(data, 'success');
        fetchPosts();
    } catch (error) {
        console.error('Error:', error);
    }
};
