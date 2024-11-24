async function handleAddAppointment(ev: Event): Promise<void> {
    try {
        ev.preventDefault();

        const form = ev.target as HTMLFormElement;
        const formData = new FormData(form);

        const appointment = {
            client: formData.get("client") as string,
            admin: formData.get("admin") as string,
            service: formData.get("service") as string,
            date: formData.get("date") as string,
            startTime: formData.get("startTime") as string,
            endTime: formData.get("endTime") as string,
            status: formData.get("status") as string,
            rating: formData.get("rating") as string,
            review: formData.get("review") as string,
        };

        const response = await fetch("/api/appointments/add-appointment", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(appointment),
        });

        if (!response.ok) throw new Error("Failed to add appointment");

        const data = await response.json();
        console.log("Appointment added:", data);

        form.reset();
        await fetchAllAppointments();
    } catch (err) {
        console.error("Error adding appointment:", err);
    }
}

async function fetchAllAppointments(): Promise<void> {
    try {
        const [appointmentsResponse, adminsResponse, clientsResponse, servicesResponse] = await Promise.all([
            fetch("/api/appointments"),
            fetch("/api/admins"),
            fetch("/api/clients"),
            fetch("/api/services"),
        ]);

        if (!appointmentsResponse.ok || !adminsResponse.ok || !clientsResponse.ok || !servicesResponse.ok) {
            throw new Error("Failed to fetch required data");
        }

        const appointments = await appointmentsResponse.json();
        const admins = await adminsResponse.json();
        const clients = await clientsResponse.json();
        const services = await servicesResponse.json();

        const adminMap = admins.reduce((map: Record<string, string>, admin: any) => {
            map[admin._id] = `${admin.AdminFirstName} ${admin.AdminLastName}`;
            return map;
        }, {});

        const clientMap = clients.reduce((map: Record<string, string>, client: any) => {
            map[client._id] = `${client.firstName} ${client.lastName}`;
            return map;
        }, {});

        const serviceMap = services.reduce((map: Record<string, string>, service: any) => {
            map[service._id] = service.name;
            return map;
        }, {});

        renderAppointments(appointments, adminMap, clientMap, serviceMap);
    } catch (error) {
        console.error("Error fetching appointments:", error);
    }
}

function renderAppointments(
    appointments: any[],
    adminMap: Record<string, string>,
    clientMap: Record<string, string>,
    serviceMap: Record<string, string>
): void {
    const container = document.getElementById("appointment-list");
    if (!container) return;

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
                    .map((appointment
                        : any) => `
                        <tr id="appointment-${appointment._id}">
                            <td>${clientMap[appointment.client] || "N/A"}</td>
                            <td>${adminMap[appointment.admin] || "N/A"}</td>
                            <td>${serviceMap[appointment.service] || "N/A"}</td>
                            <td>${appointment.date}</td>
                            <td>${appointment.startTime}</td>
                            <td>${appointment.endTime}</td>
                            <td>${appointment.status}</td>
                            <td>${appointment.rating}</td>
                            <td>${appointment.review}</td>
                            <td>
                                <button class="edit-btn" onclick="handleEditField('${appointment._id}')">Edit</button>
                                <button class="delete-btn" onclick="handleDeleteAppointment('${appointment._id}')">Delete</button>
                            </td>
                        </tr>
                    `)
                    .join("")}
            </tbody>
        </table>
    `;
}

function handleEditField(id: string, fieldName: string): void {
    const element = document.getElementById(`${fieldName}-${id}`);
    if (!element) return;

    element.contentEditable = "true";
    element.focus();

    element.addEventListener(
        "blur",
        async () => {
            const value = element.innerText.trim();
            element.contentEditable = "false";
            await updateAppointment(id, { [fieldName]: value });
        },
        { once: true }
    );
}

async function updateAppointment(id: string, updatedFields: Partial<any>): Promise<void> {
    try {
        const response = await fetch(`/api/appointments/edit-appointment`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ id, ...updatedFields }),
        });

        if (!response.ok) throw new Error("Failed to update appointment");

        await fetchAllAppointments();
    } catch (error) {
        console.error("Error updating appointment:", error);
    }
}

async function handleDeleteAppointment(id: string): Promise<void> {
    try {
        const response = await fetch(`/api/appointments/delete-appointment`, {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ id }),
        });

        if (!response.ok) throw new Error("Failed to delete appointment");

        document.getElementById(`appointment-${id}`)?.remove();
    } catch (error) {
        console.error("Error deleting appointment:", error);
    }
}

async function populateDropdowns(): Promise<void> {
    try {
        const [clientsResponse, adminsResponse, servicesResponse] = await Promise.all([
            fetch("/api/clients"),
            fetch("/api/admins"),
            fetch("/api/services"),
        ]);

        if (!clientsResponse.ok || !adminsResponse.ok || !servicesResponse.ok) {
            throw new Error("Failed to populate dropdowns");
        }

        const clients = await clientsResponse.json();
        const admins = await adminsResponse.json();
        const services = await servicesResponse.json();

        populateSelect("client", clients, "firstName");
        populateSelect("admin", admins, "AdminFirstName");
        populateSelect("service", services, "name");
    } catch (error) {
        console.error("Error populating dropdowns:", error);
    }
}

function populateSelect(selectId: string, items: any[], textField: string): void {
    const select = document.getElementById(selectId) as HTMLSelectElement;
    if (!select) return;

    items.forEach((item) => {
        const option = document.createElement("option");
        option.value = item._id;
        option.textContent = item[textField];
        select.appendChild(option);
    });
}

window.onload = () => {
    populateDropdowns();
    fetchAllAppointments();
};
