const namesAndPhones: { name: string, phone: string }[] = [];


function handleStart():void {
    try{
const nameInput = document.getElementById('name-list') as HTMLInputElement;
const phoneInput = document.getElementById('phone-list') as HTMLInputElement;

if(!nameInput || !phoneInput) throw new Error('Input field not found');

nameInput.addEventListener("keyup", handleInput) ;
phoneInput.addEventListener("keyup", handleInput) ;

    


    }catch(e){
        console.error(e);
    
}
}


function handleInput(event:any): void {
    if (event.key === 'Enter') {
        const nameInput = document.getElementById('name-list') as HTMLInputElement;
        const phoneInput = document.getElementById('phone-list') as HTMLInputElement;

        const newName = nameInput.value;
        const newPhone = phoneInput.value;

        if (newName && newPhone) {
            namesAndPhones.push({ name: newName, phone: newPhone });
            renderUsers();
        } 
    }
}


function renderUsers(): void {
    try {
        const userList = document.getElementById('user') as HTMLUListElement;
        if (!userList) throw new Error('user not found');

        userList.innerHTML = namesAndPhones.map(user => `<li>Hello ${user.name}, your phone is ${user.phone}</li>`).join('');
    } catch (e) {
        console.error(e);
    }
}