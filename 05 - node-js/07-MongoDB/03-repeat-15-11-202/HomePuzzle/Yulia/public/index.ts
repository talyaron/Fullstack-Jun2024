async function handleAddClient(event: any) {
    try {
      event.preventDefault();
      const form = event.target as HTMLFormElement;
      const formData = new FormData(form);
      const firstName = formData.get("firstName") as string;
      const lastName = formData.get("lastName") as string;
      const email = formData.get("email") as string;
      const phone = formData.get("phone") as string;
      const date = formData.get("dateOfBirth") as string;
      const yearOfBirth = new Date(date).getFullYear();

      const response = await fetch("/api/clients/add-client", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          phone,
          yearOfBirth,
        }),
      });

      if (response.ok) {
        await response.json();
        form.reset();
      }
      
    } catch (error) {
        console.error(error);   
    }
}