import { PostModel } from "../../models/postsModel";

export const updatePost=async(req: any, res: any)=> {
  try {
    const { id, title, desc, img } = req.body;

    const foundPost = await PostModel.findOne({id:id});

    if (!foundPost) {
      res.json({ error: "No such post found" });
      return;
    }

    if (title !== foundPost.title) {
      foundPost.title = title;
    }

    if (desc !== foundPost.description) {
      foundPost.description = desc;
    }

    if (img && foundPost.img !== img) {
      foundPost.img = img;
    }
  await  foundPost.save();
    res.json({
      message: `Updated Post ${foundPost.id} ${foundPost.img} - ${img} `,
    });
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: "An unknown error occurred." });
    }
  }
} ///update-post
