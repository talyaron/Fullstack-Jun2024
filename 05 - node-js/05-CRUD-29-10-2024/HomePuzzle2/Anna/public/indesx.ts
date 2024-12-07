interface Post {
    title : string,
    des : string,
    img: string
    id : string
}

async function handlePost(event){
    try {
        event.preventDefault();
        console.log(event);
        const Title = document.querySelector("#title") as HTMLInputElement;
        const des = document.querySelector("#des") as HTMLInputElement;
        const img = document.querySelector("#imageInput") as HTMLInputElement;

        if(!Title || !des) throw new Error("Element not found");

        const dataTitle = Title.value;
        const dataDes = des.value;
        const dataImg = img.value;
        const id = `id-${crypto.randomUUID()}`
        const response = await fetch('http://localhost:3000/api/send-posts',{
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({dataTitle,dataDes,dataImg,id})
        });
        //console.log(dataTitle,dataDes,dataImg);
        const data = await response.json();
        //console.log(data);
        
        Title.value = "";
        des.value = "";
        img.value = "";

        await getPosts();
    } catch (error) {
        console.error(error);
    }
}

async function getPosts() {
    try {
        const response = await fetch('http://localhost:3000/api/get-posts');
        console.log(response);
        const data = await response.json();
        console.log(data.existPost);
        console.log(data.posts)
        const UserPosts : Post [] = [];
        //savelocalStorage("UserPosts",data.posts);
        const allPosts = getPostLocalStorage("UserPosts");
        renderPosts(data.posts);
    } catch (error) {
        console.log(error);
    }
}
getPosts();
function savelocalStorage(name : string,posts:Post []){
    localStorage.clear();
    localStorage.setItem(name, JSON.stringify(posts));
}

function renderPosts(posts : Post []){
    try {
        const postContainer = document.getElementById('posts') as HTMLDivElement;
        if (!postContainer) throw new Error('Feed element not found');
        const htmlPosts = posts.map((post) =>
            renderPost(post)).join('');

        postContainer.innerHTML = htmlPosts;
    } catch (error) {
        console.error(error);
    }
}



function renderPost(post : Post){
    try {
        const html =  `
        <div class="post">
            <h2 id="title-${post.id}">${post.title}</h2>
            <p id="p-${post.id}">${post.des}</p>
            <button onclick="handleEditTitle('${post.id}')">EDIT TITLE</button>
            <button onclick="handleEditText('${post.id}')">EDIT TEXT</button>
            <button onclick="handleDeletePost('${post.id}')">DELETE</button>
            <img src="${post.img}" alt="${post.title}" />
        </div>`;
        return html;
    } catch (error) {
        console.log(error);
        return '';
    }
}


function getPostLocalStorage(name : string){
    const localPost = localStorage.getItem(name);
    let localPosts : Post [] = [];
    if(localPost){
        localPosts = JSON.parse(localPost) as Post[];
    }
    return localPosts;
}

async function handleAllPosts() {
    const getLocalStorage = getPostLocalStorage("UserPosts");
    console.log(getLocalStorage);
    renderPosts(getLocalStorage);
}

async function handleEditTitle(id : string) {
    try {
        console.log('Edit title id:',id);
        const titleElement = document.querySelector(`#title-${id}`) as HTMLHeadElement;
        if(!titleElement) throw new Error("Title element not found");
        titleElement.contentEditable = `true`;
        titleElement.focus();
        titleElement.addEventListener("blur", async () => {
            const title = titleElement.innerText.trim();
            console.log("New Title:", title);
            titleElement.contentEditable = 'false';
            const allPosts = getPostLocalStorage("UserPosts");
            const response = await fetch('http://localhost:3000/api/edit-title', {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ id, title, allPosts }),
            });
            const data = await response.json();
            console.log("Server Response:", data);
        });
    } catch (error) {
        console.error(error);
    }
}

async function handleEditText(id : string){
    try {
        const textElement = document.querySelector(`#p-${id}`) as HTMLParagraphElement;
        if(!textElement) throw new Error("Text element not found");
        textElement.contentEditable = `true`;
        textElement.focus();
        textElement.addEventListener("blur", async () => {
            const des = textElement.innerText.trim();
            console.log("New Description:", des);
            textElement.contentEditable = 'false';
            const response = await fetch('http://localhost:3000/api/edit-text', {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ id, des }),
            });
            const data = await response.json();
            console.log("Server Response:", data);
        });
    } catch (error) {
        
    }
}

async function handleDeletePost(id: string) {
    try {
        if(!id) throw new Error("Post not found");
        const response = await fetch('http://localhost:3000/api/delete-posts',{
            method: "DELETE",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({id}),
        })

        getPosts();
    } catch (error) {
        
    }
}