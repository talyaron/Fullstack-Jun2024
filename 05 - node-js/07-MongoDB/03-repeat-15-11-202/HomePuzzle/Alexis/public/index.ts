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

    const response = await fetch("/api/clients/add-client", {
      method: "POST",
      headers: { "Contenet-Type": "application/json" },
      body: JSON.stringify({
        firstName,
        lastName,
        email,
        phone,
        yearOfBirth,
      }),
    });

    const data = document.querySelector(".result") as HTMLDivElement;
    const user = await fetch("/api/clients/get-user-details", {
        method: "GET",
        headers: { "Content-Type": "application/json" }};
      

    if (user.ok){
        const userInfo = await user.json();
        console.log(userInfo);
        data.innerHTML=`${userInfo}`;
    }

    if (response.ok) {
      const data = await response.json();
      console.log(data);
    }

   
  } catch (error) {
    console.error("error");
  }
}
