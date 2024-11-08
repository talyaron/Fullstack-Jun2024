import { UserModel } from "../../models/userModel";

export const checkKey=async(req:any, res:any)=> {
    try {
      const { key } = req.body;
    //  const foundEmail = users.find((user) => key === user.key);
      const user = await UserModel.findOne({ key });
      console.log(user?.key);
          if(user){
          res.json({ message: "logging success!", key,name: user.name});
          console.log( "Valid Key");
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
  ///check-key