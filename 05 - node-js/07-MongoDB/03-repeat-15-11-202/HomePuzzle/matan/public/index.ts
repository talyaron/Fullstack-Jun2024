async function handleAddUser(event: Event) {
    event.preventDefault();
  
    const formData = new FormData(event.target as HTMLFormElement);
    const firstName = formData.get("firstName") as string;
    const lastName = formData.get("lastName") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const date = formData.get("date") as string;
    const password = formData.get("password") as string;
    const yearOfBirth = new Date(date).getFullYear();
  
    try {
      const response = await fetch("http://localhost:3002/api/users/add-user", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          phone,
          yearOfBirth,
          password,
        }),
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        console.error("Failed to add user:", errorData.error);
        return;
      }
  
      const infoResponse = await fetch(
        `http://localhost:3002/api/users/get-user?firstName=${firstName}&lastName=${lastName}&email=${email}&phone=${phone}&yearOfBirth=${yearOfBirth}`,
        {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        }
      );
  
      if (!infoResponse.ok) {
        console.error("Failed to fetch user details:", infoResponse.statusText);
        return;
      }
  
      const infoUser = await infoResponse.json();
      appendUser(infoUser.user);
    } catch (error) {
      console.error("An error occurred:", error);
    }
  }
  
  function appendUser(user: any) {
    const userInfoDiv = document.querySelector("#userInfo") as HTMLElement;
    userInfoDiv.innerHTML += `
      <div class="user-card" id="${user.email}">
          <strong>Full Name:</strong> ${user.firstName} ${user.lastName}<br>
          <strong>Email:</strong> ${user.email}<br>
          <strong>Phone:</strong> ${user.phone}<br>
          <strong>Year of Birth:</strong> ${user.yearOfBirth}<br>
          <button class="edit-btn" data-email="${user.email}">Edit</button>
      </div>
      <hr>
    `;
  }
  
  async function handleEditUser(event: Event) {
    const target = event.target as HTMLElement;
    if (target.classList.contains("edit-btn")) {
      const email = target.getAttribute("data-email")!;
      const newFirstName = prompt("Enter new first name:") || undefined;
      const newPhone = prompt("Enter new phone number:") || undefined;
  
      if (!newFirstName && !newPhone) {
        alert("No changes made.");
        return;
      }
  
      const updates = {
        ...(newFirstName && { firstName: newFirstName }),
        ...(newPhone && { phone: newPhone }),
      };
  
      try {
        const response = await fetch("http://localhost:3002/api/users/update-user", {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, updates }),
        });
  
        if (!response.ok) {
          const errorData = await response.json();
          console.error("Failed to update user:", errorData.error);
          return;
        }
  
        const updatedUser = await response.json();
        updateUserCard(email, updatedUser.user);
      } catch (error) {
        console.error("An error occurred:", error);
      }
    }
  }
  
  function updateUserCard(email: string, user: any) {
    const userCard = document.getElementById(email) as HTMLElement;
    userCard.innerHTML = `
      <strong>Full Name:</strong> ${user.firstName} ${user.lastName}<br>
      <strong>Email:</strong> ${user.email}<br>
      <strong>Phone:</strong> ${user.phone}<br>
      <strong>Year of Birth:</strong> ${user.yearOfBirth}<br>
      <button class="edit-btn" data-email="${user.email}">Edit</button>
    `;
  }
  
  const userForm = document.querySelector("#userForm") as HTMLFormElement;
  userForm.addEventListener("submit", handleAddUser);
  
  const userInfoDiv = document.querySelector("#userInfo") as HTMLElement;
  userInfoDiv.addEventListener("click", handleEditUser);
  