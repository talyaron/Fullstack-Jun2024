interface Post {
    title : string,
    des : string,
    img: string
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

        const response = await fetch('http://localhost:3000/api/send-posts',{
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({dataTitle,dataDes,dataImg})
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
        savelocalStorage("UserPosts",data.posts);
        const allPosts = getPostLocalStorage("UserPosts");
        renderPosts(allPosts);
    } catch (error) {
        console.log(error);
    }
}


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
            <h2>${post.title}</h2>
            <p>${post.des}</p>
            <button>EDIT</button>
            <button>DELETE</button>
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