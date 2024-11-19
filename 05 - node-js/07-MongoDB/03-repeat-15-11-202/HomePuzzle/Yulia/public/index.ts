interface Client {
    _id: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    yearOfBirth: number;
}

async function handleAddClient(event: any) {
    try {
      event.preventDefault();
      const form = event.target as HTMLFormElement;
      const formData = new FormData(form);
      const firstName = formData.get("firstName") as string;
      const lastName = formData.get("lastName") as string;
      const email = formData.get("email") as string;
      const phone = formData.get("phone") as string;
      const date = formData.get("dateOfBirth") as string;
      const yearOfBirth = new Date(date).getFullYear();

      const response = await fetch("/api/clients/add-client", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          phone,
          yearOfBirth,
        }),
      });

      if (response.ok) {
        const clientData: Client = await response.json();

        console.log(clientData);

        renderClientDetails(clientData);

        form.reset();
      }
      
    } catch (error) {
        console.error(error);   
    }
}

function renderClientDetails(client: Client) {
    const clientDetails = document.getElementById("clientDetails") as HTMLDivElement;

    const clientCard = document.createElement("div");
    clientCard.className = "client-details__card";

    clientCard.innerHTML = `
      <p><strong>First Name:</strong> ${client.firstName}</p>
      <p><strong>Last Name:</strong> ${client.lastName}</p>
      <p><strong>Email:</strong> ${client.email}</p>
      <p><strong>Phone:</strong> ${client.phone}</p>
      <p><strong>Year of Birth:</strong> ${client.yearOfBirth}</p>
    `;

    clientDetails.appendChild(clientCard);
}
