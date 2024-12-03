interface Appointment {
    client: string,
    serviceProvider: string;
    date: string;
    startTime: string;
    endTime: string;
    status: string;  
    service: string;
    price: number;
  }
  
  
  document.addEventListener("DOMContentLoaded", () => {
    loadServiceProviders();
    loadAppointments();
    loadClients();
  });
  
  const form = document.getElementById("appointmentForm") as HTMLFormElement;

  async function loadClients() {
    try {
      const response = await fetch("http://localhost:3000/api/clients/get-client");
      const clients = await response.json();
      const customerSelect = document.getElementById("customer") as HTMLSelectElement;

      customerSelect.innerHTML = '<option value="">Select a customer</option>';
      clients.forEach((client: any) => {
        const option = document.createElement("option");
        option.value = client._id;
        option.textContent = `${client.firstName} ${client.lastName}`;
        customerSelect.appendChild(option);
      });
    } catch (error) {
      console.error("Error loading clients:", error);
      alert("Failed to load clients");
    }
  }
  
  async function loadServiceProviders() {
    try {
      const response = await fetch("http://localhost:3000/api/serviceprovider/get-service-provider");
      const providers = await response.json();
      const serviceProviderSelect = document.getElementById("serviceProvider") as HTMLSelectElement;

      serviceProviderSelect.innerHTML = '<option value="">Select a provider</option>';
      providers.forEach((provider: any) => {
        const option = document.createElement("option");
        option.value = provider._id;
        option.textContent = provider.name;
        serviceProviderSelect.appendChild(option);
      });
    } catch (error) {
      console.error("Error loading service providers:", error);
      alert("Failed to load service providers");
    }
  }
  
  async function loadAvailableSlots(serviceProvider: string, date: string) {
    try {
      const response = await fetch(`http://localhost:3000/api/appointments/slots?serviceProvider=${serviceProvider}&date=${date}`);
      const slots = await response.json();
      const timeSelect = document.getElementById("time") as HTMLSelectElement;

      timeSelect.innerHTML = '<option value="">Select a time slot</option>';
      slots.forEach((slot: string) => {
        const option = document.createElement("option");
        option.value = slot;
        option.textContent = slot;
        timeSelect.appendChild(option);
      });
    } catch (error) {
      console.error("Error loading available slots:", error);
      alert("Failed to load available slots");
    }
  }
  
  async function addAppointment(appointment: Appointment) {
    try {
      const response = await fetch("http://localhost:3000/api/appointments/add-appointments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(appointment),
      });
  
      if (response.ok) {
        alert("Appointment booked successfully!");
        loadAppointments();
      } else {
        alert("Failed to book appointment.");
      }
    } catch (error) {
      console.error("Error booking appointment:", error);
    }
  }
  
  async function loadAppointments() {
    try {
      const response = await fetch("http://localhost:3000/api/appointments/get-appointments");
      const appointments = await response.json();
      const appointmentsList = document.getElementById("appointmentsList");
      if(!appointmentsList) throw new Error("Appointments list not found")
      appointmentsList.innerHTML = ""; 
  
      appointments.forEach((appointment) => {
        const appointmentCard = `
          <div class="appointment-card">
            <div class="appointment-header">
              <div class="appointment-client">${appointment.client.firstName} ${appointment.client.lastName}</div>
              <div class="appointment-status">${appointment.status}</div>
            </div>
            <div class="appointment-details">
              <div><strong>Date:</strong> ${appointment.date}</div>
              <div><strong>Time:</strong> ${appointment.startTime} - ${appointment.endTime}</div>

            </div>
            <div class="appointment-footer">
              <div class="appointment-service">${appointment.service}</div>
              <div class="appointment-price">$${appointment.price}</div>
            </div>
          </div>
        `;
        
        appointmentsList.innerHTML += appointmentCard;
      });
    } catch (error) {
      console.error("Error loading appointments:", error);
      alert("Failed to load appointments");
    }
  }
  
  
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const customerSelect = document.getElementById("customer") as HTMLSelectElement;
    const serviceInput = document.getElementById("service") as HTMLInputElement;
    const timeSelect = document.getElementById("time") as HTMLSelectElement;
    const serviceProviderSelect = document.getElementById("serviceProvider") as HTMLSelectElement;

    const client = customerSelect.value;
    const serviceProvider = serviceProviderSelect.value;
    const date = (document.getElementById("date") as HTMLInputElement).value;
    const time = timeSelect.value;

    if (!client || !serviceProvider || !date || !time || !serviceInput.value) {
        alert("Please fill in all fields.");
        return;
      }

    const appointment: Appointment = {
        client,
        serviceProvider,
        date,
        startTime: time,
        endTime: getEndTime(time),
        status: "pending", 
        service: serviceInput.value,
        price: 50,
      };
  
    addAppointment(appointment);
  });
  
  const serviceProviderSelect = document.getElementById("serviceProvider") as HTMLSelectElement;
  serviceProviderSelect.addEventListener("change", () => {
    const serviceProvider = serviceProviderSelect.value;
    const date = (document.getElementById("date") as HTMLInputElement).value;
  
    if (serviceProvider && date) {
      loadAvailableSlots(serviceProvider, date);
    }
  });
  
  (document.getElementById("date") as HTMLInputElement).addEventListener("change", () => {
    const serviceProvider = serviceProviderSelect.value;
    const date = (document.getElementById("date") as HTMLInputElement).value;
  
    if (serviceProvider && date) {
      loadAvailableSlots(serviceProvider, date);
    }
  });

  function getEndTime(startTime: string): string {
    const start = new Date(`1970-01-01T${startTime}:00`);
    start.setHours(start.getHours() + 1);
    return start.toISOString().substring(11, 16); 
  }