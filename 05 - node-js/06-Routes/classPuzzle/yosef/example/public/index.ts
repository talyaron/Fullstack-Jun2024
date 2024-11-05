function sendPost (event: Event){
    event.preventDefault();
    const form = event.target as HTMLFormElement;

    const username = form.elements.namedItem('username') as HTMLInputElement;
    const email = form.elements.namedItem('email') as HTMLInputElement;
    
}