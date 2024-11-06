import { posts } from "../../models/posts/postsModel";

export function getPosts(req: any, res: any) {
    console.log("Received GET request for posts");
    res.json({ posts });
}