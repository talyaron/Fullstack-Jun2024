//model
interface Post {
    imageUrl: string;
    text: string;
}



//first page- form upload post and see posts btn
function renderForm() {
    try {
        const app = document.querySelector("#app");
        if (!app) throw new Error("not find app");

        app.innerHTML = ` 
    <section class="container">
        <form onsubmit="handleSubmit(event)">
        <input type="text" name="imageUrl" placeholder="add imageUrl">
        <input type="text" name="text" placeholder="add text">
        <button class="btn btn-primary" type="submit">Send</button>
    </form>
    <button class="btn btn-primary" onclick="renderAllPost()"> see all post</button>
    </section>`

            ;
    } catch (error) {
        console.error(error)
    }
}
//add post
async function handleSubmit(ev) {
    ev.preventDefault();
    // const getPosts = await fetch('http://localhost:3000/api/get-All-posts');
    // const data = await getPosts.json();
    // const message = data.message;
    //why??

    const form = ev.target as HTMLFormElement;
    const formData = new FormData(form);
    const imageUrl = String(formData.get("imageUrl"));
    const text = String(formData.get("text"));
    form.reset()
    // message.push(newPost);

    //Methods: GET, POST, (PUT/PATCH), DELETE
    
    //Post data to server
    // PUT: Update a full object
    // method: 'PUT',
    // headers: {
    //     'Content-Type': 'application/json'
    // },
    // body: JSON.stringify({ imageUrl, text })

    // PATCH: Update a part of a object
      // method: 'PATCH',
    // headers: {
    //     'Content-Type': 'application/json'
    // },
    // body: JSON.stringify({ imageUrl, text })

    // DELETE: Delete an object
    //   // method: 'DELETE',
    // headers: {
    //     'Content-Type': 'application/json'
    // },
    // body: JSON.stringify({ imageUrl, text })
    try {
        const response = await fetch('http://localhost:3000/api/send-post', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ imageUrl, text }) //data to send (to string format) )
        });
        if (!response.ok) throw new Error("Failed to add post");

        const data = await response.json();
        console.log("Post added:", data.message);
    } catch (error) {
        console.error(error);
    }
}



//second page btn to upload post

async function renderAllPost() {
    try {
        const response = await fetch('/api/get-posts');
        if (!response.ok) throw new Error("Failed to fetch posts");

        const data = await response.json();
        displayPosts(data.allPosts);
    } catch (error) {
        console.error("Error:", error);
    }
}
// Button click to fetch and display all posts
// function displayPosts(posts: Post[]) {
//     const postsContainer = document.getElementById('app') as HTMLDivElement;
//     postsContainer.innerHTML = '    <button class="btn btn-primary" onclick="renderForm()"> back</button>'; // Clear previous posts

//     posts.forEach(post => {
//         const postDiv = document.createElement('div');
//         postDiv.classList.add('post');

//         const image = document.createElement('img');
//         image.src = post.imageUrl;
//         image.alt = "Post Image";
//         image.style.width = "100px"; // Set size for better display

//         const text = document.createElement('p');
//         text.textContent = post.text;

//         postDiv.appendChild(image);
//         postDiv.appendChild(text);
//         postsContainer.appendChild(postDiv);
//     });
// }
function displayPosts(posts: Post[]) {
    const postsContainer = document.getElementById('app') as HTMLDivElement;
    postsContainer.innerHTML = '    <button class="btn btn-primary" onclick="renderForm()"> back</button>'; // Clear previous posts
    postsContainer.classList.add('post-grid'); // Add grid layout for posts

    posts.forEach(post => {
        const postDiv = document.createElement('div');
        postDiv.classList.add('post-card', 'card'); // Use Bootstrap card class

        const image = document.createElement('img');
        image.src = post.imageUrl;
        image.alt = "Post Image";
        image.classList.add('card-img-top'); // Bootstrap class for image

        const cardBody = document.createElement('div');
        cardBody.classList.add('card-body');

        const text = document.createElement('p');
        text.classList.add('card-text'); // Bootstrap class for text
        text.textContent = post.text;

        cardBody.appendChild(text);
        postDiv.appendChild(image);
        postDiv.appendChild(cardBody);
        postsContainer.appendChild(postDiv);
    });
}