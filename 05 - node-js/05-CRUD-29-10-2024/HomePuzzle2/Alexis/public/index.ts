interface Post {
    title: string;
    text: string;
    image: string;
    id: string;
}

async function handleSendPost(event: Event) {
    event.preventDefault();
    const form = event.target as HTMLFormElement;

    const title = (form.elements.namedItem('title') as HTMLInputElement).value.trim();
    const text = (form.elements.namedItem('text') as HTMLInputElement).value.trim();
    const imageUrl = (form.elements.namedItem('image') as HTMLInputElement).value.trim();

    console.log('Captured values:', { title, text, imageUrl });

    if (!title) {
        alert('Post title is required');
        return;
    }
    if (!text) {
        alert('Caption text is required');
        return;
    }
    if (!imageUrl) {
        alert('Image URL is required');
        return;
    }

    const urlPattern = /^(ftp|http|https):\/\/[^ "]+$/;
    if (!urlPattern.test(imageUrl)) {
        alert('Please enter a valid image URL');
        return;
    }

    try {
        console.log('Sending post:', { title, text, imageUrl });

        const response = await fetch('http://localhost:3000/api/add-post', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title, text, image: imageUrl }),
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || 'Failed to add post');
        }

        console.log('Post added successfully!');
        form.reset();
        await fetchPosts();

    } catch (error) {
        alert(`Error sending post: ${error.message}`);
    }
}

async function fetchPosts() {
    try {
        const response = await fetch('http://localhost:3000/api/get-posts');
        const data = await response.json();

        const feedElement = document.getElementById("feed");
        if (!feedElement) throw new Error("Feed element not found");
        if (data.posts.length === 0) {
            feedElement.innerHTML = "<p>No posts available.</p>";
            return;
        }

        renderPosts(data.posts);
    } catch (error) {
        console.error("Error fetching posts:", error);
    }
}

function renderPosts(posts: Post[]) {
    const feedElement = document.getElementById('feed');
    if (!feedElement) throw new Error('Feed element not found');

    const htmlPosts = posts.map(renderPost).filter(post => post !== null).join('');
    feedElement.innerHTML = htmlPosts;
}

function renderPost(post: Post) {
    return `
        <div class="post" id="post-${post.id}">
            <h3 id="title-${post.id}">${post.title}</h3>
            <img src="${post.image}" alt="Image" id="image-${post.id}" />
            <p id="text-${post.id}">${post.text}</p>
            <button onclick="handleEditField('${post.id}', 'title')">Edit Title</button>
            <button onclick="handleEditField('${post.id}', 'text')">Edit Text</button>
            <button onclick="handleEditImage('${post.id}')">Edit Image URL</button>
            <button onclick="handleDeletePost('${post.id}')">Delete</button>
        </div>
    `;
}

async function handleEditField(id: string, field: 'title' | 'text') {
    try {
        const element = document.getElementById(`${field}-${id}`);
        if (!element) throw new Error(`${field.charAt(0).toUpperCase() + field.slice(1)} element not found`);

        element.contentEditable = 'true';
        element.focus();

        element.addEventListener("blur", async () => {
            const newValue = element.innerText.trim();
            element.contentEditable = 'false';

            if (newValue) {
                await updatePost(id, { [field]: newValue });
            }
        }, { once: true });

    } catch (error) {
        console.error('Error:', error);
        alert(`Error editing ${field}: ${error.message}`);
    }
}

async function handleEditImage(id: string) {
    const newImageUrl = prompt("Enter the new image URL:");
    if (newImageUrl) {
        const urlPattern = /^(ftp|http|https):\/\/[^ "]+$/;
        if (!urlPattern.test(newImageUrl)) {
            alert('Please enter a valid image URL');
            return;
        }
        await updatePost(id, { image: newImageUrl });
    }
}

async function updatePost(id: string, updatedFields: Partial<Post>) {
    try {
        const response = await fetch(`http://localhost:3000/api/edit-post`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id, ...updatedFields }),
        });

        if (!response.ok) throw new Error('Failed to update post');

        console.log(`Post with ID ${id} updated successfully`);
        await fetchPosts();
    } catch (error) {
        console.error('Error updating post:', error);
        alert(`Error updating post: ${error.message}`);
    }
}

async function handleDeletePost(id: string) {
    console.log("Deleting post with ID:", id);
    try {
        const response = await fetch(`http://localhost:3000/api/delete-post`, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id }),
        });

        if (!response.ok) {
            console.error('Failed to delete post. Server response:', await response.json());
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
        alert(`Error deleting post: ${error.message}`);
    }
}

fetchPosts();
