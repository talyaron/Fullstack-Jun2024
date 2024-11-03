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
    const response = await fetch("http://localhost:3000/api/add-post", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, text, imageURL }),
    });

    if (!response.ok) throw new Error("Failed to add post");
    form.reset();
    await fetchPosts();
  } catch (error) {
    console.error("Error sending post:", error);
  }
}

async function handleUpdatePost(index: number, field: 'title' | 'text' | 'imageURL', value: string) {
  try {
    const response = await fetch(`http://localhost:3000/api/update-post/${index}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ [field]: value })
    });

    if (!response.ok) throw new Error('Failed to update post');

    updateLocalPost(index, field, value);
  } catch (error) {
    console.error('Error updating post:', error);
  }
}

function updateLocalPost(index: number, field: 'title' | 'text' | 'imageURL', value: string) {
  const elementId = `${field}-${index}`;
  const element = document.getElementById(elementId);

  if (!element) return;

  if (field === 'imageURL') {
   
    const imgElement = document.getElementById(`image-display-${index}`) as HTMLImageElement;
    if (imgElement) {
      imgElement.src = value;
    }
    (element as HTMLInputElement).value = value;
  } else {
    
    element.textContent = value;
  }
}

async function handleDeletePost(index: number) {
  if (confirm('Are you sure you want to delete this post?')) {
    try {
      const response = await fetch(`http://localhost:3000/api/delete-post/${index}`, {
        method: 'DELETE'
      });

      if (!response.ok) throw new Error('Failed to delete post');
      await fetchPosts();
    } catch (error) {
      console.error('Error deleting post:', error);
    }
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
  <div class="post-content">
    <div class="field-container">
      <h3 class="post-title" id="title-${index}">${post.title}</h3>
    </div>
    <div class="edit-button-container">
      <button class="edit-button" onclick="makeEditable('title-${index}', ${index}, 'title')">
        Edit
      </button>
    </div>

    <div class="field-container">
      <img id="image-display-${index}" src="${post.imageURL}" alt="Post image" />
    </div>
    <div class="edit-button-container">
      <button class="edit-button" onclick="toggleImageInput(${index})">
        Edit
      </button>
    </div>
    <input type="text" id="image-${index}" class="image-url-input" value="${post.imageURL}" style="display: none;" onchange="updateImage(${index})" />

    <div class="field-container">
      <p class="post-text" id="text-${index}">${post.text}</p>
    </div>
    <div class="edit-button-container">
      <button class="edit-button" onclick="makeEditable('text-${index}', ${index}, 'text')">
        Edit
      </button>
    </div>
    </br>
    <button class="delete-button" onclick="handleDeletePost(${index})">Delete</button>
  </div>
`;

      feedElement.appendChild(postElement);
    });
  } catch (error) {
    console.error("Error fetching posts:", error);
  }
}

function makeEditable(elementId: string, index: number, field: 'title' | 'text' | 'imageURL') {
  const element = document.getElementById(elementId);
  if (!element) return;

  const currentText = field === 'imageURL' ? 
    (element as HTMLInputElement).value : 
    element.textContent || '';

  const input = document.createElement('input');
  input.type = 'text';
  input.value = currentText;
  input.className = 'edit-input';
  
  input.onblur = async () => {
    await handleUpdatePost(index, field, input.value);
    if (field === 'imageURL') {
      (element as HTMLInputElement).value = input.value;
      element.style.display = 'none';
      const img = document.getElementById(`image-display-${index}`) as HTMLImageElement;
      if (img) {
        img.src = input.value;
      }
    } else {
      element.textContent = input.value;
    }
    element.style.display = 'block';
  };

  if (field === 'imageURL') {
    element.style.display = 'none';
    const imageInput = document.getElementById(`image-${index}`) as HTMLInputElement;
    if (imageInput) {
      imageInput.style.display = 'block';
      imageInput.focus();
    }
  } else {
    element.textContent = '';
    element.appendChild(input);
    input.focus();
  }
}

function toggleImageInput(index: number) {
  const imageInput = document.getElementById(`image-${index}`) as HTMLInputElement;
  imageInput.style.display = imageInput.style.display === 'none' ? 'block' : 'none';
  if (imageInput.style.display === 'block') {
    imageInput.focus();
  }
}

function updateImage(index: number) {
  const imageInput = document.getElementById(`image-${index}`) as HTMLInputElement;
  const img = document.getElementById(`image-display-${index}`) as HTMLImageElement;
  if (img) {
    img.src = imageInput.value;
  }
}

document.addEventListener('DOMContentLoaded', fetchPosts);
