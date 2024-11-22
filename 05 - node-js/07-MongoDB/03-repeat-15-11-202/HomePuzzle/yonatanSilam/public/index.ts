interface User {
  name: String;
  email: String;
  phone: String;
  imageUrl: String;
  yearOfBirth: Number;
  password: String;
  _id: string;
}

function main() {
  try {
    const getUsersBtn = document.querySelector("#getUsers");
    if (!getUsersBtn) throw new Error("not find getUsers");
    getUsersBtn.addEventListener("click", getUsers);
  } catch (error) {
    console.error(error);
  }
}
async function handleAddClient(ev: any) {
  try {
    ev.preventDefault();
    const form = ev.target as HTMLFormElement;
    const formData = new FormData(form);
    const name = formData.get("name");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const imageUrl = formData.get("imageUrl");
    const date = formData.get("date") as string;
    const yearOfBirth = new Date(date).getFullYear();
    form.reset();
    const response = await fetch("/api/users/add-user", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        email,
        phone,
        imageUrl,
        yearOfBirth,
      }),
    });

    if (response.ok) {
      const data = await response.json();
      console.log(data);
    }
  } catch (err) {
    console.error(err);
  }
}
async function getUsers() {
  try {
    const response = await fetch("/api/users/get-users");
    if (!response.ok) throw new Error("Failed to fetch USERS");

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error:", error);
  }
}

async function getUserById(id: string) {
  try {
    const response = await fetch(`/api/users/get-user?userId=${id}`);
    if (!response.ok) throw new Error("Failed to fetch USER");

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error:", error);
  }
}

async function getUserByEmail(ev: any) {
  try {
    ev.preventDefault();
    const form = ev.target as HTMLFormElement;
    const formData = new FormData(form);
    const email = formData.get("email");
    form.reset();
    const response = await fetch(`/api/users/get-user-by-email?email=${email}`);
    if (response.ok) {
      const data = await response.json();
      renderUser(data.user);
    }
  } catch (err) {
    console.error(err);
  }
}

function renderUser(user: User) {
  try {
    const userCard = document.querySelector("#userCard");
    if (!userCard) throw new Error("not find userCard");
    userCard.innerHTML = `
<div class="user-card">
  <div class="user-avatar">
    <img src="${user.imageUrl}" alt="User Avatar" />
  </div>
  <div class="user-info">
    <h1 class="user-name" id="name-${user._id}" onclick="handleEditName('${user._id}')">${user.name} </h1>
    <h2 class="user-phone">P-Number: ${user.phone}</h2>
    <p class="user-birth">Born in: ${user.yearOfBirth}</p>
  </div>
   <button id="${user._id}" class="delete-btn" onclick="deleteUser('${user._id}')">Delete</button>
</div>
    `;
  } catch (error) {
    console.error(error);
  }
}
function handleEditName(id: string) {
  try {
    console.log("Edit name:", id);
    const nameElement = document.getElementById(`name-${id}`);
    if (!nameElement) throw new Error("name element not found");
    nameElement.contentEditable = "true";
    nameElement.focus();
    nameElement.addEventListener("blur", (event) => {
      const title = nameElement.innerText;
      console.log("New title:", title);
      updateNameOnServer(title, id);
      nameElement.contentEditable = "false";
      //how to update the title in the server
    });
  } catch (error) {
    console.error("Error:", error);
  }
}

async function updateNameOnServer(title: string, id: string) {
  try {
    const response = await fetch("http://localhost:3000/api/users/updateName", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, id }), //data to send (to string format) )
    });
    if (!response.ok) throw new Error("Failed to update name");

    const data = await response.json();
    console.log("name update:", data.message);
  } catch (error) {
    console.error(error);
  }
}

function deleteUser( id: string) {
  if (confirm("Are you sure you want to delete this user?")) {
    deleteUserOnServer(id);
  }
}
async function deleteUserOnServer(id: string) {
  try {
    const response = await fetch(
      "http://localhost:3000/api/users/delete-user",
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }), //data to send (to string format) )
      }
    );
    if (!response.ok) throw new Error("Failed to delete user");

    const data = await response.json();
    console.log("user delete:", data.message);
  } catch (error) {
    console.error(error);
  }
}

