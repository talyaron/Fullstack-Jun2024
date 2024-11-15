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
        password
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

   
  } catch (error) {
    console.error("error");
  }
}
