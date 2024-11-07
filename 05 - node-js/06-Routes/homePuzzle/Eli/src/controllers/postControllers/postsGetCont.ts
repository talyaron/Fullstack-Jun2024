import { posts } from "../../models/postsModel";
import { users } from "../../models/userModel";

export function getPosts(req: any, res: any) {
  try {
    const { key } = req.body;
    const keyOfUser = users.find((user) => user.key === key);
    if (!keyOfUser) {
      res.json({ error: "invalid key", throwAway: "bad key" });
      return;
    }
    const postsOfAll = posts.map((post) => {
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
