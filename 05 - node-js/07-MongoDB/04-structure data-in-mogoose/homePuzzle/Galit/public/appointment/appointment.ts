async function handleAddAppointment(ev: any): Promise<void> {
    try {
        ev.preventDefault();

        const formData = new FormData(ev.target);
        const client = formData.get("client") as string;
        const admin = formData.get("admin") as string;
        const service = formData.get("service") as string;
        const date = formData.get("date") as string;
        const startTime = formData.get("startTime") as string;
        const endTime = formData.get("endTime") as string;
        const status = formData.get("status") as string;
        const rating = formData.get("rating") as string;
        const review = formData.get("review") as string;

        const response = await fetch("/api/appointments/add-appointment", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                client,
                admin,
                service,
                date,
                startTime,
                endTime,
                status,
                rating,
                review,
            }),
        });

        if (response.ok) {
            const data = await response.json();
            console.log("Appointment added:", data);

            ev.target.reset();

            await fetchAllAppointments(); 
        } else {
            throw new Error("Failed to add appointment");
        }
    } catch (err) {
        console.error(err);
    }
}

async function fetchAllAppointments(): Promise<void> {
    try {
        const response = await fetch("/api/appointments");
        if (!response.ok) {
            throw new Error("Failed to fetch appointments");
        }
        const appointments = await response.json();

        const container = document.getElementById("appointment-list");
        if (container) {
            container.innerHTML = `
                <table>
                    <thead>
                        <tr>
                            <th>Client</th>
                            <th>Admin</th>
                            <th>Service</th>
                            <th>Date</th>
                            <th>Start Time</th>
                            <th>End Time</th>
                            <th>Status</th>
                            <th>Rating</th>
                            <th>Review</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${appointments
                            .map(
                                (appointment: any) => `
                                <tr id="appointment-${appointment._id}">
                                    <td id="client-${appointment._id}" onclick="handleEditField('${appointment._id}', 'client')">${appointment.client}</td>
                                    <td id="admin-${appointment._id}" onclick="handleEditField('${appointment._id}', 'admin')">${appointment.admin}</td>
                                    <td id="service-${appointment._id}" onclick="handleEditField('${appointment._id}', 'service')">${appointment.service}</td>
                                    <td id="date-${appointment._id}" onclick="handleEditField('${appointment._id}', 'date')">${appointment.date}</td>
                                    <td id="startTime-${appointment._id}" onclick="handleEditField('${appointment._id}', 'startTime')">${appointment.startTime}</td>
                                  <td id="endTime-${appointment._id}" onclick="handleEditField('${appointment._id}', 'endTime')">${appointment.endTime}</td>
                                    <td id="status-${appointment._id}" onclick="handleEditField('${appointment._id}', 'status')">${appointment.status}</td>
                                    <td id="rating-${appointment._id}" onclick="handleEditField('${appointment._id}', 'rating')">${appointment.rating}</td>
                                    <td id="review-${appointment._id}" onclick="handleEditField('${appointment._id}', 'review')">${appointment.review}</td>
                                    <td>
                                        <button class="delete-btn" onclick="handleDeleteAppointment('${appointment._id}')">Delete</button>
                                        <button class="edit-btn" onclick="handleEditField('${appointment._id}')">Edit</button>
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

function handleEditField(id: string, fieldName: string) {
    const element = document.getElementById(`${fieldName}-${id}`);
    if (!element) return;

    element.contentEditable = "true";
    element.focus();

    element.addEventListener(
        "blur",
        async () => {
            const value = element.innerText;
            element.contentEditable = "false";
            await updateAppointment(id, { [fieldName]: value });
        },
        { once: true }
    );
}

async function updateAppointment(id: string, updatedFields: Partial<any>) {
    try {
        const response = await fetch(`/api/appointments/edit-appointment`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ id, ...updatedFields }),
        });

        if (!response.ok) {
            const errorMessage = await response.text();
            console.error("Failed to update appointment. Server response:", errorMessage);
            throw new Error("Failed to update appointment");
        }

        await fetchAllAppointments();
    } catch (error) {
        console.error("Error updating appointment:", error);
    }
}

async function handleDeleteAppointment(id: string) {
    try {
        console.log(`Attempting to delete appointment with id: ${id}`);

        const response = await fetch(`/api/appointments/delete-appointment`, {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ id }),
        });

        if (!response.ok) {
            const errorMessage = await response.text();
            console.error("Failed to delete appointment. Server response:", errorMessage);
            throw new Error("Failed to delete appointment");
        }

        document.getElementById(`appointment-${id}`)?.remove();
        console.log(`Appointment with id ${id} deleted from the DOM`);
    } catch (error) {
        console.error("Error deleting appointment:", error);
    }
}

async function populateDropdowns(): Promise<void> {
    try {
        const clientsResponse = await fetch('/api/clients');
        const clients = await clientsResponse.json();
        const clientSelect = document.getElementById('client') as HTMLSelectElement;
        clients.forEach((client: any) => {
            const option = document.createElement('option');
            option.value = client._id; 
            option.textContent = client.name; 
            clientSelect.appendChild(option);
        });

        const adminsResponse = await fetch('/api/admins');
        const admins = await adminsResponse.json();
        const adminSelect = document.getElementById('admin') as HTMLSelectElement;
        admins.forEach((admin: any) => {
            const option = document.createElement('option');
            option.value = admin._id; 
            option.textContent = admin.name; 
            adminSelect.appendChild(option);
        });

        const servicesResponse = await fetch('/api/services');
        const services = await servicesResponse.json();
        const serviceSelect = document.getElementById('service') as HTMLSelectElement;
        services.forEach((service: any) => {
            const option = document.createElement('option');
            option.value = service._id; 
            option.textContent = service.name;
            serviceSelect.appendChild(option);
        });
    } catch (error) {
        console.error('Error populating dropdowns:', error);
    }
}

window.onload = () => {
    populateDropdowns();
    fetchAllAppointments();
};



