let editingPostId: string | null = null;

//function that send the post information to the server
async function sendPostToServer() {
    const title = (document.getElementById("form__title") as HTMLInputElement).value;
    const description = (document.getElementById("form__description") as HTMLInputElement).value;
    const username = (document.getElementById("form__username") as HTMLInputElement).value;
    const imgUrl = (document.getElementById("form__imgurl") as HTMLInputElement).value;
    const post = { title, description, username, imgUrl };

    try {
        const method = editingPostId ? "PUT" : "POST";  // אם יש editingPostId אז אנחנו עושים עדכון
        const url = editingPostId ? `/api/post/update-post/${editingPostId}` : "/api/post/add-post";

        const response = await fetch(url, {
            method,
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ post }),
        });

        const data = await response.json();

        if (response.ok) {
            console.log(editingPostId ? "Post updated:" : "Post saved:", data.message);
            // אם אנחנו עושים עדכון, נרנדר את הפוסט מחדש
            if (editingPostId) {
                renderPost(data.post);  // renderPost יקבל את הפוסט המעודכן
            }
            editingPostId = null;  // נוודא שנחזור למצב שבו אין פוסט נערך
            resetForm();  // ננקה את הטופס
        } else {
            console.error("Error:", data.message);
        }
    } catch (error) {
        console.error("Failed to save or update post:", error);
    }
}

function editPost(post: any) {
    editingPostId = post.id;
    (document.getElementById("form__title") as HTMLInputElement).value = post.title;
    (document.getElementById("form__description") as HTMLInputElement).value = post.description;
    (document.getElementById("form__username") as HTMLInputElement).value = post.username;
    (document.getElementById("form__imgurl") as HTMLInputElement).value = post.imgUrl;
}

function renderPost(post) {
    console.log("Rendering post with ID:", post._id);
    let postElement = document.getElementById(post._id);

    if (!postElement) {
        postElement = document.createElement("div");
        postElement.className = "post";
        postElement.id = post._id;
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

    const deleteButton = postElement.querySelector(".delete-button");
    if (deleteButton) {
        deleteButton.addEventListener("click", () => {
            console.log("Post ID on delete button click:", post._id); 
            deletePost(post._id, postElement); 
        });
    }

    const editButton = postElement.querySelector(".edit-button");
    if (editButton) {
        editButton.addEventListener("click", () => {
            editPost(post);
        });
    }
}

async function createNewPost() {
    const postData = {
        title: "הכותרת של הפוסט",
        description: "תיאור הפוסט",
        username: "שם המשתמש",
        imgUrl: "URL לתמונה"
    };

    try {
        const response = await fetch("/api/post/create", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(postData)
        });

        const data = await response.json();
        console.log("Created post:", data.post);
    } catch (error) {
        console.error("Error creating post:", error);
    }
}

//add event listener to buttun "send"
document.getElementById("send")?.addEventListener("click", sendPostToServer);

async function deletePost(postId, postElement) {
    console.log("Post ID in deletePost:", postId);

    if (!postId) {
        console.error("Post ID is undefined");
        return;
    }

    try {
        const response = await fetch(`/api/post/delete-post/${postId}`, {
            method: "DELETE",
        });

        if (response.ok) {
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


async function loadPosts() {
    try {
        const response = await fetch("/api/post/get-posts");
        const data = await response.json();

        console.log("Fetched posts:", data.posts);
        data.posts.forEach((post: any) => {
            console.log("Rendering post with ID:", post.id);
            renderPost(post);
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