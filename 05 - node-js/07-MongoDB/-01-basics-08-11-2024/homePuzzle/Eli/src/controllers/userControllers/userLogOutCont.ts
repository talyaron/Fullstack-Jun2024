import { UserModel } from "../../models/userModel";

export const userLogOut=async(req:any, res:any) => {
    try {
      const { key } = req.body;
      const foundUserByKey = await UserModel.findOne({ key });

          if(foundUserByKey){
            foundUserByKey.key="";
            await foundUserByKey.save();
          res.json({ message: "out success!", key });
          console.log( "Deleted User Key");
          return;
        } else res.json({ error: "Invalid Key" });
      
    } catch (error: unknown) {
      if (error instanceof Error) {
        res.status(500).json({ error: error.message });
      } else {
        res.status(500).json({ error: "An unknown error occurred." });
      }
    }
  }
  