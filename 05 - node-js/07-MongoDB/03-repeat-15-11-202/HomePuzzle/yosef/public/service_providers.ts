async function handleAddServiceProvider (ev: any){
    try{
        ev.preventDefault();
        const formData = new FormData(ev.target);
        const serviceProviderName = formData.get("serviceProvider");
        const phone = formData.get("phone");
        const email = formData.get("email");
        const price = formData.get("price");
        const averageRating = formData.get("averageRating");

        if (!serviceProviderName || !phone || !email || !price || ! averageRating)
            throw new Error("All fields are 23required");
        
        // Send request to server
        const response = await fetch('/api/serviceProviders/add-service-provider', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                serviceProviderName,
                phone,
                email,
                price,
                averageRating
            })
        });
    } catch (error) {
        console.error(error);
        alert("Error adding service provider: " + error.message);

    }
}
