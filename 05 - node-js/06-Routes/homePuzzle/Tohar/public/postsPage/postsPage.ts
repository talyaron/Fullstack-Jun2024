type Post = {
    caption: string,
    imageURL: string, 
    id:string
};



function renderMainPage() {
    const html = `
    <h1>New Post</h1>
    <form onsubmit="handleCreatePost(event)">
        <input type="text" name="caption" placeholder="Write a caption..." required>
        <input type="url" name="imageURL" placeholder="Enter image URL" required>
        <button type="submit">Post</button>
    </form>
    `
    // <input type="file" name="image" id="imageUpload" name="imageUpload" accept="image/*">
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

        const response = await fetch('http://localhost:3000/api/post/create-post', {
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

        const response = await fetch('http://localhost:3000/api/post/get-posts');
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

function handleEditCaption(id: string) {
    try {
        const captionElement = document.getElementById(`caption-${id}`);
        if (!captionElement) throw new Error('Caption element not found');
        captionElement.contentEditable = 'true';
        captionElement.focus();
        captionElement.addEventListener("blur", (event) => {
            
                const caption = captionElement.innerText;
                captionElement.contentEditable = 'false';

                fetchEditedCaption(id, caption);
        });

    } catch (error) {
        console.error('Error:', error);
    }

};

async function fetchEditedCaption(id: string, caption:string) {
    
    const response = await fetch('http://localhost:3000/api/post/edit-caption/update-post', {
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


function handleEditImage(id: string, imageURL: string) {
    try {
        const imageElement = document.getElementById(`imageURL-${id}`);
        if (!imageElement) throw new Error('image element not found');
        
        const inputUrlElement = `
        <input id="imageInput" type="url" name="editImageURL" placeholder="Enter image URL" require>
        <button onclick="changeImage(id)">Edit</button>
        `

        document.querySelector<HTMLDivElement>('#editImageInput')!.innerHTML = inputUrlElement;

    } catch (error) {
        console.error('Error:', error);
    }

};

function changeImage(id: string) {
    const inputValue = (document.getElementById('imageInput') as HTMLInputElement).value;
    if(!inputValue) throw new Error('image input not found');

    document.querySelector<HTMLDivElement>('#editImageInput')!.innerHTML = '';

    fethcChangeImage(inputValue, id);
}

async function fethcChangeImage(image:string, id:string) {
    
    const response = await fetch('http://localhost:3000/api/post/update-image', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({image, id}),
    });

    if (!response.ok) {
        console.error("Failed to update image:", response.statusText);
        return;
    }

    const data = await response.json();
    console.log(data, 'success');
}


async function handlDeletePost(id: string) {
    try {
        const response = await fetch('http://localhost:3000/api/post/delete-post', {
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
