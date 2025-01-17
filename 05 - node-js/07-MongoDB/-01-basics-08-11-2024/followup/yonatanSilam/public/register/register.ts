

const form = document.getElementById('registration-form')
if (!form) {
    throw new Error('Could not find registration form');
}

form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const formData = new FormData(form as HTMLFormElement);
    const username = formData.get('username') as string;
    const password = formData.get('password') as string;

    const response = await fetch('/api/users/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
    });

    const result = await response.json();
    console.log(result);
});
