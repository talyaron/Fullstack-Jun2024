interface Post
{
    id: string;
    title: string;
    text: string;
    image: File;
}

async function post(event)
{
    try
    {
        event.preventDefault();

        const user = localStorage.getItem('user');
        const data: Post = {id:crypto.randomUUID() ,title: event.target.title.value, text: event.target.text.value, image: event.target.image.files[0]}

        const response = await fetch('http://localhost:3000/api/post/send', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({data: data, user: user})
        });
        await response.json();

        window.location.href = "http://localhost:3000/"
    }
    catch(error)
    {
        console.error(error);
    }
}