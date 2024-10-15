//Level1:

const counterElement = document.getElementById("counter")!;
const button = document.getElementById("increment-btn")!;

let counter = Number(localStorage.getItem("counter")) || 0;
counterElement.textContent = counter.toString();

button.addEventListener("click", () => {
    counter++;
    counterElement.textContent = counter.toString();
    localStorage.setItem("counter", counter.toString());
});

//Level2:
interface UserDetails {
    name: string;
    email: string;
    image: string;
}

const form = document.getElementById("user-form") as HTMLFormElement;
const nameInput = document.getElementById("name") as HTMLInputElement;
const emailInput = document.getElementById("email") as HTMLInputElement;
const imageInput = document.getElementById("image") as HTMLInputElement;

const userNameElement = document.getElementById("user-name") as HTMLElement;
const userEmailElement = document.getElementById("user-email") as HTMLElement;
const userImageElement = document.getElementById("user-image") as HTMLImageElement;


const loadUserDetails = () => {
    const storedDetails = localStorage.getItem("userDetails");
    if (storedDetails) {
        const userDetails: UserDetails = JSON.parse(storedDetails);
        renderUserDetails(userDetails);
    }
};


const renderUserDetails = (userDetails: UserDetails) => {
    userNameElement.textContent = `Name: ${userDetails.name}`;
    userEmailElement.textContent = `Email: ${userDetails.email}`;
    userImageElement.src = userDetails.image;
};


const saveUserDetails = (userDetails: UserDetails) => {
    localStorage.setItem("userDetails", JSON.stringify(userDetails));
};


form.addEventListener("submit", (e: Event) => {
    e.preventDefault();
    const reader = new FileReader();
    const file = imageInput.files?.[0];

    if (file) {
        reader.readAsDataURL(file);
        reader.onload = () => {
            const userDetails: UserDetails = {
                name: nameInput.value,
                email: emailInput.value,
                image: reader.result as string,
            };
            saveUserDetails(userDetails);
            renderUserDetails(userDetails);
        };
    }
});


loadUserDetails();
