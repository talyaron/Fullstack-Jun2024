async function getHello() {
    try {
        //we will call the server
        console.time('fetching hello');
        const response = await fetch('http://localhost:3000/api/get-hello');
        console.log(response);
        const data = await response.json();
        console.log(data);
        console.timeEnd('fetching hello');

        const {message} = data;
        // const message = data.message;
        if(!message) throw new Error('No message found');

        const messageElement = document.querySelector("#message");
        if(!messageElement) throw new Error('No message element found');

        messageElement.innerHTML = message;

    } catch (error) {
        console.error(error);
    }
}

//getHello(); //calling the function


async function handlePost(ev){
    try {
        ev.preventDefault();
        console.log(ev);
        const Title = document.querySelector("#title") as HTMLInputElement;
        const des = document.querySelector("#des") as HTMLInputElement;
        const img = document.querySelector("#imageInput") as HTMLInputElement;

        if(!Title || !des) throw new Error("Element not found");

        const dataTitle = Title.value;
        const dataDes = des.value;
        const dataImg = img.value;
        console.log(dataTitle,dataDes,dataImg);

        const response = await fetch('http://localhost:3000/api/send-posts',{
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({dataTitle,dataDes,dataImg})
        });

        const data = await response.json();
        console.log(data);

        Title.value = "";
        des.value = "";
        img.value = "";
        await getPosts();
    } catch (error) {
        console.error(error);
    }

}

interface Post {
    title : string,
    des : string,
    img: string
}

async function getPosts() {
    try {
        const response = await fetch('http://localhost:3000/api/get-posts');
        console.log(response);
        const data = await response.json();
        console.log(data.existPost.posts);
        const post : Post[] = data.posts;
        console.log(`This is the get array post ${post}`);
        savePostLocalStorage("posts",data.posts);
        
        const postElement = document.querySelector("#posts") as HTMLDivElement;

        if(!postElement) throw new Error("Element not found");
        
        const lastIndex : number = post.length - 1;
        const newestPost : Post = post[lastIndex];
        if(newestPost){
        const postContainer = document.createElement("div");
        postContainer.classList.add("post");
        postContainer.innerHTML = renderPosts(newestPost);
        postElement.appendChild(postContainer);
        }
        else
            throw new Error("Post not found");
            
        
    }
    catch (error) {
        console.error(error);
    }
}

function renderPosts(post : Post){
    return `
                <img src="${post.img}" alt="post Imgae">
                <h1>${post.title}</h1>
                <h4>${post.des}</h4>`
}

function savePostLocalStorage(name : string,posts:Post []){
    localStorage.setItem(name, JSON.stringify(posts));
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
    const response = await fetch('http://localhost:3000/api/get-posts');
    console.log(response);
    const data = await response.json();
    console.log(data);
    const getLocalStorage = getPostLocalStorage("posts");
    console.log(getPostLocalStorage("posts"));
    const postElement = document.querySelector("#posts") as HTMLDivElement;

    getLocalStorage.forEach((post) =>{
        const postContainer = document.createElement("div");
        postContainer.classList.add("post");
        postContainer.innerHTML = renderPosts(post);
        postElement.appendChild(postContainer);
    })
}