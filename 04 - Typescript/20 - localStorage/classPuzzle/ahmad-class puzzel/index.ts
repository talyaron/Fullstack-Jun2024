interface UserDetails {
    name: string;
    email: string;
    image: string;
}

const userForm = document.getElementById('userForm') as HTMLFormElement;
const nameInput = document.getElementById('name') as HTMLInputElement;
const emailInput = document.getElementById('email') as HTMLInputElement;
const imageInput = document.getElementById('image') as HTMLInputElement;

const storedName = document.getElementById('storedName') as HTMLElement;
const storedEmail = document.getElementById('storedEmail') as HTMLElement;
const storedImage = document.getElementById('storedImage') as HTMLImageElement;


function saveUserDetails(user: UserDetails): void {
    localStorage.setItem('userDetails', JSON.stringify(user));
}


function loadUserDetails(): void {
    const savedUserDetails = localStorage.getItem('userDetails');
    if (savedUserDetails) {
        const user: UserDetails = JSON.parse(savedUserDetails);
        storedName.textContent = `Name: ${user.name}`;
        storedEmail.textContent = `Email: ${user.email}`;
        storedImage.src = user.image;
        storedImage.style.display = 'block'; 
    }
}


userForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = nameInput.value;
    const email = emailInput.value;
    const imageFile = imageInput.files?.[0];

    if (imageFile) {
        const reader = new FileReader();


        reader.onloadend = () => {
            const user: UserDetails = {
                name: name,
                email: email,
                image: reader.result as string, 
            };
            saveUserDetails(user);
            loadUserDetails();
        };

        reader.readAsDataURL(imageFile);
    }
});


document.addEventListener('DOMContentLoaded', loadUserDetails);
