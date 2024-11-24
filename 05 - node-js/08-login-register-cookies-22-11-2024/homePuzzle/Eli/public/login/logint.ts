async function handleLogin(ev:any): Promise<void> {
    ev.preventDefault();
    try {
       
        const formData = new FormData(ev.target as HTMLFormElement);
        const password: string = formData.get('password') as string;
        const email: string = formData.get('email') as string;

        const result = await fetch('http://localhost:3000/api/clients/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        });
        if(result.status === 200){
            window.location.href = '../store/store.html';
        }

      
    } catch (error) {
        console.error('An error occurred during login:', error);
       
    }
}