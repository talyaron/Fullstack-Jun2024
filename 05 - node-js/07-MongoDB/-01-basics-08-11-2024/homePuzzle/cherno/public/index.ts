interface Post
{
    _id: string;
    title: string;
    text: string;
    image: File;
}

function renderPage(posts: Post[]): void 
{
    try
    {
        const appElement = document.querySelector<HTMLElement>("#app");
        if (!appElement) throw new Error("app element not found");

        appElement.innerHTML = `
        <div class="posts-container">
            ${posts.map(formatPost).join("")}
        </div>
        <button onclick="logout()"> logout </button>
        <a href="post/post.html"> new post </a>
        `
    }
    catch(e)
    {
        console.error("renderPage",e);
    }
}

function logout()
{
    localStorage.removeItem("user");
    window.location.href = "http://localhost:3000/login/login.html";
}

async function getPosts(userId: string | null) {
    try {
        const response = await fetch(`http://localhost:3000/api/post/get-user?user=${userId}`)

        const data = await response.json();

        const posts: Post[] = data.posts;
        if(!posts) throw new Error('couldnt find posts');

        renderPage(posts);

    } catch (error) {
        console.error("getPosts", error);
    }
}


function formatPost(post: Post): string
{
    return `
    <div class="post" id="${post._id}">
        <h2 class="post__title">${post.title}</h2>
        <img class="post__image" src="${post.image}" alt="${post.title}"> 
        <p class="post__text">${post.text}</p>
        <div class="post__edit">
            <button class="post__edit__title" onclick="editTitle('${post._id}')"> Edit Title </button>
            <button class="post__edit__text" onclick="editText('${post._id}')"> Edit Text </button>
            <button class="post__edit__image" onclick="editImage('${post._id}')"> Edit Image </button>
            <button class="post__edit__delete" onclick="deletePost('${post._id}')"> Delete </button>
        </div>
    </div>
    `
}

function editTitle(postId: string)
{
    try
    {
        const titleElement = document.getElementById(postId)?.querySelector<HTMLElement>(".post__title");
        if (!titleElement) throw new Error("title element not found");
        titleElement.contentEditable = "true";
        titleElement.focus();
        titleElement.addEventListener("blur", (event) => {
            const newTitle = titleElement.innerText;
            titleElement.contentEditable = "false";

            editPost(postId, "title", newTitle);
        });
    }
    catch(e)
    {
        console.error("editTitle: ", e);
    }
}

function editText(postId: string)
{
    try
    {
        const textElement = document.getElementById(postId)?.querySelector<HTMLElement>(".post__text");
        if (!textElement) throw new Error("text element not found");
        textElement.contentEditable = "true";
        textElement.focus();
        textElement.addEventListener("blur", (event) => {
            const newText = textElement.innerText;
            textElement.contentEditable = "false";

            editPost(postId, "text", newText);
        });
    }
    catch(e)
    {
        console.error("editText: ", e);
    }
}

function editImage(postId: string)
{
    try
    {
        const textElement = document.getElementById(postId)?.querySelector<HTMLElement>(".post__image");
        if (!textElement) throw new Error("image element not found");
        textElement.contentEditable = "true";
        textElement.focus();
        textElement.addEventListener("blur", (event) => {
            const newText = textElement.innerText;
            textElement.contentEditable = "false";

            editPost(postId, "text", newText);
        });
    }
    catch(e)
    {
        console.error("editImage: ", e);
    }
}

async function editPost(postId: string, type: string, content: string)
{
    try
    {
        const user = localStorage.getItem("user");
        const response = await fetch(`http://localhost:3000/api/post/edit`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({postId: postId, type: type, content: content, user: user})
        });
        const data = await response.json();

        console.log("post edited successfully");
        getPosts(user);
    }
    catch(e)
    {
        console.error("editPost: ", e);
    }
}

async function deletePost(postId: string)
{
    try
    {
        const user = localStorage.getItem("user");
        const response = await fetch(`http://localhost:3000/api/post/delete`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({id: postId, user: user})
        });
        const data = await response.json();

        console.log("post deleted successfully");
        getPosts(user);
    }
    catch(e)
    {
        console.error("deletePost: ", e);
    }
}

function main()
{
    const user: string | null = localStorage.getItem('user');
    if(!user) window.location.href = `http://localhost:3000/login/login.html`;
    getPosts(user); 
}
main();