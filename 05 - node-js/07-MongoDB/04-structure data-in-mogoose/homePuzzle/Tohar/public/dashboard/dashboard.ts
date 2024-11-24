
async function renderDashboardPage() {

    const userInfo = localStorage.getItem("userData");
    if (!userInfo) throw new Error("User data not found");

    //get user info from DB by email from local storage
    const userData = JSON.parse(userInfo);
    const email = userData.email;
    const user = await getUserFromDb(email);

    const userDetails = `
         <div class="userInfo" id="userInfo">
            <h1>Profile</h1>
            <div class="userDetail">
                <h3>Name</h3>
                <h3 id='info-name'>${user.userName}</h3>
                <button onclick={handleEditUser(${user.email, 'name'})}>Edit Name</button>
            </div>
             <div class="userDetail">
                <h3>Email</h3>
                <h3 id='info-email'>${user.email}</h3>
                <button onclick={handleEditUser(${user.email}, 'email')}>Edit Email</button>
            </div>
             <div class="userDetail">
                <h3>Phone Number: </h3>
                <h3 id='info-phone'>${user.phoneNumber}</h3>
                <button onclick={handleEditUser(${user.email}, ${`phone`})}>Edit Phone</button>
            </div>
            <div id="editImageInput"></div>
        </div>
    `
document.querySelector<HTMLDivElement>('#dashboardPage')!.innerHTML = userDetails;
};

async function getUserFromDb(email: string): Promise<any> {
    try {
        const response = await fetch('http://localhost:3000/api/user/get-user', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email }),
        });
        
        const data = await response.json();

        if (response.ok) {
            return data;
            
        } else {
            alert(data.message);
            return;
        }

    } catch (error) {
        console.error('Error sending post:', error);
        return;
    }
};

function handleEditUser(email: string, info: string) {
    console.log(email, info);
    try {
        const infoElement = document.getElementById(`name`);
        if (!infoElement) throw new Error('User element not found');

        infoElement.contentEditable = 'true';
        infoElement.focus();
        infoElement.addEventListener("blur", (event) => {
            
                const editedInfo = infoElement.innerText;
                infoElement.contentEditable = 'false';

                editUserInfo(email, info, editedInfo);
        });

    } catch (error) {
        console.error('Error:', error);
    }

};

async function editUserInfo(email: string, info: string, editedInfo: string) {

    try {
        const response = await fetch('http://localhost:3000/api/user/edit-user', {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, info, editedInfo }),
        });
        
        const data = await response.json();

        if (response.ok) {
            console.log(data);
        } else {
            alert(data.message);
        }

    } catch (error) {
        console.error('Error sending user:', error);
    }
}

renderDashboardPage(); 