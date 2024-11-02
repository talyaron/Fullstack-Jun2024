

const loggedIn= false;




async function checkForm(event) {
  try {
    event.preventDefault();

    const formData = new FormData(event.target); // Create a FormData object
    
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
setInterval(getPosts,300)

let postLength = 0;

async function redirectToLogin() {
    if(postLength>0) return;
    document.body.innerHTML=` <div class="redirect-container">
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
    }, 2000); 
     postLength = 1;
}

async function getPosts() {
  try {
    if (!loggedIn){ 
        redirectToLogin();
        return;
    }
    const response = await fetch("http://localhost:3000/api/get-posts", {});
    const data = await response.json();
   const { posts } = data;
   if(postLength!==posts.length){
    renderPosts(posts);
    postLength=posts.length;
  }
   // console.log(posts);
  } catch (error) {
    console.error(error);
  }
}

function renderPosts(posts) {
  try {
    const postsElement = document.getElementById("feed") as HTMLElement;
    postsElement.innerHTML="";
    if (!postsElement) throw new Error("Element with ID 'feed' not found.");
    posts.forEach(post => {
      const postElement= document.createElement("div") as HTMLElement;
      if(post.img){
    
      postElement.innerHTML=`<div id="${post.id}" class="post">
      <div id="text"> <h1> ${post.title} </h1>  <p> ${post.description} </p>  </div>  <img id ="img" src="http://localhost:3000/uploads/${post.img}">  </div>   `;
    }
      else{
         postElement.innerHTML=`<div id="${post.id}" class="post">
     <div id="bigText"> <h1> ${post.title} </h1>  <p> ${post.description} </p> </div> `;
      }
      postsElement.appendChild( postElement);
    });
    
  } catch (error) {
    console.error("Error fetching posts:", error);
  }
}
const imageInput = document.getElementById("image") as HTMLElement;
console.log(imageInput);
