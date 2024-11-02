document.addEventListener('DOMContentLoaded', () => {
    getPosts();
});

async function getPosts() {
    try {
        const response = await fetch('/api/get-posts');
        const posts = await response.json();
        const postsContainer = document.querySelector<HTMLDivElement>("#posts");
        if (!postsContainer) throw new Error('No posts container found');
        postsContainer.innerHTML = '';

        posts.forEach(post => {
            const postElement = document.createElement("div");
            postElement.setAttribute("data-id", post.id);
            postElement.classList.add("post");
            postElement.innerHTML = `
                <h2 class="post-title">${post.title}</h2>
                <p class="post-text">${post.text}</p>
                <img src="${post.image}" alt="${post.title}" class="post-image" />
                <input type="file" class="post-image-input" style="display: none;" accept="image/*" />
                <button class="update-button" onclick="handleToggleUpdatePost('${post.id}')">Update</button>
                <button class="delete-button" onclick="handleDeletePost('${post.id}')">Delete</button>
            `;
            postsContainer.appendChild(postElement);
        });

    } catch (error) {
        console.error(error);
    }
}

async function handleSendForm(event: Event) {
    try {
        event.preventDefault();

        const target = event.target as HTMLFormElement;
        const titleInput = target.querySelector('input[name="title"]') as HTMLInputElement;
        const title = titleInput.value;
        const textInput = target.querySelector('input[name="text"]') as HTMLInputElement;
        const text = textInput.value;
        const imageFile = (target.querySelector('input[type="file"]') as HTMLInputElement).files?.[0];
        if (!titleInput || !textInput) throw new Error('Something Wrong with the handleSendForm');

        let imageUrl = '';
        if (imageFile) {
            const imageData = new FormData();
            imageData.append('image', imageFile);

            const uploadResponse = await fetch('/api/upload-image', {
                method: 'POST',
                body: imageData
            });
            const uploadResult = await uploadResponse.json();
            imageUrl = uploadResult.imageUrl;
        }

        const response = await fetch('/api/send-form', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ title, text, image: imageUrl })
        });

        if (!response.ok) throw new Error('Failed to send post data');
        await getPosts();

    } catch (error) {
        console.error(error);
    }
}

async function handleToggleUpdatePost(id: string) {
    const postElement = document.querySelector(`.post[data-id='${id}']`);
    if (!postElement) throw new Error("Post Element Not Found");

    const titleElement = postElement.querySelector('.post-title') as HTMLHeadingElement;
    const textElement = postElement.querySelector('.post-text') as HTMLParagraphElement;
    const imageInputElement = postElement.querySelector('.post-image-input') as HTMLInputElement;

    if (titleElement.isContentEditable) {
        const updatedTitle = titleElement.innerText;
        const updatedText = textElement.innerText;

        const newImageFile = imageInputElement.files?.[0];
        let imageUrl = postElement.querySelector('.post-image')?.getAttribute('src') || '';

        if (newImageFile) {
            const imageData = new FormData();
            imageData.append('image', newImageFile);

            const uploadResponse = await fetch('/api/upload-image', {
                method: 'POST',
                body: imageData
            });
            const uploadResult = await uploadResponse.json();
            imageUrl = uploadResult.imageUrl; 
        }

        await updatePost(id, updatedTitle, updatedText, imageUrl);
        titleElement.contentEditable = "false";
        textElement.contentEditable = "false"; 
        imageInputElement.style.display = "none"; 
    } else {
        titleElement.contentEditable = "true";
        textElement.contentEditable = "true"; 
        imageInputElement.style.display = "block"; 
        titleElement.focus();
    }
}

async function updatePost(id: string, title: string, text: string, image: string) {
    try {
        const response = await fetch(`/api/update-post/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ title, text, image })
        });

        if (!response.ok) throw new Error('Failed to update post');
        console.log("Post updated successfully");
        await getPosts();

    } catch (error) {
        console.error(error);
    }
}

async function handleDeletePost(id: string) {
    try {
        const response = await fetch(`/api/delete-post/${id}`, {
            method: 'DELETE'
        });

        if (!response.ok) throw new Error('Failed to delete post');
        await getPosts();

    } catch (error) {
        console.error(error);
    }
}
