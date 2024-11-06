const registerForm = document.getElementById('registration-form') as HTMLFormElement;

registerForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const formData = new FormData(registerForm);
    const username = formData.get('username') as string;
    const password = formData.get('password') as string;

    const response = await fetch('/api/users/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    });

    if (response.ok) {
        alert('Registration successful');
        window.location.href = '../login/login.html';
    } else {
        alert('Registration failed');
    }
});
