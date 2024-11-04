interface Post {
    caption: string;
    imageURL: string;
    id: string;
    editTitle?: boolean;
    editText?: boolean;
};

class User {
    userName: string;
    id : string;
    email: string;
    password: string;
    phoneNumber?: string;

    constructor (userName: string, email: string, password: string, 
        phoneNumber: string, id?:string, posts?: Post[]) {
        id ? this.id = id : this.id = crypto.randomUUID();
        this.userName = userName;
        this.email = email;
        this.password = password;
        this.phoneNumber = phoneNumber;
    };

};

function renderLoginPage() {

    const loginForm = `
     <div class="container">
            <h1>Login</h1>
            <form id="loginForm">
                <input type="email" class="input" id="email" name="email" required placeholder="Email">
                <input type="password" class="input" id="password" name="password" required placeholder="Password">
                <a href="#forgotPassword" class="forgotPsw">Forgot Password?</a>                
                <button class="loginBtn" id="loginButton" type="submit">Login</button>
                <a class="signupBtn" id="button" onclick="navigataToSignup()">SIGN UP</a>
            </form>
            
        </div>
    `

    const loginPageElement = document.querySelector<HTMLDivElement>('#loginPage');
    if (!loginPageElement) throw new Error('Login page not found');
    
    loginPageElement.innerHTML = loginForm;
    handleFormLogin();
};


async function handleFormLogin() {
    // Select the form element
    const form = document.getElementById('loginForm') as HTMLFormElement;
    console.log('form', form);
    const response = await fetch('http://localhost:3000/api/get-posts');
    const data = await response.json();

    
    if (form) {
        form.addEventListener('submit', (event: Event) => {
            event.preventDefault(); 
            
            const formData = new FormData(form);
            const email = formData.get('email') as string;
            const password = formData.get('password') as string;
            

            
    
            console.log('users', data.users);
            //Validation with localStorage
            // if (localStorage.getItem('email') !== email) {
            //     alert('Email does not exist');
            // } else if (localStorage.getItem('password') !== password) {
            //     alert('Password not valid');
            // } else {
            // console.log(email + ', ' + password);
            //     const newUrl = '?loginBtn=loginBtn';
            //     window.location.href = newUrl; 
            // }


        });
    } else {
        console.error('Login form not found in the DOM');
    }
};

function navigataToSignup() {
    console.log('in navigata to sign');
    window.location.href = "./signup/signup.html";
}

renderLoginPage();





function renderMainPage() {

    const html = `
    <h1>New Post</h1>
    <form onsubmit="handleCreatePost(event)">
        <input type="text" name="caption" placeholder="Write a caption..." required>
        <input type="url" name="imageURL" placeholder="Enter image URL" required>
        <button type="submit">Post</button>
    </form>
    `
    // <input type="file" name="image" id="imageUpload" name="imageUpload" accept="image/*">
    document.querySelector<HTMLDivElement>('#main')!.innerHTML = html;
};

renderMainPage();

async function handleCreatePost(event: Event) {
    event.preventDefault();
    const form = event.target as HTMLFormElement;

    const caption = (form.elements.namedItem('caption') as HTMLInputElement).value;
    const imageURL = (form.elements.namedItem('imageURL') as HTMLInputElement).value;
    
    
    try {
        console.log('Sending post:', { caption, imageURL });

        const response = await fetch('http://localhost:3000/api/add-post', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ caption, imageURL }),
        });

        if (!response.ok) throw new Error('Failed to add post');

        console.log('Post added successfully!');

        form.reset();
        fetchPosts();

    } catch (error) {
        console.error('Error sending post:', error);
    }
}

async function fetchPosts() {
    try {

        const response = await fetch('http://localhost:3000/api/get-posts');
        const data = await response.json();

        // const feedElement = document.getElementById("feed");
        // if (!feedElement) throw new Error("Feed element not found");

        renderPosts(data.posts);
    } catch (error) {
        console.error("Error fetching posts:", error);
    }
};

function renderPosts(posts: Post[]) {

    const feedElement = document.getElementById('feed');
    if (!feedElement) throw new Error('Feed element not found');
    
    const htmlPosts = posts.map((post) => {
    return renderPost(post);
    }).filter((post) => post !== null).join('');

    feedElement.innerHTML = htmlPosts;
};

function renderPost(post: Post) {
    try {
        // changeFileToImage();

        const html = `
        <div class="post">
            <img src="${post.imageURL}" alt="Image" />
            <h3 id="caption-${post.id}">${post.caption}</h3>
            <button onclick="handleEditCaption('${post.id}')" >Edit</button>
            <button onclick="handlDeletePost('${post.id}')">Delete</button>
            <button onclick="handlEditImage">Change Image</button>
            <p>${post.caption}</p>
        </div>
        `;

        
        return html;
    } catch (error) {
        console.error('Error:', error);
    }
}

function handleEditCaption(id: string) {
    try {
        const captionElement = document.getElementById(`caption-${id}`);
        if (!captionElement) throw new Error('Caption element not found');
        captionElement.contentEditable = 'true';
        captionElement.focus();
        captionElement.addEventListener("blur", (event) => {
            
                const caption = captionElement.innerText;
                captionElement.contentEditable = 'false';

                fetchEditedTitle(id, caption);
        });

    } catch (error) {
        console.error('Error:', error);
    }

};

async function fetchEditedTitle(id: string, caption:string) {
    
    const response = await fetch('http://localhost:3000/api/update-post', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({id, caption}),
    });

    if (!response.ok) {
        console.error("Failed to update title:", response.statusText);
        return;
    }

    const data = await response.json();
    console.log(data, 'success');
};


async function handlDeletePost(id: string) {
    

    try {
        const response = await fetch('http://localhost:3000/api/delete-post', {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({id}),
            
        });
        console.log('in delete');
        if (!response.ok) {
            console.error("Failed to update title:", response.statusText);
            return;
        }
        const data = await response.json();
        console.log(data, 'success');
        fetchPosts();
    } catch (error) {
        console.error('Error:', error);
    }
};
