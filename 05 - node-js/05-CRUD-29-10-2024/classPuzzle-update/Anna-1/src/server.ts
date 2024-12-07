import express from 'express';
import bodyParser from 'body-parser';
import { error } from 'console';

const app = express();
const port = process.env.PORT || 3000;

const posts: Array<{ title: string, text: string, imageURL: string, id:string }> = [];

app.use(bodyParser.json());
app.use(express.static('public'));

app.post('/api/add-post', (req: any, res: any) => {
    const { title, text, imageURL } = req.body;
    
    console.log('Received POST request:', req.body);  

    if (!title || !text || !imageURL) {
        return res.status(400).json({ error: "All fields (title, text, imageURL) are required" });
    }

    const id = crypto.randomUUID();
    posts.push({id, title, text, imageURL });

    console.log('Current posts:', posts); 

    res.status(201).json({ message: "Post added successfully" });
});

app.get('/api/get-posts', (req, res) => {
    res.json({ posts });
});

app.patch('/api/edit-posts',(req:any,res:any)=>{
    try {
        const {id,title} = req.body;
        if(!id) throw new Error("id not found");
        if(!title) throw new Error("title not found");

        const post = posts.find((post)=> post.id === id);
        if(!post){
            throw new Error("post not found");
        }
        post.title = title;
        console.log(posts);
        res.send({message:"post updated",posts})
    } catch (error) {
        console.error(error);
    }
})

app.delete('/api/delete-posts',(req:any,res:any) =>{
    try {
        const {id} = req.body;
        console.log('current posts',posts);
        console.log('deleted post id',id);
        if(!id) throw new Error("Post not found");
        const deleteIndex = posts.findIndex((post) => post.id === id);
        if(deleteIndex == -1){
            throw new Error("post not found")
        }
        console.log(deleteIndex);
        posts.splice(deleteIndex,1);
        console.log('After delete posts',posts);
        res.json("post delete succsesfully")
    } catch (error) {
        console.log(error);
    }
})

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
