

const form = document.getElementById('registration-form')
if (!form) {
    throw new Error('Could not find registration form');
}

form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const formData = new FormData(form as HTMLFormElement);
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    const response = await fetch('/api/users/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name,email, password }),
    });

    const result = await response.json();
    console.log(result);
});
