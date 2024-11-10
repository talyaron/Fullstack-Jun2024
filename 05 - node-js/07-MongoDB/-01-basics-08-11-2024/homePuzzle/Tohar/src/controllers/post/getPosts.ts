import { posts, PostModel } from "../../models/postModel";

export function getPosts (req:any, res:any) {
    

    PostModel.find({})
        .then(posts => {
            res.json({ posts });
        });
};