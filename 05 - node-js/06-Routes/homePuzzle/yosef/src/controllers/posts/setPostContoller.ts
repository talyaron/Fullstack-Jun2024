import { posts } from "../../model/post/postModel";

export function addPost (req: any, res: any) {
    try{

    const { title, text, imageURL } = req.body;
    
    console.log('Received POST request:', req.body);  

    if (!title || !text || !imageURL) {
        return res.status(400).json({ error: "All fields (title, text, imageURL) are required" });
    }

    const id = crypto.randomUUID();
    posts.push({id, title, text, imageURL });

    console.log('Current posts:', posts); 

    res.status(201).json({ message: "Post added successfully" });
}
    catch(error){
        console.error('Error while adding post:', error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}