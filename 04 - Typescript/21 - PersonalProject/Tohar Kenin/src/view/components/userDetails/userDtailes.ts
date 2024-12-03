import './userDetails.scss';
export function userDtails(): string {
    const userData:any = localStorage.getItem('User');

    const userObject = JSON.parse(userData);
    const userName = userObject.userName;  
    const email = userObject.email;
    const phoneNumber = userObject.phoneNumber;
    console.log(userName, email, phoneNumber);
    
    return `
            <div class="userDtails" id="userDtails">
                <h1 class="userData">Name: ${userName}</h1>
                <h1 class="userData">Email: ${email}</h1>
                <h1 class="userData">Phone: ${phoneNumber}</h1
                <button class="profileButton" id="profileButton">My Profile</button>
            </div>    
        `
}