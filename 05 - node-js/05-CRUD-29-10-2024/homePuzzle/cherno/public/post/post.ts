interface Post
{
    id: string;
    title: string;
    text: string;
    image: string;
}

async function trySubmit(event)
{
    try
    {
        event.preventDefault();

        const data: Post = {id:crypto.randomUUID() ,title: event.target.title.value, text: event.target.text.value, image: event.target.image.value}

        const response = await fetch('http://localhost:3000/api/send-post', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({data: data})
        });
        await response.json();

        window.location.href = "http://localhost:3000/"
    }
    catch(error)
    {
        console.error(error);
    }
}