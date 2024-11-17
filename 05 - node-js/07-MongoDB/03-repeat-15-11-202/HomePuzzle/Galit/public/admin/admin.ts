async function handleAddAdmin(ev: any): Promise<void> {
    try {
        ev.preventDefault();
  
        const formData = new FormData(ev.target);
        const firstName = formData.get("firstName") as string;
        const lastName = formData.get("lastName") as string;
        const email = formData.get("email") as string;
        const phone = formData.get("phone") as string;
        const profession = formData.get("profession") as string;
        const role = formData.get("role") as string;
        const date = formData.get("date") as string;
        const yearOfBirth = new Date(date).getFullYear();
  
        const response = await fetch("/api/admins/add-admin", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                firstName,
                lastName,
                email,
                phone,
                profession,
                role,
                yearOfBirth,
            }),
        });
  
        if (response.ok) {
            const data = await response.json();
            console.log("Admin added:", data);
  
            ev.target.reset(); 
  
            await fetchAllAdmins();
        } else {
            throw new Error("Failed to add admin");
        }
    } catch (err) {
        console.error(err);
    }
  }
  
  async function fetchAllAdmins(): Promise<void> {
    try {
        const response = await fetch("/api/admins");
        if (!response.ok) {
            throw new Error("Failed to fetch admins");
        }
        const admins = await response.json();
  
        const container = document.getElementById("admin-list");
        if (container) {
            container.innerHTML = `
                <table>
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                             <th>Profession</th>
                              <th>Role</th>
                            <th>Year of Birth</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${admins
                            .map((admin: any) => `
                                <tr id="admin-${admin._id}">
                                    <td id="firstName-${admin._id}" onclick="handleEditAdminFirstName('${admin._id}')">${admin.firstName}</td>
                                    <td id="lastName-${admin._id}" onclick="handleEditAdminLastName('${admin._id}')">${admin.lastName}</td>
                                    <td id="email-${admin._id}" onclick="handleEditAdminEmail('${admin._id}')">${admin.email}</td>
                                    <td id="phone-${admin._id}" onclick="handleEditAdminPhone('${admin._id}')">${admin.phone}</td>
                                    <td id="profession-${admin._id}" onclick="handleEditAdminProfession('${admin._id}')">${admin.phone}</td>
                                    <td id="role-${admin._id}" onclick="handleEditAdminRole('${admin._id}')">${admin.phone}</td>
                                    <td id="yearOfBirth-${admin._id}" onclick="handleEditAdminYearOfBirth('${admin._id}')">${admin.yearOfBirth}</td>
                                    <td>
                                        <button class="delete-btn" onclick="handleDeleteAdmin('${admin._id}')">Delete</button>
                                        <button class="edit-btn" onclick="handleEditAdminField('${admin._id}')">Edit</button>

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
  
  function handleEditAdminField(id: string, fieldName: string) {
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
              await updateAdmin(id, { yearOfBirth: value });
          }, { once: true });
      } else {
          element.contentEditable = 'true';
          element.focus();
  
          element.addEventListener("blur", async () => {
              const value = element.innerText;
              element.contentEditable = 'false';
              await updateAdmin(id, { [fieldName]: value });
          }, { once: true });
      }
  }
  
  function handleEditAdminFirstName(id: string) {
      handleEditAdminField(id, 'firstName');
  }
  
  function handleEditAdminLastName(id: string) {
      handleEditAdminField(id, 'lastName');
  }
  
  function handleEditAdminEmail(id: string) {
      handleEditAdminField(id, 'email');
  }
  
  function handleEditAdminPhone(id: string) {
      handleEditAdminField(id, 'phone');
  }
  function handleEditAdminProfession(id: string) {
    handleEditAdminField(id, 'profession');
}
function handleEditAdminRole(id: string) {
    handleEditAdminField(id, 'role');
}
  
  function handleEditAdminYearOfBirth(id: string) {
      handleEditAdminField(id, 'yearOfBirth');
  }
  
  async function updateAdmin(id: string, updatedFields: Partial<any>) {
      try {
          const response = await fetch(`/api/admins/edit-admin`, {
              method: 'PUT',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ id, ...updatedFields }), 
          });
  
          if (!response.ok) {
              const errorMessage = await response.text();
              console.error('Failed to update admin. Server response:', errorMessage);
              throw new Error('Failed to update admin');
          }
  
          await fetchAllAdmins();
      } catch (error) {
          console.error('Error updating admin:', error);
      }
  }
  
  async function handleDeleteAdmin(id: string) {
      try {
          console.log(`Attempting to delete admin with id: ${id}`); 
  
          const response = await fetch(`/api/admins/delete-admin`, {
              method: 'DELETE',
              headers: {'Content-Type': 'application/json'},
              body: JSON.stringify({id}),
          });
  
          if (!response.ok) {
              const errorMessage = await response.text();
              console.error('Failed to delete admin. Server response:', errorMessage);
              throw new Error('Failed to delete admin');
          }
  
          document.getElementById(`admin-${id}`)?.remove(); 
          console.log(`Admin with id ${id} deleted from the DOM`);
      } catch (error) {
          console.error('Error deleting admin:', error);
      }
  }
  
  window.onload = () => {
      fetchAllAdmins(); 
  };