interface Post {
    title: string;
    text: string;
    imageURL: string;
    _id: string;
    editTitle?: boolean;
    editText?: boolean;
}

interface Client{
    id: string;
    name: string;
    phone: string;
    email: string;
    password: string;
}

let clients : Client[] =[]; 

function welecome_show(){
    try{
    const welcomeElement = document.getElementById("welcome");
    if (!welcomeElement) throw new Error("Welcome element not found");

    const userLoggedIn = localStorage.getItem('username_login_in');
        if (userLoggedIn)  
        {
        // move all the string with all the information to new location
        const jsonString = userLoggedIn;
        // convert from string to normal object
        const user = JSON.parse(jsonString);
        console.log(user.name)

        welcomeElement.innerHTML = `Hello ${user.name}, Wellcome To Instegram`;

        clients.push({
            id: user.id,
            name: user.name,
            phone: user.phone,
            email: user.email,
            password: user.password
        });
        }
    }
    catch(error){
        console.error('Error in welcome_show:', error);
    }
}

async function handleSendPost(event: Event) {
    event.preventDefault();
    const form = event.target as HTMLFormElement;

    const title = (form.elements.namedItem('title') as HTMLInputElement).value;
    const text = (form.elements.namedItem('text') as HTMLInputElement).value;
    const imageURL = (form.elements.namedItem('imageURL') as HTMLInputElement).value;

    try {
        console.log('Sending post:', { title, text, imageURL });  // Debug log

        const response = await fetch('http://localhost:3000/api/posts/add-post', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title, text, imageURL }),
        });

        if (!response.ok) throw new Error('Failed to add post');

        console.log('Post added successfully!');

        form.reset(); // מוחק כל השדות שהכנסו בטופס
        await fetchPosts();

    } catch (error) {
        console.error('Error sending post:', error);
    }
}

async function fetchPosts() {
    try {

        const response = await fetch('http://localhost:3000/api/posts/get-post');
        if (!response.ok) throw new Error('Failed to get');

        const data = await response.json();

        const feedElement = document.getElementById("feed");
        if (!feedElement) throw new Error("Feed element not found");

        renderPosts(data.posts);
    } catch (error) {
        console.error("Error fetching posts:", error);
    }
}

fetchPosts();
welecome_show();


function savePostsToLocalStorage(posts: any[]) {
    localStorage.setItem('posts', JSON.stringify(posts));
}

function loadPostsFromLocalStorage(): any[] {
    const posts = localStorage.getItem('posts');
    return posts ? JSON.parse(posts) : [];
}

function renderPosts(posts: Post[]) {

    const feedElement = document.getElementById('feed');
    if (!feedElement) throw new Error('Feed element not found');


    const htmlPosts = posts.map((post) => {

        return renderPost(post);

    }).filter((post) => post !== null).join('');

    feedElement.innerHTML = htmlPosts;
}

function renderPost(post: Post) {
    try {
        const html = `
        <div class="post">
            <h3 id="title-${post._id}">${post.title}</h3>
            <img src="${post.imageURL}" id="img-${post._id}" alt="Image" />
            <p id="text-${post._id}">${post.text}</p>
            <button onclick="handleEditTitle('${post._id}')">Edit Title</button>
            <button onclick="handleEditImage('${post._id}')">Edit Image</button>
            <button onclick="handleEditText('${post._id}')">Edit Text</button>
            <button onclick="handleDeletePost('${post._id}')">Delete Post</button>
        </div>
        `;
        return html;
    } catch (error) {
        console.error('Error:', error);

    }
}

async function handleEditTitle(id: string) {
    try {
        console.log("Edit title:", id);
        const titleElement = document.getElementById(`title-${id}`);
        if (!titleElement) throw new Error('Title element not found');
        titleElement.contentEditable = 'true';
        titleElement.focus();
        titleElement.addEventListener("blur", (event) => {
            
                const title = titleElement.innerText;
                console.log("New title:", title);
                titleElement.contentEditable = 'false';

                //update the title in the server
                
                const response =  fetch(`http://localhost:3000/api/posts/editTitle-post/${id}`, {
                    method: 'PATCH',
                    headers: { 'Content-Type': 'application/json'},
                    body: JSON.stringify({ title }),
                });
                if (!response) throw new Error('Failed to update title');

        });

    } catch (error) {
        console.error('Error:', error);
    }

}

async function handleEditText(id: string) {

    try {
        console.log("Edit text:", id);
        const textElement = document.getElementById(`text-${id}`);
        if (!textElement) throw new Error('Text element not found');
        textElement.contentEditable = 'true';
        textElement.focus();
        textElement.addEventListener("blur",async (event) => {
            
                const text = textElement.innerText;
                console.log("New text:", text);
                textElement.contentEditable = 'false';
                
                //update the text in the server
                try{
                
                const response =await fetch(`http://localhost:3000/api/posts/editText-post/${id}`, {
                    method: 'PATCH',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({text }),
                });
                if (!response) throw new Error('Failed to update text');
            } catch
            (error) {
                console.error('Error:', error);
            }
    });
}
    catch (error) {
        console.error('Error:', error);
    }
}

async function handleDeletePost(id: string)
{
    try {
        
        console.log("Delete post:", id);
        const response =await fetch(`http://localhost:3000/api/posts/delete-post/${id}`, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
          
        });
        const data = await response.json();
        fetchPosts();
}
    catch (error) {
        console.error('Error:', error);
    }
}

async function handleEditImage(id: string) {
    try {
        console.log("Edit image:", id);

        const imageElement = document.getElementById(`img-${id}`) as HTMLImageElement;
        if (!imageElement) throw new Error('Image element not found');

        const fileInput = document.createElement('input');
        fileInput.type = 'file';
        fileInput.accept = 'image/*';

        // טיפול בשינוי הקובץ שנבחר
        fileInput.onchange = async (event) => {
            const file = fileInput.files ? fileInput.files[0] : null;
            if (!file) {
                console.error('No file selected');
                return;
            }

            // יצירת FormData לשלוח בקשה עם התמונה
            const formData = new FormData();
            formData.append('image', file);

            try {
                // שליחה לשרת (החלק הזה מותאם לשרת שלך)
                const response = await fetch('/upload-image-endpoint', {
                    method: 'POST',
                    body: formData,
                });

            
                if (!response.ok) {
                    throw new Error('Failed to upload image');
                }

                const data = await response.json();
                console.log('Image uploaded successfully:', data);

                // כאן אתה יכול לעדכן את התמונה החדשה ב-UI
                imageElement.src = data.imageUrl; // נניח ששרת מחזיר URL חדש לתמונה
            } catch (error) {
                console.error('Error uploading image:', error);
            }
        };

        // הצגת דיאלוג בחירת קובץ
        fileInput.click();
    } catch (error) {
        console.error('Error:', error);
    }
}

async function showAllPosts()
{
    try {
        const response = await fetch('http://localhost:3000/api/posts/getAllPosts');
        if (!response.ok)
            throw new Error('Failed to get posts');

        const data = await response.json();
        const postsContainer = document.getElementById('feed');
        if (!postsContainer)
            throw new Error('Posts container not found');
        if (!data.posts || data.posts.length === 0)
        {
            postsContainer.innerHTML = 'No posts found.';
            return;

        }

        renderPosts(data.posts);

    } catch (error) {
        // אם קרתה שגיאה, מדפיסים אותה בקונסול
        console.error('Error:', error);
    }
}

function logoff(){
    try{
        window.location.href = "http://localhost:3000/";
    }
    catch(error){
        console.error(error);
    }
}