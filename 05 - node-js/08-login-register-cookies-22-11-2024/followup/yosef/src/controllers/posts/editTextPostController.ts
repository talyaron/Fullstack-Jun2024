import { PostModel } from "../../model/post/postModel";
import { posts } from "../../model/post/postModel";


// export function editTextPost (req:any, res:any){
//     try{
//             const {text } = req.body;
    
//     const post = posts.find(p => p.id === id);
    
//     if (post) {
//         post.text = text;
//         console.log('Updated text post:', post);
//         res.status(200).json({ message: "Post text updated successfully" });
//         console.log("Post updated successfully");
//         console.log(posts)
//     }
//     else {
//         res.status(404).json({ error: "Post not found" });
//     }
// }
//     catch (error){
//         console.error('Error in editTextPost:', error);
//         res.status(500).json({ error: 'Internal server error' });
//     }
// }

export async function editTextPost (req:any, res:any){
    try{
            const {text } = req.body;
    
    const post = await PostModel.findByIdAndUpdate(req.params.id, { text }, { new: true });
    
    if (post) {
        console.log('Updated text post:', post);
        res.status(200).json({ message: "Post text updated successfully" });
        console.log("Post updated successfully");
    }
    else {
        res.status(404).json({ error: "Post not found" });
    }
}
    catch (error){
        console.error('Error in editTextPost:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}