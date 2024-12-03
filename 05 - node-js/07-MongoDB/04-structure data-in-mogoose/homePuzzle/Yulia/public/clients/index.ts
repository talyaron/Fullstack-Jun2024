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

        renderClientDetails(clientData);

        form.reset();
      }
      
    } catch (error) {
        console.error(error);   
    }
}

function renderClientDetails(client: Client) {
  const clientsContainer = document.getElementById("clients") as HTMLDivElement;

  // Create ClientCard container
  const clientCard = document.createElement("div");
  clientCard.className = "clients__client-card";

  // Create ClientDetails
  const clientDetails = document.createElement("div");
  clientDetails.className = "client-card__details";
  clientDetails.innerHTML = `
      <p><span class="client-card__label">First Name:</span> <span class="client-card__value">${client.firstName}</span></p>
      <p><span class="client-card__label">Last Name:</span> <span class="client-card__value">${client.lastName}</span></p>
      <p><span class="client-card__label">Email:</span> <span class="client-card__value">${client.email}</span></p>
      <p><span class="client-card__label">Phone:</span> <span class="client-card__value">${client.phone}</span></p>
      <p><span class="client-card__label">Year of Birth:</span> <span class="client-card__value">${client.yearOfBirth}</span></p>
  `;

  // Create Buttons
  const buttonsContainer = document.createElement("div");
  buttonsContainer.className = "client-card__buttons";

  const updateButton = document.createElement("button");
  updateButton.className = "client-card__button client-card__button--update";
  updateButton.textContent = "Update";
  updateButton.addEventListener("click", () =>
    handleUpdateClient(client, clientCard)
  );

  const deleteButton = document.createElement("button");
  deleteButton.className = "client-card__button client-card__button--delete";
  deleteButton.textContent = "Delete";
  deleteButton.addEventListener("click", () =>
    handleDeleteClient(client._id, clientCard)
  );

  buttonsContainer.append(updateButton, deleteButton);

  // Append everything to the card
  clientCard.append(clientDetails, buttonsContainer);

  // Add card to clients container
  clientsContainer.appendChild(clientCard);
}

async function handleDeleteClient(
  clientId: string,
  clientCard: HTMLDivElement
) {
  try {
    const response = await fetch(`/api/clients/delete-client`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ _id: clientId }),
    });

    if (response.ok) {
      console.log(`Client with ID ${clientId} deleted successfully.`);
      clientCard.remove(); // delete the card from the DOM
    } else {
      console.error(
        `Failed to delete client with ID ${clientId}:`,
        await response.text()
      );
    }
  } catch (error) {
    console.error("Error deleting client:", error);
  }
}

async function loadAllClients() {
  try {
    const response = await fetch("/api/clients/get-all-clients", {
      method: "GET",
    });

    if (response.ok) {
      const clients: Client[] = await response.json();
      clients.forEach((client) => renderClientDetails(client)); // render each client from the database to the DOM 
    } else {
      console.error("Failed to fetch all clients:", await response.text());
    }
  } catch (error) {
    console.error("Error loading all clients:", error);
  }
}

async function handleUpdateClient(client: Client, clientCard: HTMLDivElement) {
  const clientDetails = clientCard.querySelector(
    ".client-card__details"
  ) as HTMLDivElement;

  // change the client details to input fields
  clientDetails.innerHTML = `
    <label class="client-card__label">First Name: 
      <input type="text" name="firstName" value="${client.firstName}" class="client-card__input" />
    </label>
    <label class="client-card__label">Last Name: 
      <input type="text" name="lastName" value="${client.lastName}" class="client-card__input" />
    </label>
    <label class="client-card__label">Email: 
      <input type="email" name="email" value="${client.email}" class="client-card__input" />
    </label>
    <label class="client-card__label">Phone: 
      <input type="tel" name="phone" value="${client.phone}" class="client-card__input" />
    </label>
    <p class="client-card__label">Year of Birth: 
      <span class="client-card__value">${client.yearOfBirth}</span>
    </p>
  `;

  // Create Save button
  const saveButton = document.createElement("button");
  saveButton.className = "client-card__button client-card__button--save";
  saveButton.textContent = "Save";

  // add event listener to the save button
  saveButton.addEventListener("click", async () => {
    // take the updated client details from the input fields
    const updatedClient = {
      ...client,
      firstName:
        (
          clientDetails.querySelector(
            "input[name='firstName']"
          ) as HTMLInputElement
        )?.value || client.firstName,
      lastName:
        (
          clientDetails.querySelector(
            "input[name='lastName']"
          ) as HTMLInputElement
        )?.value || client.lastName,
      email:
        (clientDetails.querySelector("input[name='email']") as HTMLInputElement)
          ?.value || client.email,
      phone:
        (clientDetails.querySelector("input[name='phone']") as HTMLInputElement)
          ?.value || client.phone,
    };

    // send the updated client details to the server
    const response = await fetch(`/api/clients/update-client/${client._id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedClient),
    });

    if (response.ok) {
      console.log(`Client with ID ${client._id} updated successfully.`);

      // update the client details in the DOM
      clientDetails.innerHTML = `
        <p class="client-card__label">First Name: 
          <span class="client-card__value">${updatedClient.firstName}</span>
        </p>
        <p class="client-card__label">Last Name: 
          <span class="client-card__value">${updatedClient.lastName}</span>
        </p>
        <p class="client-card__label">Email: 
          <span class="client-card__value">${updatedClient.email}</span>
        </p>
        <p class="client-card__label">Phone: 
          <span class="client-card__value">${updatedClient.phone}</span>
        </p>
        <p class="client-card__label">Year of Birth: 
          <span class="client-card__value">${client.yearOfBirth}</span>
        </p>
      `;

      // remove the save button
      saveButton.remove();
    } else {
      console.error("Failed to update client:", await response.text());
    }
  });

  // add the save button to the client card
  const buttonsContainer = clientCard.querySelector(
    ".client-card__buttons"
  ) as HTMLDivElement;
  buttonsContainer.appendChild(saveButton);
}

document.addEventListener("DOMContentLoaded", () => {
  const header = document.createElement("div");
  header.className = "navigation";

  const buttons = [
    { text: "Go to Appointments", link: "/appointments" },
    { text: "Go to Services", link: "/services" },
    { text: "Go to Service Providers", link: "/service-providers" },
  ];

  buttons.forEach((buttonData) => {
    const button = document.createElement("button");
    button.className = "navigation__button";
    button.textContent = buttonData.text;

    button.addEventListener("click", () => {
      window.location.href = buttonData.link; // Redirect to the respective page
    });

    header.appendChild(button);
  });

  // Add the navigation header to the page
  const root = document.body;
  root.insertBefore(header, root.firstChild); // Insert navigation at the top
});

document.addEventListener("DOMContentLoaded", () => {
  loadAllClients(); // load all clients when the page loads
});
