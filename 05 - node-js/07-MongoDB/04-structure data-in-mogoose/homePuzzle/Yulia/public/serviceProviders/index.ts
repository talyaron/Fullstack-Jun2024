const form = document.getElementById(
  "service-provider-form"
) as HTMLFormElement;
const serviceProvidersContainer = document.getElementById(
  "service-providers"
) as HTMLDivElement;

// Handle form submission
form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const formData = new FormData(form);
  const serviceProvider = {
    name: formData.get("name") as string,
    email: formData.get("email") as string,
    phone: formData.get("phone") as string,
  };

  try {
    const response = await fetch("/api/service-providers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(serviceProvider),
    });

    if (response.ok) {
      const newServiceProvider = await response.json();
      renderServiceProvider(newServiceProvider);
    } else {
      console.error(
        "Failed to create service provider:",
        await response.text()
      );
    }
  } catch (error) {
    console.error("Error:", error);
  }

  form.reset();
});

// Render service provider
function renderServiceProvider(serviceProvider: any) {
  const serviceProviderCard = document.createElement("div");
  serviceProviderCard.className = "service-providers__card";

  serviceProviderCard.innerHTML = `
    <p><strong>Name:</strong> ${serviceProvider.name}</p>
    <p><strong>Email:</strong> ${serviceProvider.email}</p>
    <p><strong>Phone:</strong> ${serviceProvider.phone}</p>
  `;

  serviceProvidersContainer.appendChild(serviceProviderCard);
}
