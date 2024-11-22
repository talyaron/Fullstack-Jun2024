async function handleRegister(ev): Promise<void> {
    ev.preventDefault();
    try {
        const formData = new FormData(ev.target as HTMLFormElement);
        const firstName = formData.get('firstName') as string;
        const lastName = formData.get('lastName') as string;
        const email = formData.get('email') as string;
        const password = formData.get('password') as string;

        if(!firstName || !lastName || !email || !password){
            alert('Please fill all fields');
            return;
        }

        const result = await fetch('http://localhost:3000/api/clients/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ firstName, lastName, email, password })
        });

    } catch (error) {
        console.error('An error occurred during registration:', error);
        alert('An error occurred. Please try again.');
    }
}