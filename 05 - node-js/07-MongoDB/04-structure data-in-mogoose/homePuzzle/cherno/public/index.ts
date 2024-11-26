async function handleRegister(ev: any) {
    try {
        ev.preventDefault();
        const formData = new FormData(ev.target);
        const name = formData.get("lastName");
        const email = formData.get("email");
        const password = formData.get("password");

        if (formData.get("ifProvider") === "on")
        {
            const response = await fetch("/api/clients/add-provider",{
                method:'POST',
                headers:{'Content-Type': 'application/json'},
                body:JSON.stringify({
                    name,
                    email,
                    password,
                })
            })

            if(response.ok){
                const data = await response.json();
            }
        }
        else
        {
            const response = await fetch("/api/clients/add-user",{
                method:'POST',
                headers:{'Content-Type': 'application/json'},
                body:JSON.stringify({
                    name,
                    email,
                    password,
                })
            })
            
            if(response.ok){
                const data = await response.json();
            }
        }

    } 
    catch (err) 
    {
        console.error(err);
    }
}

async function handleLogin(ev: any)
{
    try
    { 
        ev.preventDefault();
        const formData = new FormData(ev.target);
        const email = formData.get("email");
        const password = formData.get("password");

        const response = await fetch("/api/clients/get-client",{
            method:'POST',
            headers:{'Content-Type': 'application/json'},
            body:JSON.stringify({
                email,
                password,
            })
        })

        if(!response.ok){
            throw new Error("couldnt get client")
        }
        else
        {
            const data = await response.json();
            alert(`Logged in as ${data.name}`);
            window.location.href = "/content";
        }

    }
    catch (err)
    {
        console.error(err);
    }
}