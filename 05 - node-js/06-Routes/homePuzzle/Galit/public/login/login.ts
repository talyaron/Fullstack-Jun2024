const loginForm = document.getElementById('login-form') as HTMLFormElement;

loginForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const formData = new FormData(loginForm);
    const username = formData.get('username') as string;
    const password = formData.get('password') as string;

    const response = await fetch('/api/users/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    });

    if (response.ok) {
        window.location.href = '../index.html';
    } else {
        const errorData = await response.json();
        if (response.status === 401) {
            alert(errorData.message); 
        } else {
            alert('Login failed');
        }
    }
});

async function checkSession() {
    try {
        const response = await fetch('/api/users/session');
        if (response.ok) {
            window.location.href = '../index.html';
        } else {
            console.log('No active session');
        }
    } catch (error) {
        console.error('Error checking session:', error);
    }
}

checkSession();