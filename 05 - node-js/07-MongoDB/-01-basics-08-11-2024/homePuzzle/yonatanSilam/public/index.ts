// import express from "express";
// import {User} from "../src/models/userModel";
// import {Post} from "../src/models/postModel";

//model
interface Post {
  imageUrl: string;
  text: string;
  title: string;
  id: string;
}
const allPosts: Post[] = [];
class User {
  username: string;
  password: string;
  email: string;
  phone: string;
  id: string;

  constructor(
    username: string,
    phone: string,
    email: string,
    password: string
  ) {
    this.username = username;
    this.password = password;
    this.email = email;
    this.phone = phone;
    this.id = `id-${crypto.randomUUID()}`;
  }
}
const newUser = new User(
  "john_doe",
  "654654236",
  "john.doe@example.com",
  "securePassword123"
);
const userConnect: User = newUser;
const allUsers: User[] = [];

//first page- form upload post and see posts btn
function renderForm() {
  try {
    const app = document.querySelector("#app");
    if (!app) throw new Error("not find app");
    app.classList.remove("post-grid");
    app.innerHTML = ` 
    <section class="container">
        <form onsubmit="handleSubmit(event)">
        <input type="text" name="imageUrl" placeholder="add imageUrl">
        <input type="text" name="text" placeholder="add text">
        <input type="text" name="title" placeholder="add title">
        <button class="btn btn-primary" type="submit">Send</button>
    </form>
    <button class="btn btn-primary" onclick="renderAllPost()"> see all post</button>
        <button class="btn btn-primary" onclick="renderFirstPage()"> log out</button>
    </section>`;
  } catch (error) {
    console.error(error);
  }
}
//add post
async function handleSubmit(ev) {
  ev.preventDefault();
  const form = ev.target as HTMLFormElement;
  const formData = new FormData(form);
  const imageUrl = String(formData.get("imageUrl"));
  const text = String(formData.get("text"));
  const title = String(formData.get("title"));
  form.reset();

  try {
    const response = await fetch("http://localhost:3000/api/posts/send-post", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ imageUrl, text, title }), //data to send (to string format) )
    });
    if (!response.ok) throw new Error("Failed to add post");

    const data = await response.json();
    console.log("Post added:", data.message);
  } catch (error) {
    console.error(error);
  }
}

//second page btn to upload post

async function renderAllPost() {
  try {
    const response = await fetch("/api/posts/get-posts");
    if (!response.ok) throw new Error("Failed to fetch posts");

    const data = await response.json();
    displayPosts(data.posts);
  } catch (error) {
    console.error("Error:", error);
  }
}

