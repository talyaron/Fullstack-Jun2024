async function register(event)
{
    try
    {
        event.preventDefault();

        const data = {username: event.target.username.value, password: event.target.password.value};

        const response = await fetch('http://localhost:3000/api/user/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({data: data})
        });

        checkUser(await response.status);
    }
    catch(error)
    {
        console.error(error);
    }
}

function checkUser(status)
{
    if(status === 201) window.location.href = "http://localhost:3000/login/login.html";
    else if (status === 409) alert("User already exists");
}