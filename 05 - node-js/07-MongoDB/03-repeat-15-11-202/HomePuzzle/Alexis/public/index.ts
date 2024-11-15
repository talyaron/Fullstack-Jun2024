export async function handleAddClient(ev: any) {
  try {
    ev.preventDefault();
    const formData = new FormData(ev.target);
    const firstName = formData.get("firstName");
    const lastName = formData.get("lastName");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const date = formData.get("date") as string;
    const yearOfBirth = new Date(date).getFullYear();
    const password = formData.get("password");

    const response = await fetch("/api/users/add-client", {
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

    if (response.ok) {
      const data = await response.json();
      console.log(data);
      console.log({
        firstName,
        lastName,
        email,
        phone,
        yearOfBirth,
        password,
      });
    }
    const info = await fetch(
      `/api/users/get-user-details?firstName=${firstName}&lastName=${lastName}&email=${email}&phone=${phone}&yearOfBirth=${yearOfBirth}`,
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      }
    );
    if (info.ok) {
      const infoUser = await info.json();
      const userInfo = document.querySelector("#result") as HTMLElement;
      userInfo.innerHTML = `
          <strong>Full Name:</strong> ${infoUser.firstName} ${infoUser.lastName}<br>
          <strong>Email:</strong> ${infoUser.email}<br>
          <strong>Phone:</strong> ${infoUser.phone}<br>
          <strong>Year of Birth:</strong> ${infoUser.yearOfBirth}
        `;
      console.log("User details fetched successfully.");
    } else {
      console.error("Failed to fetch user details:", info.statusText);
    }
  } catch (error) {
    console.error("error");
  }
}

const form = document.getElementById("forma") as HTMLFormElement;
form.addEventListener("submit", handleAddClient);
