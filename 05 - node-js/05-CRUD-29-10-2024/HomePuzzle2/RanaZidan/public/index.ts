
interface Post {
  title: string;
  text: string;
  imageURL: string;
}


async function handleSendPost1(event: Event) {
  event.preventDefault();
  const form = event.target as HTMLFormElement;

  const title = (form.elements.namedItem("title") as HTMLInputElement).value;
  const text = (form.elements.namedItem("text") as HTMLInputElement).value;
  const imageURL = (form.elements.namedItem("imageURL") as HTMLInputElement).value;

  try {
    console.log("Sending post:", { title, text, imageURL }); 

    const response = await fetch("http://localhost:3000/api/add-post", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, text, imageURL }),
    });

    if (!response.ok) throw new Error("Failed to add post");

    console.log("Post added successfully!");

    form.reset();
    await fetchPosts();
  } catch (error) {
    console.error("Error sending post:", error);
  }
}

async function fetchPosts() {
  try {
    const response = await fetch("http://localhost:3000/api/get-posts");
    const data = await response.json();
    const feedElement = document.getElementById("feed");
    if (!feedElement) throw new Error("Feed element not found");

    feedElement.innerHTML = "";
    data.posts.forEach((post: Post, index: number) => {
      const postElement = document.createElement("div");
      postElement.className = "post";

      postElement.innerHTML = `
        <h3>${post.title}</h3>
        <img src="${post.imageURL}" alt="Post image" />
        <p>${post.text}</p>
        <button class="delete-button" onclick="handleDeletePost(${index})">Delete</button>
      `;

      feedElement.appendChild(postElement);
    });
  } catch (error) {
    console.error("Error fetching posts:", error);
  }
}

async function handleDeletePost(index: number) {
  try {
    const response = await fetch(`http://localhost:3000/api/delete-post/${index}`, {
      method: 'DELETE'
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || 'Failed to delete post');
    }

    console.log('Post deleted successfully!');
    await fetchPosts(); 
  } catch (error) {
    console.error('Error deleting post:', error);
  }
}

function savePostsToLocalStorage(posts: Post[]) {
  localStorage.setItem("posts", JSON.stringify(posts));
}

function loadPostsFromLocalStorage(): Post[] {
  const posts = localStorage.getItem("posts");
  return posts ? JSON.parse(posts) : [];
}


document.addEventListener('DOMContentLoaded', () => {
  fetchPosts();
});