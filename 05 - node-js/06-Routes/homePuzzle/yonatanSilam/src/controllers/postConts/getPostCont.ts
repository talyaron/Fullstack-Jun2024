import { allPosts } from "../../models/postModel";


export function getPost (req: any, res: any) {
    res.send({ allPosts });
  }