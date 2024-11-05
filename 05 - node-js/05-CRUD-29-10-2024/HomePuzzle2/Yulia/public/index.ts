async function fetchPosts() {
  try {
    const response = await fetch("http://localhost:3000/api/posts");
    const posts = await response.json();
    renderPosts(posts);
  } catch (error) {
    console.error("Error fetching posts:", error);
  }
}

async function handlePostSubmission(event: Event) {
    event.preventDefault();

    const titleInput = document.getElementById("title") as HTMLInputElement;
    const textInput = document.getElementById("text") as HTMLTextAreaElement;
    const imageUrlInput = document.getElementById("imageUrl") as HTMLInputElement;

    const title = titleInput.value;
    const text = textInput.value;
    const imageUrl = imageUrlInput.value;

    const response = await fetch("http://localhost:3000/api/posts", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, text, imageUrl }),
    });

    if (response.ok) {
        fetchPosts();
        titleInput.value = "";
        textInput.value = "";
        imageUrlInput.value = "";
    } else {
        console.error("Failed to create post");
    }
}

function renderPosts(
  posts: { title: string; text: string; imageUrl: string }[]
) {
  const postsContainer = document.getElementById(
    "postsContainer"
  ) as HTMLElement;
  postsContainer.innerHTML = "";

  posts.forEach((post) => {
    const postElement = document.createElement("div");
    postElement.classList.add("post");
    postElement.innerHTML = `
      <h2>${post.title}</h2>
      <p>${post.text}</p>
      <img src="${post.imageUrl}" alt="${post.title}">
    `;
    postsContainer.appendChild(postElement);
  });
}

document
  .getElementById("postForm")!
  .addEventListener("submit", handlePostSubmission);

fetchPosts();
