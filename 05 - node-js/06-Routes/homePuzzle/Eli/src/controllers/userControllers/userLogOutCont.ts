import { users } from "../../models/userModel";

export function userLogOut(req:any, res:any)  {
    try {
      const { key } = req.body;
      const foundUserByKey = users.find((user) => key === user.key);
  
          if(foundUserByKey){
            foundUserByKey.key="";
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
  