const form = document.getElementById("appointment-form") as HTMLFormElement;
const appointmentsContainer = document.getElementById(
  "appointments"
) as HTMLDivElement;

// Handle form submission
form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const formData = new FormData(form);
  const appointment = {
    client: formData.get("client") as string,
    serviceProvider: formData.get("serviceProvider") as string,
    date: formData.get("date") as string,
    startTime: formData.get("startTime") as string,
    endTime: formData.get("endTime") as string,
    status: formData.get("status") as string,
    service: formData.get("service") as string,
    price: parseFloat(formData.get("price") as string),
  };

  try {
    const response = await fetch("/api/appointments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(appointment),
    });

    if (response.ok) {
      const newAppointment = await response.json();
      renderAppointment(newAppointment);
    } else {
      console.error("Failed to create appointment:", await response.text());
    }
  } catch (error) {
    console.error("Error:", error);
  }

  form.reset();
});

// Render appointment
function renderAppointment(appointment: any) {
  const appointmentCard = document.createElement("div");
  appointmentCard.className = "appointments__card";

  appointmentCard.innerHTML = `
    <p><strong>Client:</strong> ${appointment.client}</p>
    <p><strong>Service Provider:</strong> ${appointment.serviceProvider}</p>
    <p><strong>Date:</strong> ${appointment.date}</p>
    <p><strong>Start Time:</strong> ${appointment.startTime}</p>
    <p><strong>End Time:</strong> ${appointment.endTime}</p>
    <p><strong>Status:</strong> ${appointment.status}</p>
    <p><strong>Service:</strong> ${appointment.service}</p>
    <p><strong>Price:</strong> $${appointment.price.toFixed(2)}</p>
  `;

  appointmentsContainer.appendChild(appointmentCard);
}

// Navigation buttons
document.addEventListener("DOMContentLoaded", () => {
  const header = document.createElement("div");
  header.className = "navigation";

  const buttons = [
    { text: "Go to Clients", link: "/clients" },
    { text: "Go to Service Providers", link: "/service-providers" },
    { text: "Go to Services", link: "/services" },
  ];

  buttons.forEach((buttonData) => {
    const button = document.createElement("button");
    button.className = "navigation__button";
    button.textContent = buttonData.text;

    button.addEventListener("click", () => {
      window.location.href = buttonData.link;
    });

    header.appendChild(button);
  });

  // Add the navigation header to the page
  const root = document.body;
  root.insertBefore(header, root.firstChild);
});
