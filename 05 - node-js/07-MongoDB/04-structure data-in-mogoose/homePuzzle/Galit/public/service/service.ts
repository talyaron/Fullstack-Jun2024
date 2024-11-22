async function handleAddService(ev: any): Promise<void> {
    try {
        ev.preventDefault();

        const formData = new FormData(ev.target);
        const admin = formData.get("admin") as string;
        const name = formData.get("name") as string;
        const description = formData.get("description") as string;
        const duration = parseInt(formData.get("duration") as string, 10);
        const price = parseFloat(formData.get("price") as string);

        const response = await fetch("/api/services/add-service", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ admin, name, description, duration, price }),
        });

        if (response.ok) {
            const data = await response.json();
            console.log("Service added:", data);

            ev.target.reset(); 
            await fetchAllServices();
        } else {
            throw new Error("Failed to add service");
        }
    } catch (err) {
        console.error(err);
    }
}

async function fetchAllServices(): Promise<void> {
    try {
        const response = await fetch("/api/services");
        if (!response.ok) {
            throw new Error("Failed to fetch services");
        }
        const services = await response.json();

        const container = document.getElementById("service-list");
        if (container) {
            container.innerHTML = `
                <table>
                    <thead>
                        <tr>
                           <th>service provider</th>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Duration</th>
                            <th>Price</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${services
                            .map(
                                (service: any) => `
                                <tr id="service-${service._id}">
                                  <td id="admin-${service._id}" onclick="handleEditServiceField('${service._id}', 'name')">
                                     ${service.admin ? `${service.admin.AdminFirstName} ${service.admin.AdminLastName}` : 'Unknown Admin'}</td>                              
                                   <td id="name-${service._id}" onclick="handleEditServiceField('${service._id}', 'name')">${service.name}</td>
                                    <td id="description-${service._id}" onclick="handleEditServiceField('${service._id}', 'description')">${service.description}</td>
                                    <td id="duration-${service._id}" onclick="handleEditServiceField('${service._id}', 'duration')">${service.duration}</td>
                                    <td id="price-${service._id}" onclick="handleEditServiceField('${service._id}', 'price')">${service.price}</td>
                                    <td>
                                        <button class="delete-btn" onclick="handleDeleteService('${service._id}')">Delete</button>
                                       <button class="edit-btn" onclick="handleEditService('${service._id}')">Edit</button>

                                    </td>
                                </tr>
                            `
                            )
                            .join("")}
                    </tbody>
                </table>
            `;
        }
    } catch (error) {
        console.error(error);
    }
}

function handleEditServiceField(id: string, fieldName: string) {
    const element = document.getElementById(`${fieldName}-${id}`);
    if (!element) return;

    element.contentEditable = "true";
    element.focus();

    element.addEventListener(
        "blur",
        async () => {
            const value =
                fieldName === "price" || fieldName === "duration"
                    ? parseFloat(element.innerText)
                    : element.innerText.trim();
            element.contentEditable = "false";

            await updateService(id, { [fieldName]: value });
        },
        { once: true }
    );
}

async function updateService(id: string, updatedFields: Partial<any>) {
    try {
        const response = await fetch(`/api/services/edit-service`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ id, ...updatedFields }),
        });

        if (!response.ok) {
            const errorMessage = await response.text();
            console.error("Failed to update service. Server response:", errorMessage);
            throw new Error("Failed to update service");
        }

        await fetchAllServices();
    } catch (error) {
        console.error("Error updating service:", error);
    }
}

async function handleDeleteService(id: string): Promise<void> {
    try {
        console.log(`Attempting to delete service with id: ${id}`);

        const response = await fetch(`/api/services/delete-service`, {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ id }),
        });

        if (!response.ok) {
            const errorMessage = await response.text();
            console.error("Failed to delete service. Server response:", errorMessage);
            throw new Error("Failed to delete service");
        }

        document.getElementById(`service-${id}`)?.remove();
        console.log(`Service with id ${id} deleted from the DOM`);
    } catch (error) {
        console.error("Error deleting service:", error);
    }
}

async function serviceDropdowns(): Promise<void> {
    try {
        const adminsResponse = await fetch('/api/admins');
        const admins = await adminsResponse.json();
        const adminSelect = document.getElementById('admin') as HTMLSelectElement;

        admins.forEach((admin: any) => {
            const option = document.createElement('option');
            option.value = admin._id; 
            option.textContent = `${admin.AdminFirstName} ${admin.AdminLastName}`;
            adminSelect.appendChild(option);
        });
    } catch (error) {
        console.error("Error fetching admins:", error);
    }
}
window.onload = async () => {
    fetchAllServices();
    await serviceDropdowns(); 
};
