import express from "express";
const app = express();
const port = process.env.PORT || 3000;
app.use(express.json()); // To parse JSON bodies

console.log("Hi from typescript");
type Vector = {
  x: number;
  y: number;
};

class User {
  id: string;
  pos: Vector;
  constructor(pos: Vector) {
    this.id = `id=${crypto.randomUUID()}`;
    this.pos = pos;
  }
}
setInterval(updateServer,300)
function updateServer()
{
   // if(users[0])
  //  users[0].pos.y +=15;
}
app.use(express.static("public")); //middleware


//get = a method of http
//route '/'

//req = request
//res = response

//event handler of get method

const users: User[] = [];
let x = 100;
//route
app.get("/api/getNewUser", (req, res) => {
  try {
    // setTimeout(() => {

    // }, 3000);
    if(users.length<2){
    const newUser = new User({ x: x, y: 100 });
     x = 1600;
     
    users.push(newUser);
    res.send({ message: "created new user", newUser });}
    else  res.send({ message: "only 2 players !" })

  } catch (error) {
    console.error(error);
  }
});


app.post("/api/movePlayer", (req, res) => {
    try {
        const { playerId, pos } = req.body;
        
        // Find the player by their id in the users array
        const user = users.find(user => user.id === playerId);
        
        if (user) {
            // Update the player's position
            user.pos = pos;

           // console.log(`Player ${playerId} moved to new position:`, pos);
            //console.log(users); // Log the updated users array for debugging
            
            res.send({ message: "Player position updated", playerId, pos });
        } else {
            // If no player is found with that id
            res.status(404).send({ message: "Player not found" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: "Error processing move" });
    }
});
app.get("/api/getUsers", (req, res) => {
    try {
      res.send({ message: "here are the users", users });

  
    } catch (error) {
      console.error(error);
    }
  });


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
