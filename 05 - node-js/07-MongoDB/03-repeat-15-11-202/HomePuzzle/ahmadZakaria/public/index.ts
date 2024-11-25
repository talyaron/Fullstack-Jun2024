async function handleAddClient(ev: any ): Promise<void>{
    try{
        ev.preventDefault();

        const formData = new FormData(ev.target);
        const name = formData.get("name") as string;
        const email = formData.get("email") as string;
        const phone = formData.get("phone") as string;

        const response = await fetch("/api/clints/add-clien", {
            method:"POST",
            headers:{"content-Type":"application/json"},
            body:JSON.stringify({
                name,email,phone
            }),
        });
        if(response.ok){
            const data = await response.json();
            console.log("client added:",data)

            ev.target.reset();

            await fetchAllClients();
        }else{
            throw new Error("Failed to add client");
        }

    }catch(err){
        console.error(err);
    }
}

async function fetchAllClients(): Promise<void>{
    try{
        const response = await fetch("/api/clients");
        if(!response.ok){
            throw new Error ("Field to fetch client");
        }

        const clients = await response.json();

        const container = document.getElementById("clientList");
        if(container){
            container.innerHTML=`<table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                </tr>
            </thead>
            <tbody>
                ${clients
                    .map((client: any) => `
                        <tr id="client-${client._id}">
                            <td id="name-${client._id}" onclick="handleEditname('${client._id}')">${client.name}</td>
                            <td id="email-${client._id}" onclick="handleEditemail('${client._id}')">${client.email}</td>
                            <td id="phone-${client._id}" onclick="handleEditphone('${client._id}')">${client.phone}</td>
                            <td>
                                <button class="delete-btn" onclick="handleDeleteClient('${client._id}')">Delete</button>
                                <button class="edit-btn" onclick="handleEditField('${client._id}')">Edit</button>

                                </td>
                        </tr>
                    `)
                    .join("")}
            </tbody>
        </table>
    `;
        }

    }catch(error){
        console.log(error);
    }
} 

function handleEditField(id:string, fieldName:string){
    const element = document.getElementById(`${fieldName}-${id}`);
    if(!element) return;

    element.contentEditable = ' true';
    element.focus();

    element.addEventListener("blur", async () => {
        const value = element.innerText;
        element.contentEditable = ' false';
        await updateClient(id , {[fieldName]: value});
    },{once:true});
}

function handleEditname(id:string){
    handleEditField(id,'name');
}
function handleEditemail(id:string){
    handleEditField(id,'email');
}
function handleEditphone(id:string){
    handleEditField(id,'phone');
}

async function updateClient(id:string , updatedFields: Partial<any>){
    try{
        const response = await fetch("/api/clients/edit-client",{
            method:'PUT',
            headers: {'Content-Type': 'application/json'},
            body:JSON.stringify({id, ...updatedFields}),
        });

        if(!response.ok){
            const errorMessage= await response.text();
            console.error('Field to update client. Server response:',errorMessage);
            throw new Error('Field to update client');
        }

        await fetchAllClients();

    }catch(error){
        console.error('Error updating client:', error);
    }
}
 async function handleDeleteClient(id:string){
    try{
        console.log(`Attempting to delete client with id: ${id}`);
        const response =await fetch("/api/clients/delete-client",{
            method:'DELETE',
            headers:{'Content-Type': 'application/json'},
            body:JSON.stringify({id}),
        });

        if(!response.ok){
            const errorMessage = await response.text();
            console.error('Field to delete client. Server response:',errorMessage);
            throw new Error('Field to delete client');
        }

        document.getElementById(`client-${id}`)?.remove();
        console.log(`client with id ${id} deleted from the DOM`);

    }catch(error){
        console.error('Error deleting client:',error);
    }
 }
 window.onload = () =>{
    fetchAllClients();
 };