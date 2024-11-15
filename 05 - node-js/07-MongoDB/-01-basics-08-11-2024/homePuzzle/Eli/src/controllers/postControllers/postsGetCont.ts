import { PostModel } from "../../models/postsModel";
import { UserModel } from "../../models/userModel";

export const getPosts=async(req: any, res: any)=> {
  try {
    const { key } = req.body;
    const keyOfUser = await UserModel.findOne({ key });
    
    if (!keyOfUser) {
      res.json({ error: "invalid key", throwAway: "bad key" });
      return;
    }
    const postsFromDB = await PostModel.find();  // Fetch posts using PostModel
    const postsOfAll = postsFromDB.map((post) => {
      if (post.creatorId === keyOfUser.id) {
        post.userMade = true;
      } else {
        post.userMade = false;
      }
      return post;
    });
    res.json({ postsOfAll });
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: "An unknown error occurred." });
    }
  }
} ///
