import { posts } from "../../model/post/postModel";

export function editTitlePost (req: any, res:any){
    try{
 
    const { id, title } = req.body;
    
    const post = posts.find(p => p.id === id);

    if (post) {
        post.title = title;
        console.log('Updated title post:', post);
        res.status(200).json({ message: "Post title updated successfully" });
        console.log("Post updated successfully");
        console.log(posts)
    }
    else {
        res.status(404).json({ error: "Post not found" });
    }
}

    catch(err){
        console.error("Error in editTitle: ", err);
        res.status(500).json({error: "Internal Server Error"})
    }
}