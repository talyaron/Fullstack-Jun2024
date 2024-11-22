function main(){
  try{
  const getUsersBtn= document.querySelector('#getUsers')
  if(!getUsersBtn)throw new Error('not find getUsers')
    getUsersBtn.addEventListener('click',getUsers)
  } catch (error) {
    console.error(error)
  }
}
async function handleAddClient(ev: any) {
  try {
    ev.preventDefault();
    const form = ev.target as HTMLFormElement;
    const formData = new FormData(form);
    const firstName = formData.get("firstName");
    const lastName = formData.get("lastName");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const date = formData.get("date") as string;
    const yearOfBirth = new Date(date).getFullYear();
    form.reset();
    const response = await fetch("/api/users/add-user", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        firstName,
        lastName,
        email,
        phone,
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
    console.log(data)
  } catch (error) {
    console.error("Error:", error);
  }
}
