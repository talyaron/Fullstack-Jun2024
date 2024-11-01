interface Post
{
    id: string;
    title: string;
    text: string;
    image: string;
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
        <a href="post/post.html"> new post </a>
        `
    }
    catch(e)
    {
        console.error(e);
    }
}

async function getPosts() {
    try {
        const response = await fetch('http://localhost:3000/api/get-posts');
        const data = await response.json();

        const posts: Post[] = data.posts;
        if(!posts) throw new Error('couldnt find posts');

        renderPage(posts);

    } catch (error) {
        console.error(error);
    }
}


function formatPost(post: Post): string
{
    return `
    <div class="post" id="${post.id}">
        <h2 class="post__title">${post.title}</h2>
        <img class="post__image" src="${post.image}" alt="${post.title}"> 
        <p class="post__text">${post.text}</p>
    </div>
    `
}

function main()
{
   getPosts(); 
}
main();