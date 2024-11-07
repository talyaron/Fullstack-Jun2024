//// Logout button on index page //////

document.getElementById("logout-button")?.addEventListener("click", async () => {
    try {
        const response = await fetch("/api/users/logout", { method: "POST" });
        if (response.ok) {
            window.location.href = "../login/login.html";
        } else {
            console.error("Failed to log out");
        }
    } catch (error) {
        console.error("Error logging out:", error);
    }
});

////// posts method ///// 

interface Post {
    title: string;
    text: string;
    image: string;
    id: string;
    editTitle?: boolean;
    editText?: boolean;
}

async function handleSendPost(event: Event) {
    event.preventDefault();
    const form = event.target as HTMLFormElement;

    const title = (form.elements.namedItem('title') as HTMLInputElement).value;
    const text = (form.elements.namedItem('text') as HTMLInputElement).value;
    const imageFile = (form.elements.namedItem('image') as HTMLInputElement).files?.[0];

    if (!imageFile) {
        console.error('Image file is required');
        return;
    }

    const reader = new FileReader();
    reader.onload = async (loadEvent) => {
        const imageBase64 = loadEvent.target?.result;

        try {
            console.log('Sending post:', { title, text, imageBase64 });

            const response = await fetch('http://localhost:3000/api/posts/add-post', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ title, text, image: imageBase64 }),
            });

            if (!response.ok) throw new Error('Failed to add post');

            console.log('Post added successfully!');
            form.reset();
            await fetchPosts();

        } catch (error) {
            console.error('Error sending post:', error);
        }
    };

    reader.readAsDataURL(imageFile);
}

async function fetchPosts() {
    try {
        const response = await fetch('http://localhost:3000/api/posts/get-posts');
        const data = await response.json();

        const feedElement = document.getElementById("feed");
        if (!feedElement) throw new Error("Feed element not found");
        if (data.posts.length === 0) return;

        renderPosts(data.posts);
    } catch (error) {
        console.error("Error fetching posts:", error);
    }
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
    return `
        <div class="post" id="post-${post.id}">
            <h3 id="title-${post.id}">${post.title}</h3>
            <img src="${post.image}" alt="Image" id="image-${post.id}" />
            <p id="text-${post.id}">${post.text}</p>
            <button onclick="handleEditTitle('${post.id}')">Edit Title</button>
            <button onclick="handleEditText('${post.id}')">Edit Text</button>
            <button onclick="handleEditImage('${post.id}')">Edit Image</button>
            <button onclick="handleDeletePost('${post.id}')">Delete</button>
        </div>
    `;
}

function handleEditTitle(id: string) {
    try {
        const titleElement = document.getElementById(`title-${id}`);
        if (!titleElement) throw new Error('Title element not found');

        titleElement.contentEditable = 'true';
        titleElement.focus();

        titleElement.addEventListener("blur", async () => {
            const title = titleElement.innerText;
            titleElement.contentEditable = 'false';

            await updatePost(id, { title });
        }, { once: true });

    } catch (error) {
        console.error('Error:', error);
    }
}

function handleEditText(id: string) {
    try {
        const textElement = document.getElementById(`text-${id}`);
        if (!textElement) throw new Error('Text element not found');

        textElement.contentEditable = 'true';
        textElement.focus();

        textElement.addEventListener("blur", async () => {
            const newText = textElement.innerText;
            textElement.contentEditable = 'false';

            await updatePost(id, { text: newText });
        }, { once: true });
    } catch (error) {
        console.error('Error editing text:', error);
    }
}

async function handleEditImage(id: string) {
    const newImageFile = await new Promise<File | null>((resolve) => {
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = 'image/*';
        input.onchange = (event) => {
            const file = (event.target as HTMLInputElement).files?.[0] || null;
            resolve(file);
        };
        input.click();
    });

    if (newImageFile) {
        const reader = new FileReader();
        reader.onload = async (loadEvent) => {
            const newImageBase64 = loadEvent.target?.result;
            if (typeof newImageBase64 === 'string') {
                await updatePost(id, { image: newImageBase64 });
            } else {
                console.error('Image data is not a valid string.');
            }
        };
        reader.readAsDataURL(newImageFile);
    }
}

async function updatePost(id: string, updatedFields: Partial<Post>) {
    try {
        const response = await fetch(`http://localhost:3000/api/posts/edit-post`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id, ...updatedFields }),
        });

        if (!response.ok) {
            const errorMessage = await response.text();
            console.error('Failed to update post. Server response:', errorMessage);
            throw new Error('Failed to update post');
        }

        console.log(`Post with ID ${id} updated successfully`);
        await fetchPosts();
    } catch (error) {
        console.error('Error updating post:', error);
    }
}

async function handleDeletePost(id: string) {
    console.log("Deleting post with ID:", id);
    try {
        const response = await fetch(`http://localhost:3000/api/posts/delete-post`, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id }),
        });

        if (!response.ok) {
            const errorMessage = await response.text();
            console.error('Failed to delete post. Server response:', errorMessage);
            throw new Error('Failed to delete post');
        }

        console.log(`Post with ID ${id} deleted successfully`);

        const feedElement = document.getElementById("feed");
        const postElement = document.getElementById(`post-${id}`);
        if (feedElement && postElement) {
            feedElement.removeChild(postElement);
        }

        if (feedElement && feedElement.children.length === 0) {
            feedElement.innerHTML = "<p>No posts available.</p>";
        }
    } catch (error) {
        console.error('Error deleting post:', error);
    }
}

fetchPosts();
