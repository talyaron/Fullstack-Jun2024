const form = document.getElementById('registration-form') as HTMLFormElement;

if (!form) {
    throw new Error('Registration form not found');
}

form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const username = formData.get('username') as string;
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;
    const confirmPassword = formData.get('confirm-password') as string;

    if (password !== confirmPassword) {
        alert('Passwords do not match');
        return;
    }

    try {
        const response = await fetch('/api/users/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, email, password }),
        });

        const result = await response.json();

        if (response.ok) {
            alert(result.message);
            window.location.href = '../login/login.html';
        } else {
            alert(`Registration failed: ${result.message}`);
        }
    } catch (error) {
        console.error('Error during registration:', error);
    }
});
