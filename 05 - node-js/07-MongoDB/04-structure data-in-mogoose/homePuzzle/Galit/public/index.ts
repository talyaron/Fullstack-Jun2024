async function handleAddClient(ev: any): Promise<void> {
    try {
        ev.preventDefault();
  
        const formData = new FormData(ev.target);
        const firstName = formData.get("firstName") as string;
        const lastName = formData.get("lastName") as string;
        const email = formData.get("email") as string;
        const phone = formData.get("phone") as string;
        const date = formData.get("date") as string;
        const yearOfBirth = new Date(date).getFullYear();
  
  
        const response = await fetch("/api/clients/add-client", {
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
            console.log("Client added:", data);
  
            ev.target.reset(); 
  
            await fetchAllClients();
        } else {
            throw new Error("Failed to add client");
        }
    } catch (err) {
        console.error(err);
    }
}

  
  async function fetchAllClients(): Promise<void> {
    try {
        const response = await fetch("/api/clients");
        if (!response.ok) {
            throw new Error("Failed to fetch clients");
        }
        const clients = await response.json();
  
        const container = document.getElementById("client-list");
        if (container) {
            container.innerHTML = `
                <table>
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Year of Birth</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${clients
                            .map((client: any) => `
                                <tr id="client-${client._id}">
                                    <td id="firstName-${client._id}" onclick="handleEditFirstName('${client._id}')">${client.firstName}</td>
                                    <td id="lastName-${client._id}" onclick="handleEditLastName('${client._id}')">${client.lastName}</td>
                                    <td id="email-${client._id}" onclick="handleEditEmail('${client._id}')">${client.email}</td>
                                    <td id="phone-${client._id}" onclick="handleEditPhone('${client._id}')">${client.phone}</td>
                                    <td id="yearOfBirth-${client._id}" onclick="handleEditYearOfBirth('${client._id}')">${client.yearOfBirth}</td>
                                    <td>
                                        <button class="delete-btn" onclick="handleDeleteClient('${client._id}')">Delete</button>
                                        <button class="edit-btn" onclick="handleEditField('${client._id}')">Edit</button>

                                        </td>
                                </tr>
                            `)
                            .join("")}
                    </tbody>
                </table>
            `;
        }
    } catch (error) {
        console.error(error);
    }
  }
  
  function handleEditField(id: string, fieldName: string) {
      const element = document.getElementById(`${fieldName}-${id}`);
      if (!element) return;
  
      if (fieldName === 'yearOfBirth') {
          const currentYear = element.innerText; 
          const input = document.createElement('input');
          input.type = 'number';
          input.value = currentYear || ''; 
          element.innerHTML = '';
          element.appendChild(input);
          input.focus();
  
          input.addEventListener('blur', async () => {
              const value = parseInt(input.value, 10); 
              element.innerHTML = value.toString(); 
              await updateClient(id, { yearOfBirth: value });
          }, { once: true });
      } else {
          element.contentEditable = 'true';
          element.focus();
  
          element.addEventListener("blur", async () => {
              const value = element.innerText;
              element.contentEditable = 'false';
              await updateClient(id, { [fieldName]: value });
          }, { once: true });
      }
  }
  
  function handleEditFirstName(id: string) {
      handleEditField(id, 'firstName');
  }
  
  function handleEditLastName(id: string) {
      handleEditField(id, 'lastName');
  }
  
  function handleEditEmail(id: string) {
      handleEditField(id, 'email');
  }
  
  function handleEditPhone(id: string) {
      handleEditField(id, 'phone');
  }
  
  function handleEditYearOfBirth(id: string) {
      handleEditField(id, 'yearOfBirth');
  }
  
  async function updateClient(id: string, updatedFields: Partial<any>) {
      try {
          const response = await fetch(`/api/clients/edit-client`, {
              method: 'PUT',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ id, ...updatedFields }), 
          });
  
          if (!response.ok) {
              const errorMessage = await response.text();
              console.error('Failed to update client. Server response:', errorMessage);
              throw new Error('Failed to update client');
          }
  
          await fetchAllClients();
      } catch (error) {
          console.error('Error updating client:', error);
      }
  }
  
  async function handleDeleteClient(id: string) {
      try {
          console.log(`Attempting to delete client with id: ${id}`); 
  
          const response = await fetch(`/api/clients/delete-client`, {
              method: 'DELETE',
              headers: {'Content-Type': 'application/json'},
              body: JSON.stringify({id}),
          });
  
          if (!response.ok) {
              const errorMessage = await response.text();
              console.error('Failed to delete client. Server response:', errorMessage);
              throw new Error('Failed to delete client');
          }
  
          document.getElementById(`client-${id}`)?.remove(); 
          console.log(`Client with id ${id} deleted from the DOM`);
      } catch (error) {
          console.error('Error deleting client:', error);
      }
  }
  
  window.onload = () => {
      fetchAllClients(); 
  };