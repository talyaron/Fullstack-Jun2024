

interface Post {
  title: string;
  text: string;
  imageURL: string;
  id: string;
  editTitle?: boolean;
  editText?: boolean;
}

async function handleSendPost(event: Event) {
  event.preventDefault();
  const form = event.target as HTMLFormElement;

  const title = (form.elements.namedItem("title") as HTMLInputElement).value;
  const text = (form.elements.namedItem("text") as HTMLInputElement).value;
  const imageURL = (form.elements.namedItem("imageURL") as HTMLInputElement)
    .value;

  try {
    console.log("Sending post:", { title, text, imageURL }); // Debug log

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


    renderPosts(data.posts);
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

// async function handleSendPost(event: Event) {
//     event.preventDefault();
//     const form = event.target as HTMLFormElement;

//     const title = (form.elements.namedItem('title') as HTMLInputElement).value;
//     const text = (form.elements.namedItem('text') as HTMLInputElement).value;
//     const imageURL = (form.elements.namedItem('imageURL') as HTMLInputElement).value;

//     const newPost = { title, text, imageURL };
//     const posts = loadPostsFromLocalStorage();
//     posts.push(newPost);
//     savePostsToLocalStorage(posts);

//     form.reset();
//     renderPosts();
// }

function renderPosts(posts: Post[]) {
  const feedElement = document.getElementById("feed");
  if (!feedElement) throw new Error("Feed element not found");
console.log(posts);
  if(posts.length === 0) {
    feedElement.innerHTML = "";
    return;
  }

  const htmlPosts = posts
    .map((post) => {
      return renderPost(post);
    })
    .filter((post) => post !== null)
    .join("");

  feedElement.innerHTML = htmlPosts;
}

function renderPost(post: Post) {
  try {
    const html = `
            <div class="post">
                <h3 id="title-${post.id}">${post.title}</h3>
                <button onclick="handleEditTitle('${post.id}')">Edit</button>
                <button onclick="handleDeletePost('${post.id}')">Delete</button>
                <img src="${post.imageURL}" alt="Image" />
                <p>${post.text}</p>
            </div>
        `;
    return html;
  } catch (error) {
    console.error("Error:", error);
  }
}
function handleEditTitle(id: string) {
  console.log("Function handleEditTitle called for post:", id);
  const titleElement = document.getElementById(`title-${id}`);
  if (!titleElement) {
    console.error("Title element not found");
    return;
  }

  titleElement.contentEditable = "true";
  titleElement.focus();

  titleElement.addEventListener("blur", async () => {
    const title = titleElement.innerText;
    console.log("New title after edit:", title);

    titleElement.contentEditable = "false";

    try {
      const response = await fetch("http://localhost:3000/api/update-title", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, title }),
      });

      if (!response.ok) throw new Error("Failed to update title");
      console.log("Title updated successfully on the server");
    } catch (error) {
      console.error("Error updating title on server:", error);
    }
  });
}

async function handleDeletePost(id:string){
  try {
    const response = await fetch("http://localhost:3000/api/delete-post", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });

    if (!response.ok) throw new Error("Failed to delete post");
    console.log("Post deleted successfully on the server");

    fetchPosts();
  } catch (error) {
   console.error("Error deleting post:", error); 
  }
}