function displayPosts(posts: Post[]) {
  const postsContainer = document.getElementById("app") as HTMLDivElement;
  postsContainer.innerHTML =
    '    <button class="btn btn-primary" onclick="renderForm()"> back</button>'; // Clear previous posts
  postsContainer.classList.add("post-grid"); // Add grid layout for posts

  const htmlPosts = posts
    .map((post) => {
      return renderPost(post);
    })
    .filter((post) => post !== null)
    .join("");

  postsContainer.innerHTML = `    <button class="btn btn-primary" onclick="renderForm()"> back</button> ${htmlPosts}`;
}
function renderPost(post: Post) {
  try {
    const html = `
        <div class="post-card card">
            <h3 class="card-title" id="title-${post.id}">${post.title}</h3><button class="btn btn-primary" onclick="handleEditTitle('${post.id}')" >Edit</button><button onclick="handleDelete('${post.id}')" class="btn btn-primary">Delete</button>
            <img id="image-${post.id}" class="card-img-top" onclick="handleImage('${post.id}')" src="${post.imageUrl}" alt="Image" />
            <div class="hidden" id="imageUrl-${post.id}">edit imageURl</div>
            <p class="card-text" id="text-${post.id}" onclick="handleEditText('${post.id}')"> ${post.text} </p>
        </div>
        `;
    return html;
  } catch (error) {
    console.error("Error:", error);
  }
}
function handleImage(id: string) {
  try {
    console.log("Edit image:", id);
    const imageUrl = document.getElementById(`imageUrl-${id}`);
    if (!imageUrl) throw new Error("image element not found");
    imageUrl?.classList.add("show");
    imageUrl.contentEditable = "true";
    imageUrl.focus();
    imageUrl.addEventListener("blur", (event) => {
      const imageU = imageUrl.innerText;
      console.log("New image:", imageU);
      updateImageOnServer(imageU, id);
      imageUrl.contentEditable = "false";
      renderAllPost();
      //how to update the title in the server
    });
  } catch (error) {
    console.error("Error:", error);
  }
}
async function updateImageOnServer(imageUrl: string, id: string) {
  try {
    const response = await fetch(
      "http://localhost:3000/api/posts/updateImage-post",
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ imageUrl, id }), //data to send (to string format) )
      }
    );
    if (!response.ok) throw new Error("Failed to update post");

    const data = await response.json();
    console.log("Post update:", data.message);
  } catch (error) {
    console.error(error);
  }
}
function handleEditText(id: string) {
  try {
    console.log("Edit text:", id);
    const textElement = document.getElementById(`text-${id}`);
    if (!textElement) throw new Error("text element not found");
    textElement.contentEditable = "true";
    textElement.focus();
    textElement.addEventListener("blur", (event) => {
      const text = textElement.innerText;
      console.log("New text:", text);
      updateTextOnServer(text, id);
      textElement.contentEditable = "false";
      //how to update the title in the server
    });
  } catch (error) {
    console.error("Error:", error);
  }
}
async function updateTextOnServer(text: string, id: string) {
  try {
    const response = await fetch(
      "http://localhost:3000/api/posts/updateText-post",
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text, id }), //data to send (to string format) )
      }
    );
    if (!response.ok) throw new Error("Failed to update post");

    const data = await response.json();
    console.log("Post update:", data.message);
  } catch (error) {
    console.error(error);
  }
}
function handleEditTitle(id: string) {
  try {
    console.log("Edit title:", id);
    const titleElement = document.getElementById(`title-${id}`);
    if (!titleElement) throw new Error("Title element not found");
    titleElement.contentEditable = "true";
    titleElement.focus();
    titleElement.addEventListener("blur", (event) => {
      const title = titleElement.innerText;
      console.log("New title:", title);
      updateOnServer(title, id);
      titleElement.contentEditable = "false";
      //how to update the title in the server
    });
  } catch (error) {
    console.error("Error:", error);
  }
}

async function updateOnServer(title: string, id: string) {
  try {
    const response = await fetch(
      "http://localhost:3000/api/posts/updateTitle-post",
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, id }), //data to send (to string format) )
      }
    );
    if (!response.ok) throw new Error("Failed to update post");

    const data = await response.json();
    console.log("Post update:", data.message);
  } catch (error) {
    console.error(error);
  }
}

function handleDelete(id: string) {
  try {
    console.log("delete title:", id);
    DeleteOnServer(id);
    renderAllPost();
    //how to update the title in the server
  } catch (error) {
    console.error("Error:", error);
  }
}
async function DeleteOnServer(id: string) {
  try {
    const response = await fetch(
      "http://localhost:3000/api/posts/delete-post",
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }), //data to send (to string format) )
      }
    );
    if (!response.ok) throw new Error("Failed to delete post");

    const data = await response.json();
    console.log("Post update:", data.message);
  } catch (error) {
    console.error(error);
  }
}

