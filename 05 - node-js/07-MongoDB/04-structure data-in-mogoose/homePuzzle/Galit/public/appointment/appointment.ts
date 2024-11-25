async function handleAddAppointment(ev: Event): Promise<void> {
    try {
        ev.preventDefault();

        const formData = new FormData(ev.target as HTMLFormElement);
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
            body: JSON.stringify({ client, admin, service, date, startTime, endTime, status, rating, review }),
        });

        if (response.ok) {
            const data = await response.json();
            console.log("Appointment added:", data);

            (ev.target as HTMLFormElement).reset();
            await fetchAllAppointments();
        } else {
            throw new Error("Failed to add appointment");
        }
    } catch (err) {
        console.error("Error adding appointment:", err);
    }
}

async function fetchAllAppointments(): Promise<void> {
    try {
        const appointmentsResponse = await fetch("/api/appointments");
        if (!appointmentsResponse.ok) throw new Error("Failed to fetch appointments");

        const appointments = await appointmentsResponse.json();

        const adminsResponse = await fetch("/api/admins");
        if (!adminsResponse.ok) throw new Error("Failed to fetch admins");

        const admins = await adminsResponse.json();

        const clientsResponse = await fetch("/api/clients");
        if (!clientsResponse.ok) throw new Error("Failed to fetch clients");

        const clients = await clientsResponse.json();

        const servicesResponse = await fetch("/api/services");
        if (!servicesResponse.ok) throw new Error("Failed to fetch services");

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
                    .map(
                        (appointment: any) => `
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
                                <button onclick="handleEditAppointment('${appointment._id}')">Edit</button>
                                <button onclick="handleDeleteAppointment('${appointment._id}')">Delete</button>
                            </td>
                        </tr>
                    `
                    )
                    .join("")}
            </tbody>
        </table>
    `;
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

async function populateAppointmentDropdowns(): Promise<void> {
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

        populateDropdown("client", clients, "firstName");
        populateDropdown("admin", admins, "AdminFirstName");
        populateDropdown("service", services, "name");
    } catch (error) {
        console.error("Error populating dropdowns:", error);
    }
}

function populateDropdown(selectId: string, items: any[], textField: string): void {
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
    populateAppointmentDropdowns();
    fetchAllAppointments();
};
