async function handleAddAdmin(ev: any): Promise<void> {
    try {
        ev.preventDefault();
  
        const formData = new FormData(ev.target);
        const AdminFirstName = formData.get("AdminFirstName") as string;
        const AdminLastName = formData.get("AdminLastName") as string;
        const AdminEmail = formData.get("AdminEmail") as string;
        const AdminPhone = formData.get("AdminPhone") as string;
        const AdminRole = formData.get("AdminRole") as string;
        const AdminProfession = formData.get("AdminProfession") as string;
        const date = formData.get("AdminDate") as string;
        const AdminYearOfBirth = new Date(date).getFullYear();
  
        const response = await fetch("/api/admins/add-admin", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                AdminFirstName,
                AdminLastName,
                AdminEmail,
                AdminPhone,
                AdminProfession,
                AdminRole,
                AdminYearOfBirth,
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
                                    <td id="AdminFirstName-${admin._id}" onclick="handleEditAdminFirstName('${admin._id}')">${admin.AdminFirstName}</td>
                                    <td id="AdminLastName-${admin._id}" onclick="handleEditAdminLastName('${admin._id}')">${admin.AdminLastName}</td>
                                    <td id="AdminEmail-${admin._id}" onclick="handleEditAdminEmail('${admin._id}')">${admin.AdminEmail}</td>
                                    <td id="AdminPhone-${admin._id}" onclick="handleEditAdminPhone('${admin._id}')">${admin.AdminPhone}</td>
                                    <td id="AdminProfession-${admin._id}" onclick="handleEditAdminProfession('${admin._id}')">${admin.AdminProfession}</td>
                                    <td id="AdminRole-${admin._id}" onclick="handleEditAdminRole('${admin._id}')">${admin.AdminRole}</td>
                                    <td id="AdminYearOfBirth-${admin._id}" onclick="handleEditAdminYearOfBirth('${admin._id}')">${admin.AdminYearOfBirth}</td>
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
      handleEditAdminField(id, 'AdminFirstName');
  }
  
  function handleEditAdminLastName(id: string) {
      handleEditAdminField(id, 'AdminLastName');
  }
  
  function handleEditAdminEmail(id: string) {
      handleEditAdminField(id, 'AdminEmail');
  }
  
  function handleEditAdminPhone(id: string) {
      handleEditAdminField(id, 'AdminPhone');
  }
  function handleEditAdminProfession(id: string) {
    handleEditAdminField(id, 'AdminProfession');
}
function handleEditAdminRole(id: string) {
    handleEditAdminField(id, 'AdminRole');
}
  
  function handleEditAdminYearOfBirth(id: string) {
      handleEditAdminField(id, 'AdminYearOfBirth');
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