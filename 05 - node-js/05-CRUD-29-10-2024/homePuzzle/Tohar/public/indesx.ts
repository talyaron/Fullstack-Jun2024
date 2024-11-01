function renderCreatePost(): void {

    const form = 
        `<form id="uploadForm" onsubmit="handleCreatePost(event)">
            <input type="file" name="image" id="imageUpload" name="imageUpload" accept="image/*">
            <input type="text" name="caption" placeholder="wright a caption...">
            <button type="submit">Post</button>
        </form>`;

        document.querySelector<HTMLDivElement>('#app')!.innerHTML = form;
};


async function handleCreatePost(event:any) {
    try {
            event.preventDefault();
        
            
            type PostElements = {
                image: string,
                caption: string,
            }

            const postCaption = event.target.caption.value
            const postImage = event.target.image.files[0]; 

            if (!postImage) {
                console.error("Please select an image.");
                return;
            }
            const posts: PostElements[] = [];

            posts.push({image: postCaption, caption: postImage});
     
            const response = await fetch('http://localhost:3000/api/post', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({posts})
            });
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.error(error);
            console.error('Here is the error');
        }
};

renderCreatePost();