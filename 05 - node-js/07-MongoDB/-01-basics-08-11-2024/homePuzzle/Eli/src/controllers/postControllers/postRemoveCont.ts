import { PostModel } from "../../models/postsModel";

const mongoose = require("mongoose");



export const removePost=async(req:any, res:any)  =>{
    try {
      const { postId } = req.body; 

            const foundPostIndex = await PostModel.findOne({id:postId});
            console.log(postId,foundPostIndex?.creatorName);

      if (foundPostIndex) {
        await foundPostIndex.deleteOne();
        res.json({ message: "Post removed successfully" });
      } else {
        res.status(404).json({ error: "Post not found" });
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.log(error);
        res.status(500).json({ error: error.message });
      } else {
        res.status(500).json({ error: "An unknown error occurred." });
      }
    }
  }//
  