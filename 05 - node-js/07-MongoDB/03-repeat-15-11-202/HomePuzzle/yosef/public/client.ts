async function handleAddClient(ev: any) {
    try {
        ev.preventDefault();
        const formData = new FormData(ev.target);
        const firstName = formData.get("firstName");
        const lastName = formData.get("lastName");
        const email = formData.get("email");
        const phone = formData.get("phone");
        const date = formData.get("date") as string;
        const yearOfBirth = new Date(date).getFullYear();

        const response = await fetch("/api/clients/add-client",{
            method:'POST',
            headers:{'Content-Type': 'application/json'},
            body:JSON.stringify({
                firstName,
                lastName,
                email,
                phone,
                yearOfBirth,

            })
        })

        if(response.ok){
            const data = await response.json();
            renderToTheDom(data._id ,firstName, lastName, email, phone, yearOfBirth);
            console.log(data);
            console.log("_idClient is:");
            console.log(data._id)
        } 

    } catch (err) {
        console.error(err);
    }
}

function renderToTheDom (_id: string, firstName: string, lastName: string, email: string, phone: string, yearOfBirth){
    try{
    const container = document.getElementById("show");
    if (!container)
        return console.error("Container not found");
    const div = document.createElement("div");
    div.className = "client";
    div.id = `client-${_id}`;
    div.innerHTML = `
        <h2>${firstName} ${lastName}</h2>
        <p>Email: ${email}</p>
        <p>Phone: ${phone}</p>
        <p>Year of Birth: ${yearOfBirth}</p>
        <button data-id="${_id}" onclick="handleDeleteClient(event)">Delete</button>
        <button data-id="${_id}" onclick="handleEditClient(event)">Edit</button>
        <p>--------------------------------------------------------------</p>
        <h1>
    `;
    container.appendChild(div);
}
    catch(err){
        console.error(err);
    }
}

async function handleShowClients(){
    try{
        const response = await fetch("/api/clients/get-all-clients");
        if(response.ok){
            const data = await response.json();
            console.log(data);
            data.clients.forEach((client: any) => {
                renderToTheDom(client._id ,client.firstName, client.lastName, client.email, client.phone, client.yearOfBirth);
            });
        }
    }
    catch(err){
        console.error(err);
    }
}

async function handleDeleteClient(event: any){
    try{
        const id = event.target.getAttribute("data-id");
        console.log(id);
        const response = await fetch(`/api/clients/delete-client/${id}`, {
            method: 'DELETE'
        });
        if(response.ok){
            console.log("Client deleted successfully");
            const divToRemove = document.getElementById(`client-${id}`);
            if(divToRemove) divToRemove.remove();
        }
    }
    catch(err){
        console.error(err);
    }
}

async function handleEditClient(event: any){
    try{
        const id = event.target.getAttribute("data-id");
        console.log(id);
        const div = document.getElementById(`client-${id}`);
        if(div){
            const firstName = prompt("Enter new first name:");
            const lastName = prompt("Enter new last name:");
            const email = prompt("Enter new email:");
            const phone = prompt("Enter new phone:");
            const yearOfBirth = prompt("Enter new year of birth:");
    }
    const response = await fetch(`/api/clients/edit-client/${id}`, {
        method: 'PATCH',
        headers:{'Content-Type': 'application/json'},
        body:JSON.stringify({
            firstName,
            lastName,
            email,
            phone,
            yearOfBirth
        })
    });
}
    catch(err){
        console.error(err);
    }
}

handleShowClients();