let editingPostId: string | null = null;

//function that send the post information to the server
async function sendPostToServer() {
    const title = (document.getElementById("form__title") as HTMLInputElement).value;
    const description = (document.getElementById("form__description") as HTMLInputElement).value;
    const username = (document.getElementById("form__username") as HTMLInputElement).value;
    const imgUrl = (document.getElementById("form__imgurl") as HTMLInputElement).value;
    const id = editingPostId || crypto.randomUUID();
    const post = { id, title, description, username, imgUrl };

    try {
        const response = await fetch(editingPostId ? `/api/update-post/${id}` : "/api/add-post", {
            method: editingPostId ? "PUT" : "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ post }),
        });
        const data = await response.json();

        if (response.ok) {
            savePostToLocalStorage(post);
            if (editingPostId) {
                document.getElementById(editingPostId)?.remove();
            }
            renderPost(post);
            console.log("Post processed successfully:", data.message);
            editingPostId = null;
            resetForm();
        } else {
            console.error("Error:", data.message);
        }
    } catch (error) {
        console.error("Failed to process post:", error);
    }
}

function editPost(post: any) {
    editingPostId = post.id;
    (document.getElementById("form__title") as HTMLInputElement).value = post.title;
    (document.getElementById("form__description") as HTMLInputElement).value = post.description;
    (document.getElementById("form__username") as HTMLInputElement).value = post.username;
    (document.getElementById("form__imgurl") as HTMLInputElement).value = post.imgUrl;
}

function savePostToLocalStorage(post: any) {
    let posts = JSON.parse(localStorage.getItem("posts") || "[]");
    const existingPostIndex = posts.findIndex((p: any) => p.id === post.id);
    if (existingPostIndex !== -1) {
        posts[existingPostIndex] = post;
    } else {
        posts.push(post);
    }
    localStorage.setItem("posts", JSON.stringify(posts));
}

function renderPost(post: any) {
    let postElement = document.getElementById(post.id);

    if (!postElement) {
        postElement = document.createElement("div");
        postElement.className = "post";
        postElement.id = post.id;
        const postContainer = document.getElementById("posts");
        postContainer?.appendChild(postElement);
    }

    postElement.innerHTML = `
        <h2>${post.title}</h2>
        <p>${post.description}</p>
        <p>Posted by: ${post.username}</p>
        <img src="${post.imgUrl}" alt="Post Image">
        <button class="edit-button">Edit Post</button>
        <button class="delete-button">Delete Post</button>`;
    postElement.querySelector(".delete-button")?.addEventListener("click", () => {
        deletePost(post.id, postElement);
    });

    postElement.querySelector(".edit-button")?.addEventListener("click", () => {
        editPost(post);
    });
}

//add event listener to buttun "send"
document.getElementById("send")?.addEventListener("click", sendPostToServer);

async function deletePost(postId: string, postElement: HTMLElement) {
    try {
        const response = await fetch(`/api/delete-post/${postId}`, {
            method: "DELETE",
        });

        if (response.ok) {
            removePostFromLocalStorage(postId);
            postElement.remove();
            console.log("Post deleted successfully.");
        } else {
            const data = await response.json();
            console.error("Error deleting post:", data.message);
        }
    } catch (error) {
        console.error("Failed to delete post:", error);
    }
}

function removePostFromLocalStorage(postId: string) {
    const posts = JSON.parse(localStorage.getItem("posts") || "[]");
    const updatedPosts = posts.filter((post: any) => post.id !== postId);
    localStorage.setItem("posts", JSON.stringify(updatedPosts));
}

async function loadPosts() {
    try {
        const response = await fetch("/api/get-posts");
        const data = await response.json();
        
        data.posts.forEach((post: any) => {
            renderPost(post);
            savePostToLocalStorage(post);
        });
    } catch (error) {
        console.error("Failed to load posts:", error);
    }
}

function resetForm() {
    (document.getElementById("form__title") as HTMLInputElement).value = '';
    (document.getElementById("form__description") as HTMLInputElement).value = '';
    (document.getElementById("form__username") as HTMLInputElement).value = '';
    (document.getElementById("form__imgurl") as HTMLInputElement).value = '';
}

window.addEventListener("load", loadPosts);