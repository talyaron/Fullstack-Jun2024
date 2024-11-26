const form = document.getElementById("service-form") as HTMLFormElement;
const servicesContainer = document.getElementById("services") as HTMLDivElement;

// Handle form submission
form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const formData = new FormData(form);
  const service = {
    name: formData.get("name") as string,
    description: formData.get("description") as string,
    price: formData.get("price") as string,
  };

  try {
    const response = await fetch("/api/services", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(service),
    });

    if (response.ok) {
      const newService = await response.json();
      renderService(newService);
    } else {
      console.error("Failed to create service:", await response.text());
    }
  } catch (error) {
    console.error("Error:", error);
  }

  form.reset();
});

// Render service
function renderService(service: any) {
  const serviceCard = document.createElement("div");
  serviceCard.className = "services__card";

  serviceCard.innerHTML = `
    <p><strong>Name:</strong> ${service.name}</p>
    <p><strong>Description:</strong> ${service.description}</p>
    <p><strong>Price:</strong> ${service.price}</p>
  `;

  servicesContainer.appendChild(serviceCard);
}
