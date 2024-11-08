async function handleLogin(ev): Promise<void> {
    try {
        ev.preventDefault();

        const form = ev.target;
        const formData = new FormData(form);
        const email = formData.get('email') as string;
        const password = formData.get('password') as string;

        const response = await fetch('/api/users/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        });

        if (!response.ok) {
            throw new Error('Login failed');
        }

        const data = await response.json();
        console.log('Login successful', data);
    } catch (error) {
        console.error('Login failed', error);
    }
}

// Example usage:
