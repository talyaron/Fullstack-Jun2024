import { users } from "../../models/userModel";

export function checkKey(req:any, res:any) {
    try {
      const { key } = req.body;
      const foundEmail = users.find((user) => key === user.key);
      
          if(foundEmail){
          res.json({ message: "logging success!", key,name: foundEmail.name});
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