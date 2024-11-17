
async function handleSendUser(event: Event) {
    try {
        event.preventDefault()
        const form = event.target as HTMLFormElement
        const formData = new FormData(form)
        const name = formData.get('name') as string;
        const email = formData.get('email') as string;
        const password = formData.get('password') as string;
        const phone = formData.get('phone') as string;
        const response = await fetch('/api/users/send-user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, email, password, phone})
        });
        console.log(name, email, password, phone)

        if (!response.ok) throw new Error('Failed to create User data');
    } catch (error) {
        console.error(error);
    }
}