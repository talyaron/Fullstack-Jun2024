import { PostModel } from "../../model/post/postModel";
// import { posts } from "../../model/post/postModel";


// export function getPost (req:any, res:any){
//     res.json({ posts });
// }

export const getPostFromDB = async (req:any, res:any) =>
    {
        try
        {
            /* give me all post from the database */
            const posts = await PostModel.find();
            res.json({posts});
        } 
        catch(error)
        {
            res.status(500).send({error: "Server error"});
        }
    }