async function handleAddAdmin(ev:any): Promise<void> {
    try{
        ev.preventDefault();

        const formdata = new FormData(ev.target);
        const adminName = formdata.get("adminName") as string;
        const adminEmail= formdata.get("adminEmail") as string;
        const adminPhone = formdata.get("adminNumber") as string;
        const adminRole = formdata.get("adminRole") as string;
        const adminProfession = formdata.get("adminProfession") as string;
        const date = formdata.get("adminDate") as string;
        const adminYearOfBirth = new Date(date).getFullYear();

        const response = await fetch ("/api/admins/add-admin",{
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                adminName,
                adminEmail,
                adminPhone,
                adminProfession,
                adminRole,
                adminYearOfBirth,
            }),
        });
        if(!response.ok){
            const data = await response.json();
            console.log("admin add:", data);

            ev.target.reset();

            await fetchAllAdmins();
        }
        else{
            throw new Error ("Failed to add admin");
        }
  
    }catch (err){
        console.error(err);
    }
}

async function fetchAllAdmins(): Promise<void>{
    try{
        const response= await fetch("/api/admins");
        if(!response.ok){
            throw new Error("failed to fetch admins");
        }

        const admins= await response.json();
        const container = document.getElementById("adminList");
        if(container){
            container.innerHTML=`
            <tabel>
                <thread>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>phone</th>
                        <th>Profession</th>
                        <th>Role</th>
                        <th>Year of birth</th>
                        <th>Action</>
                    </tr>
                </thread>    
                <tbody>
                    ${admins
                    .map((admin:any) => `
                        <tr id="admin-${admin._id}">
                            <td id = "adminName-${admin._id}" onclick="handleEditadminName('${admin._id}')">${admin.adminName}</td>
                            <td id = "adminEmail-${admin._id}" onclick="handleEditadminEmail('${admin._id}')">${admin.adminEmail}</td>
                            <td id = "adminPhone-${admin._id}" onclick="handleEditadminPhone('${admin._id}')">${admin.adminPhone}</td>
                            <td id = "adminProfession-${admin._id}" onclick="handleEditadminProfession('${admin._id}')">${admin.adminProfession}</td>
                            <td id = "adminRole-${admin._id}" onclick="handleEditadminRole('${admin._id}')">${admin.adminRole}</td>
                            <td id = "adminYearOfBirt-${admin._id}" onclick="handleEditadminYearOfBirt('${admin._id}')">${admin.adminYearOfBirth}</td>

                            <td>
                                <button class="delete-btn" onclick="handelDeleteAdmin"('${admin._id}')">Delete</button>')
                                <button class="edit-btn" onclick="handleEditAdminField"('${admin._id})">Edit</button>
                            </td>
                        </tr>    

                    ` )
                    .json("")}
                </tbody>        
            </table>    `;
        }

    }catch (error){
        console.error(error);
    }
}

function handleEditAdminField(id:string , fieldName:string){
    const element = document.getElementById(`${fieldName}-${id}`) ;
    if(!element)return;

    if(fieldName === 'adminYearOfBirth'){
        const currentYear = element.innerText;
        const input = document.createElement('input');
        input.type='number';
        input.value= currentYear || ''; 
        element.innerHTML = '';
        element.appendChild(input);
        input.focus();

        input.addEventListener('blur', async () => {
            const value = parseInt(input.value,10);
            element.innerHTML = value.toString();
            await updateAdmin(id, {yearOfBirth:value});
            },{once:true});
    }else{
            element.contentEditable = 'true';
            element.focus();

            element.addEventListener("blur",async () => {
                const value = element.innerText;
                element.contentEditable = 'false';
                await updateAdmin(id, { [fieldName]: value});
            },{once:true});
    }
}

function handleEditadminName(id:string){
    handleEditAdminField(id,'adminName');
}

function handleEditadminEmail(id:string){
    handleEditAdminField(id,'adminEmail');
}
function handleEditadminPhone(id:string){
    handleEditAdminField(id,'adminPhone');
}
function handleEditadminProfession(id:string){
    handleEditAdminField(id,'adminProfession');
}
function handleEditadminRole(id:string){
    handleEditAdminField(id,'adminRole');
}
function handleEditadminYearOfBirth(id:string){
    handleEditAdminField(id,'adminYearOfBirth');
}

async function updateAdmin(id:string, updatedFields: Partial<any>) {
    try{
        const response = await fetch('/api/admins/edit-admoin',{
            method: 'PUT',
            headers:{'content-Type': 'application/json'},
            body:JSON.stringify({id,...updatedFields}),
        });
        if(!response.ok){
            const errorMessage = await response.text();
            console.error ('Failed to update admin. Server response:', errorMessage); 
        }
    }catch(error){
        console.error('Error updating admin:', error);
    }
    
}

async function handleDeleteAdmin(id:string){
    try{
        console.log(`Attempting to delete admin with id: ${id}`);
        const response = await fetch(`/api/admins/delete-admin`,{
            method:'DELETE',
            headers: {'content-Type': 'application/json'},
            body: JSON.stringify({id}),
        });

        if(!response.ok){
            const errorMessage = await response.text();
            console.error('Failed to delete admin. Server response:',errorMessage);
        }

        document.getElementById(`admin-${id}`)?.remove();
        console.log(`Admin with id ${id} delete from the Dom`);

    }catch(error){
        console.error('Error deleting admin:',error)
    }
}

window.onload = () => {
    fetchAllAdmins();
};

function async() {
    throw new Error("Function not implemented.");
}
