 async function handelAddUser(ev:any){
    try{
        ev.preventDefault();
        const formData = new FormData(ev.target);
        const firstName = formData.get("firstName")
        const lastName = formData.get("lastName")
        const email = formData.get("email")
        const date = formData.get("date") as string
        const password = formData.get("password")
        const tel = formData.get("phone")
        const yearOfBirth = new Date(date).getFullYear();

        console.log(firstName, tel,date);

            const response = await fetch ("/api/users/add-user",{
                method:'POST',
                headers: { 'Content-Type': 'application/json' },
                body:JSON.stringify({
                    firstName,
                    lastName,
                    email,
                    password,
                    tel,
                    yearOfBirth
                })
            })

            if(response.ok){
                const data = await response.json();
                console.log(data);

                const render = document.querySelector("#div")! as HTMLElement
            render.innerHTML = `<div class="user-card">
                    <h2>New User Added:</h2>
                    <p><strong>First Name:</strong> ${data.firstName}</p>
                    <p><strong>Last Name:</strong> ${data.lastName}</p>
                    <p><strong>Email:</strong> ${data.email}</p>
                    <p><strong>Phone:</strong> ${data.tel}</p>
                    <p><strong>Year of Birth:</strong> ${data.yearOfBirth}</p>
                </div>`;
            }

            document.querySelector("#userForm")?.addEventListener("submit", handelAddUser);
            
            


    } catch(er){
        console.error(er)
    }


    
}