function renderFirstPage() {
  try {
    const app = document.querySelector("#app");
    if (!app) throw new Error("not find app");

    app.innerHTML = ` 
<section class="body-back">
    <section class="container">
        <div class="container_top-part">
        <div>WELCOME TO instagram</div>
        </div>

        <div class="container_bottom-part">
        <button onclick="logInPage()" class="btn" id="loginBtn">log in</button>
        <button onclick="registerPage()" class="btn" id="registerBtn">register</button>
    </div>
    </section>
</section>`;
  } catch (error) {
    console.error(error);
  }
}
function registerPage() {
  try {
    const app = document.querySelector("#app");
    if (!app) throw new Error("not find app");

    app.innerHTML = `
      <section class="body-back">
        <section class="container">
          <h1> Register:</h1>
          <button onclick="renderFirstPage()" class="back" id="backBtn"><--</button>
          <form onSubmit="handelRegisterAfterLog(event)" id="registerBtn" class="form-container">
              <label for="username">Username:</label>
              <input id="username" type="text" name="username" required>
  
              <label for="phone">phone:</label>
              <input id="phone" type="text" name="phone" required>
  
              <label for="email">email:</label>
              <input id="email" type="text" name="email" required>
  
              <label for="password">Password:</label>
              <input id="password" type="password" name="password" required>
  
              <button type="submit">Register</button>
          </form>
        </section>
      </section>
      `;
  } catch (error) {
    console.error(error);
  }
}

function handelRegisterAfterLog(event: SubmitEvent) {
  //register the user
  try {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);
    const username = String(formData.get("username"));
    const phone = String(formData.get("phone"));
    const email = String(formData.get("email"));
    const password = String(formData.get("password"));
    console.log("reg");
    register(username, phone, email, password);

    //check user and get in
    form.reset();
  } catch (e) {
    console.error(e);
  }
}
function register(
  username: string,
  phone: string,
  email: string,
  password: string
) {
  //check the info
  //register
  try {
    if (checkUsername(username)) {
      const user = new User(username, phone, email, password);
      allUsers.push(user);
      console.log(allUsers);
      const localStorageA = localStorage.getItem("allUsers");
      const allUsersS: User[] = localStorageA ? JSON.parse(localStorageA) : [];
      allUsersS.push(user);
      localStorage.setItem("allUsers", JSON.stringify(allUsersS));
      logInPage();

      const loginBtn = document.querySelector<HTMLFormElement>("#loginBtn");
      if (!loginBtn) throw new Error("not find loginBtn");
      loginBtn.addEventListener("submit", handelLoginAfterLog);
    } else {
      throw new Error("the user already exist");
    }
  } catch (error) {
    console.error(error);
  }
}
function checkUsername(username: string): boolean {
  //check if the user name is already exist
  const localStorageA = localStorage.getItem("allUsers");
  const allUsersS: User[] = localStorageA ? JSON.parse(localStorageA) : [];
  if (allUsersS.find((user) => user.username == username)) return false;
  return true;
}
function logInPage() {
  try {
    const app = document.querySelector("#app");
    if (!app) throw new Error("not find app");

    app.innerHTML = `<section class="body-back">
        <section class="container">
          <h1> Log In:</h1>
          <button class="back" id="backBtn" onclick="renderFirstPage()"> <--- </button>
          <form onSubmit="handelLoginAfterLog(event)" id="loginBtn" class="form-container">
              <label for="username">Username:</label>
              <input id="username" type="text" id="username" name="username" required>
  
              <label for="password">Password:</label>
              <input id="password" type="password" id="password" name="password" required>
  
              <button type="submit" >Log In</button>
          </form>
        </section>
      </section> `;
  } catch (error) {
    console.error(error);
  }
}

function handelLoginAfterLog(event: SubmitEvent) {
  //log the user
  try {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);
    const username = String(formData.get("username"));
    const password = String(formData.get("password"));
    console.log(username);
    console.log(password);
    checkUser(username, password);

    //check user and get in
    form.reset();
  } catch (e) {
    console.error(e);
  }
}

function checkUser(username: string, password: string) {
  try {
    const localStorageA = localStorage.getItem("allUsers");
    const allUsersS: User[] = localStorageA ? JSON.parse(localStorageA) : [];
    const userN = allUsersS.find((user) => user.username == username);
    if (!userN) throw new Error("u need to sign in");
    if (userN?.password == password) {
      userConnect.username = userN.username;
      userConnect.password = userN.password;
      userConnect.phone = userN.phone;
      userConnect.email = userN.email;
      userConnect.id = userN.id;
      console.log(userConnect);
      renderForm();
    } else throw new Error("the password not right");
  } catch (error) {
    console.log(error);
  }
}
