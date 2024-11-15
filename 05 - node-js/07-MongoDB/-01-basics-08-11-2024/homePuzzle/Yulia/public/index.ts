interface Post {
  title: string;
  text: string;
  imageURL: string;
  _id: string;
  username: string; 
  loginUsername: string;
  editTitle?: boolean;
  editText?: boolean;
  editImageURL?: boolean;
}

async function handleSendPost(event: Event) {
  event.preventDefault();
  const form = event.target as HTMLFormElement;

  const title = (form.elements.namedItem("title") as HTMLInputElement).value;
  const text = (form.elements.namedItem("text") as HTMLInputElement).value;
  const imageURL = (form.elements.namedItem("imageURL") as HTMLInputElement)
    .value;
  const username = localStorage.getItem("loginUsername"); // Get the login username from local storage

  if (!username) {
    alert("You need to be logged in to create a post.");
    return;
  }

  try {
    console.log("Sending post:", { title, text, username }); // Debug log

    const response = await fetch("http://localhost:3000/api/posts/add-post", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, text, imageURL, username }), // Send the post data to the server
    });

    if (!response.ok) throw new Error("Failed to add post");

    console.log("Post added successfully!");

    form.reset();
    fetchPosts();
  } catch (error) {
    console.error("Error sending post:", error);
  }
}

async function fetchPosts() {
  const isUserLoggedIn = localStorage.getItem("isUserLogin") === "true";
  const currentUsername = localStorage.getItem("loginUsername");

  if (!isUserLoggedIn || !currentUsername) {
    console.log(
      "User is not logged in or username not found. Posts are hidden."
    );
    return;
  }

  try {
    const response = await fetch(
      `http://localhost:3000/api/posts/get-posts?username=${currentUsername}`
    );
    if (!response.ok) {
      console.error(`Failed to fetch posts. Status: ${response.status}`);
      throw new Error("Failed to fetch posts");
    }

    const data = await response.json();

    if (!data.posts) {
      throw new Error("Invalid response format. 'posts' field is missing.");
    }

    const feedElement = document.getElementById("feed");
    if (!feedElement) throw new Error("Feed element not found");
    if (data.posts.length === 0) return;

    const userPosts = data.posts.filter(
      (post: Post) => post.username === currentUsername
    );
    renderPosts(userPosts);
  } catch (error) {
    console.error("Error fetching posts:", error);
  }
}
fetchPosts();

function savePostsToLocalStorage(posts: any[]) {
  localStorage.setItem("posts", JSON.stringify(posts));
}

function loadPostsFromLocalStorage(): any[] {
  const posts = localStorage.getItem("posts");
  return posts ? JSON.parse(posts) : [];
}

function renderPosts(posts: Post[]) {
  const feedElement = document.getElementById("feed");
  if (!feedElement) {
    console.error("Feed element not found");
    return;
  }
  const htmlPosts = posts
    .map((post) => renderPost(post))
    .filter((post) => post !== null)
    .join("");
  feedElement.innerHTML = htmlPosts;
}

function renderPost(post: Post) {
  const html = `
    <div class="post" id="post-${post._id}">
        <h3 id="title-${post._id}">${post.title}</h3>
        <p><strong>Posted by:</strong> ${post.username}</p> 
        <button onclick="handleEditPost('${post._id}')">Edit</button>
        <button onclick="handleDelete('${post._id}')">Delete</button>
        <img src="${post.imageURL}" alt="Image" id="image-${post._id}" />
        <p id="text-${post._id}">${post.text}</p>
    </div>
  `;
  return html;
}

function handleEditPost(id: string) {
  try {
    console.log("Editing post:", id);

    const titleElement = document.getElementById(`title-${id}`) as HTMLElement;
    const textElement = document.getElementById(`text-${id}`) as HTMLElement;
    const imageElement = document.getElementById(
      `image-${id}`
    ) as HTMLImageElement;

    if (!titleElement || !textElement || !imageElement) {
      throw new Error("Post elements not found");
    }

    titleElement.contentEditable = "true";
    textElement.contentEditable = "true";

    const imageInput = document.createElement("input");
    imageInput.type = "text";
    imageInput.value = imageElement.src;
    imageInput.id = `image-input-${id}`;
    imageElement.insertAdjacentElement("afterend", imageInput);

    const saveButton = document.createElement("button");
    saveButton.textContent = "Save";
    saveButton.onclick = async () => {
      const username = localStorage.getItem("loginUsername"); 
      const updatedPost = {
        title: titleElement.innerText,
        text: textElement.innerText,
        imageURL: imageInput.value,
        username: username, 
      };

      titleElement.contentEditable = "false";
      textElement.contentEditable = "false";
      imageInput.remove();
      saveButton.remove();

      try {
        const response = await fetch(
          `http://localhost:3000/api/posts/edit/${id}`,
          {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(updatedPost),
          }
        );

        if (!response.ok) throw new Error("Failed to update post on server");
        console.log("Post updated on server successfully!");
      } catch (error) {
        console.error("Error updating post:", error);
      }
    };

    const postElement = document.getElementById(`post-${id}`);
    if (postElement) postElement.appendChild(saveButton);
  } catch (error) {
    console.error("Error:", error);
  }
}

async function handleDelete(id: string) {
  try {
    const response = await fetch(
      `http://localhost:3000/api/posts/delete/${id}`,
      {
        method: "DELETE",
      }
    );
    if (!response.ok) throw new Error("Failed to delete post on server");
    console.log("Post deleted successfully!");
    const postElement = document.getElementById(`post-${id}`);
    if (postElement) postElement.remove();
  } catch (error) {
    console.error("Error deleting post:", error);
  }
}

function goToLogin() {
  window.location.href = "/login/login.html";
}

function goToRegister() {
  window.location.href = "/register/register.html";
}

// Add event listener to display the username when the page loads
document.addEventListener("DOMContentLoaded", () => {
  const username = localStorage.getItem("loginUsername");

  if (username) {
    const greetingElement = document.getElementById("greeting");
    if (greetingElement) {
      greetingElement.textContent = `Hi, ${username}!`;
    }
  }

  // add a logout button if the user is logged in
  const isUserLoggedIn = localStorage.getItem("isUserLogin") === "true";
  if (isUserLoggedIn) {
    const logoutButton = document.createElement("button");
    logoutButton.textContent = "Logout";
    logoutButton.onclick = handleLogout;
    document.body.appendChild(logoutButton);
  }
});

function handleLogout() {
  localStorage.removeItem("isUserLogin");
  localStorage.removeItem("loginUsername");
  window.location.href = "/login/login.html"; 
}

