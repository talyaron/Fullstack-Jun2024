const localStorageDetail = localStorage.getItem("key");
const key: string = localStorageDetail ? JSON.parse(localStorageDetail) : "";

checkKey();

async function checkKey() {
  try {
    if (key.length > 1) {
      const response = await fetch(`http://localhost:3000/api/check-key`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ key }),
      });
      const data = await response.json();
      const { message } = data;
      const { name } = data;
      //console.log(message);
      if (!data.error) {
        console.log(message);
        getPosts();
        setInterval(getPosts, 300);
        sayHelloToUser(name);
        return;
      }
      console.log(data);
      localStorage.removeItem("key");
      redirectToLogin();
    } else redirectToLogin();
  } catch (error) {
    console.error(error);
  }
}
function sayHelloToUser(name: string) {
  const helloElement = document.getElementById("helloUser-text") as HTMLElement;
  helloElement.innerText = `Hello ${name}`;
}
let postLength = 0;

async function checkForm(event) {
  try {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("key", key);
    const response = await fetch("http://localhost:3000/api/add-post", {
      method: "POST",

      body: formData,
    });
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

let selfPost = false;

function switchView() {
  updated = true;
  const switchViewButton = document.getElementById(
    "viewSwitcher"
  ) as HTMLElement;
  selfPost = !selfPost;
  if (!selfPost) {
    switchViewButton.innerText = "see only your posts";
  } else switchViewButton.innerText = "see all posts";
}

async function logOut() {
  try {
    const response = await fetch(`http://localhost:3000/api/log-out`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ key }),
    });
    const data = await response.json();
    const { message } = data;
    console.log(message);
    localStorage.removeItem("key");
    redirectToLogin();
    console.log(data);
    return;
  } catch (error) {
    console.error(error);
  }
}

async function redirectToLogin() {
  if (postLength < 0) return;
  document.body.innerHTML = ` <div class="redirect-container">
    <div class="redirect-message">
      <h2>Redirecting...</h2>
      <p>Please wait while we take you to the login page.</p>
    </div>
    <div class="spinner-container">
      <div class="spinner"></div>
    </div>
  </div>`;
  setTimeout(() => {
    window.location.href = "http://localhost:3000/login";
  }, 500);
  postLength = -1;
}
let updated = false;

async function getPosts() {
  try {
    const response = await fetch("http://localhost:3000/api/get-posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ key }),
    });
    const data = await response.json();
    const { postsOfAll } = data;
    if (postLength !== postsOfAll.length || updated == true) {
      renderPosts(postsOfAll);
      postLength = postsOfAll.length;
      updated = false;
    }
    // console.log(posts);
  } catch (error) {
    console.error(error);
  }
}

function renderPosts(posts) {
  try {
    const postsElement = document.getElementById("feed") as HTMLElement;
    postsElement.innerHTML = "";
    if (!postsElement) throw new Error("Element with ID 'feed' not found.");
    posts.forEach((post) => {
      console.log(`hello${post.userMade}`);
      if (selfPost === true && !post.userMade) {
        console.log(`skipped${post.name}`);
        return;
      }
      const postElement = document.createElement("div") as HTMLElement;
      if (post.img) {
        postElement.innerHTML = `<div id="${post.id}" class="post">
       <div id="name"><h1>${post.creatorName}<h1></div>
      <div id="text"> <h1 id="title-${post.id}"> ${post.title} </h1>  <p> ${post.description} </p>  </div> 
       <img id ="img-${post.id}" src="http://localhost:3000/uploads/${post.img}">  </div>   `;
      } else {
        postElement.innerHTML = `<div id="${post.id}" class="post">
           <div id="name"><h1>${post.creatorName}<h1></div>
     <div id="bigText"> <h1 id="title-${post.id}"> ${post.title} </h1>  <p id="desc-${post.id}"> ${post.description} </p> </div> `;
      }
      if (post.userMade) {
        const interactButtons = document.createElement("div") as HTMLElement;
        interactButtons.id = "interactButtons";
        createButtons(interactButtons,post.id);
        postElement.appendChild(interactButtons);
      }
      postsElement.appendChild(postElement);
    });
  } catch (error) {
    console.error("Error fetching posts:", error);
  }
}
function updatePost(id) {
  try {
    const buttonUpdate = document.getElementById(`update-${id}`) as HTMLElement;
    if (!buttonUpdate) throw new Error("No update button found");
    
    buttonUpdate.innerText = "Save";
    
    const titleElement = document.getElementById(`title-${id}`) as HTMLElement;
    if (!titleElement) throw new Error("Title element not found");
    titleElement.contentEditable = 'true';
    titleElement.focus();

    const descElement = document.getElementById(`desc-${id}`) as HTMLElement;
    if (!descElement) throw new Error("Description element not found");
    descElement.contentEditable = 'true';

    const imgElement = document.getElementById(`img-${id}`) as HTMLImageElement; 
    const imgSrc = imgElement ? imgElement.src : ''; 


    const handleUpdateClick = () => {
      const title = titleElement.innerText;
      const desc = descElement.innerText;
      const img = imgElement ? imgElement.src : ''; 

      updatePostServer(id, title, desc, img);
    };

    buttonUpdate.removeEventListener("click", handleUpdateClick); 
    buttonUpdate.addEventListener("click", handleUpdateClick);

    titleElement.addEventListener("blur", handleUpdateClick);
    descElement.addEventListener("blur", handleUpdateClick);
  } catch (error) {
    console.error("Error:", error);
  }
}

async function updatePostServer(id, title, desc, img) {
  try {
    console.log("Updating post:", id);
    
    const response = await fetch(`http://localhost:3000/api/update-post`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id, title, desc, img }),  
    });

    if (!response.ok) {
      console.error("Network response was not ok");
      return;
    }
    
    const data = await response.json();
    const { message, error } = data;

    if (!error) {
      console.log("Post updated!");
    } else {
      console.log("Something went wrong:", error);
    }
  } catch (error) {
    console.error("Error in updatedPost function:", error);
  }
}

function createButtons(parent,id) {
  const buttonRemove = document.createElement("button");
  buttonRemove.className = "removeBtn";
  buttonRemove.id = `remove-${id}`;
  buttonRemove.innerText = "Remove";

  const buttonUpdate = document.createElement("button");
  buttonUpdate.className = "updateBtn";
  buttonUpdate.id = `update-${id}`;
  buttonUpdate.innerText = "update";

  buttonRemove.addEventListener("click", () => removePost(id));

  buttonUpdate.addEventListener("click", () => updatePost(id));

  parent.appendChild(buttonUpdate);
  parent.appendChild(buttonRemove);
}

async function removePost(postId) {
  try {
    console.log("Removing post:", postId);
    
    const response = await fetch(`http://localhost:3000/api/remove-post`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ postId }),  
    });

    if (!response.ok) {
      console.error("Network response was not ok");
      return;
    }
    
    const data = await response.json();
    const { message, error } = data;

    if (!error) {
      console.log("Post Removed!");
    } else {
      console.log("Something went wrong:", error);
    }
  } catch (error) {
    console.error("Error in removePost function:", error);
  }
}
const imageInput = document.getElementById("image") as HTMLElement;
console.log(imageInput);
