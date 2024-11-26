const form = document.getElementById("appointment-form") as HTMLFormElement;
const appointmentsContainer = document.getElementById(
  "appointments"
) as HTMLDivElement;
 
// form event listener
form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const formData = new FormData(form);
  const appointment = {
    client: formData.get("client-id") as string,
    serviceProvider: formData.get("service-provider-id") as string,
    service: formData.get("service-id") as string,
    date: formData.get("date") as string,
    startTime: formData.get("start-time") as string,
    endTime: formData.get("end-time") as string,
    price: formData.get("price") as string,
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

// render appointments
function renderAppointment(appointment: any) {
  const appointmentCard = document.createElement("div");
  appointmentCard.className = "appointments__card";

  appointmentCard.innerHTML = `
    <p><strong>Client ID:</strong> ${appointment.client}</p>
    <p><strong>Service Provider ID:</strong> ${appointment.serviceProvider}</p>
    <p><strong>Service ID:</strong> ${appointment.service}</p>
    <p><strong>Date:</strong> ${appointment.date}</p>
    <p><strong>Start Time:</strong> ${appointment.startTime}</p>
    <p><strong>End Time:</strong> ${appointment.endTime}</p>
    <p><strong>Price:</strong> ${appointment.price}</p>
    <button class="appointments__card__button" data-id="${appointment._id}">Delete</button>
  `;

  const deleteButton = appointmentCard.querySelector(
    ".appointments__card__button"
  ) as HTMLButtonElement;
  deleteButton.addEventListener("click", async () => {
    await handleDeleteAppointment(appointment._id, appointmentCard);
  });

  appointmentsContainer.appendChild(appointmentCard);
}

// fetch appointments
async function handleDeleteAppointment(id: string, card: HTMLDivElement) {
  try {
    const response = await fetch(`/api/appointments/${id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      card.remove();
    } else {
      console.error("Failed to delete appointment:", await response.text());
    }
  } catch (error) {
    console.error("Error:", error);
  }
}
