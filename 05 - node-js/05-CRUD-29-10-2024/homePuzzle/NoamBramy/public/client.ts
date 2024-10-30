async function getPosts() {
    try {
        const response = await fetch('/api/get-posts');        
        const posts = await response.json();
        const postsContainer = document.querySelector("#posts");
        if (!postsContainer) throw new Error('No posts container found');
        postsContainer.innerHTML = '';
        posts.forEach(post => {
            const postElement = document.createElement("div");
            postElement.innerHTML = `
                <h2>${post.title}</h2>
                <p>${post.text}</p>
                <img src="${post.image}" alt="${post.title}" />
            `;
            postElement.classList.add("post")
            postsContainer.appendChild(postElement);
        });

    } catch (error) {
        console.error(error);
    }
}

getPosts();



async function handleSendForm(event) {
    try {
        event.preventDefault();

        const title = event.target.title.value;
        const text = event.target.text.value;
        const image = event.target.image.value;

        const response = await fetch('http://localhost:3000/api/send-form', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ title, text, image })
        });

        if (!response.ok) throw new Error('Failed to send post data');

        const data = await response.json();
        console.log(data);

        await getPosts();

    } catch (error) {
        console.error(error);
    }
}
