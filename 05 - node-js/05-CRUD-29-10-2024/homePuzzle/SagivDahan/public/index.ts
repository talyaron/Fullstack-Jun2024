//function that send the post information to the server
async function sendPostToServer(){
    //variable of the form title
    const title = (document.getElementById("form__title") as HTMLInputElement).value;
    // variable of the form description
    const description = (document.getElementById("form__description") as HTMLInputElement).value;
    // variable of the form username
    const username = (document.getElementById("form__username") as HTMLInputElement).value;
    // variable of the form image url
    const imgUrl = (document.getElementById("form__imgurl") as HTMLInputElement).value;
    // variable of the form id
    const id = crypto.randomUUID();
    // variable of the post
    const post = {id, title, description, username, imgUrl};
    try {
        //request route to:
        const response = await fetch("/api/add-post", {
            //request method
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            //convert the data to json
            body: JSON.stringify({ post }),
        })
        const data = await response.json();
        if (response.ok){
            savePostToLocalStorage(post);
            renderPost(post);
            console.log("Post uploaded successfully:", data.message);
        } else {
            console.error("Error:", data.message);
        }

    } catch (error) {
        console.error(("Failed to send post to the server."), error)
    }
}

function savePostToLocalStorage(post: any) {
    const posts = JSON.parse(localStorage.getItem("posts") || "[]");
    posts.push(post);
    localStorage.setItem("posts", JSON.stringify(posts));
}

function renderPost(post: any){
    const postContainer = document.getElementById("posts");
    const postElement = document.createElement("div");
    postElement.className = "post";
    postElement.innerHTML = `<h2>${post.title}</h2>, <p>${post.description}</p>, <p>posted by: ${post.username}</p>, <img src="${post.imgUrl}" alt="Post Image"> `;
    postContainer?.appendChild(postElement);
}
//add event listener to buttun "send"
document.getElementById("send")?.addEventListener("click", sendPostToServer);


async function loadPosts() {
    try {
        const response = await fetch("/api/get-posts");
        const data = await response.json();
        
        data.posts.forEach((post: any) => {
            renderPost(post);
            savePostToLocalStorage(post);
        });
    } catch (error) {
        console.error("Failed to load posts:", error);
    }
}

// קריאת הפונקציה עם עליית הדף
window.addEventListener("load", loadPosts);