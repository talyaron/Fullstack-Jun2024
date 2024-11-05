import { error } from "console";
import express from "express";
const app = express();
const port = process.env.PORT || 3000;
app.use(express.json()); // To parse JSON bodies
app.use(express.static("public")); //middleware

console.log("Hi from typescript");
type Vector = {
  x: number;
  y: number;
};
class Bullet {
  id: string;
  pos: Vector;
  angle: number;
  speed: number;
  velocity:Vector;
  // Additional properties like max speed and other attributes can be added here

  constructor(id:string,pos: Vector, angle: number) {
      this.id = id;
      this.pos = pos;
      this.angle = angle;
      this.speed = 10; // Set a default speed for the bullet
      this.velocity = {
        x: Math.cos(this.angle) * this.speed,
        y: Math.sin(this.angle) * this.speed
    };
  }

  updatePosition(deltaTime: number) {
    // Update position based on angle and speed
    this.pos.x += this.velocity.x * (deltaTime / 16.7); // divide by 1000 for milliseconds to seconds
    this.pos.y += this.velocity.y * (deltaTime / 16.7);
  }
}
const bullets: Bullet[] = [];

app.post("/api/createBullet", (req, res) => {
  const { pos, angle } = req.body;
  const newBullet = new Bullet( `bullet=${crypto.randomUUID()}`, pos, angle );
  bullets.push(newBullet);
  res.send({ message: "Bullet created", bullet: newBullet });
});

app.get("/api/getBullets", (req, res) => {
  res.send({ bullets });
});

class User {
  id: string;
  pos: Vector;
  angle:number;
  dead:boolean;
  constructor(pos: Vector,angle:number) {
    this.id = `id=${crypto.randomUUID()}`;
    this.pos = pos;
    this.angle=angle;
    this.dead=false;
  }
}

let lastUpdate = Date.now();

setInterval(() => {
  const now = Date.now();
  const deltaTime = now - lastUpdate;
  lastUpdate = now;

  bullets.forEach(bullet => bullet.updatePosition(deltaTime));

  // Emit the updated bullet positions to clients (optional: with socket.io)
  // io.emit("updateBullets", bullets);
}, 16); 





app.post('/api/deleteBullet', (req, res) => {
  try {
  const {  index  } = req.body;
  console.log(index);
  const bulletID = bullets.findIndex(bull => bull.id === index);
  
  if (index!=-1) {
      // Update the player's position
     bullets.splice(bulletID,1);
      res.send({ message: "bullet Deleted" });
  } else {
      // If no player is found with that id
      res.status(404).send({ message: "bullet not found" });
  }
} catch (error) {
  console.error(error);
  res.status(500).send({ message: "Error processing move" });
}
});
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
    const newUser = new User({ x: x, y: 100 },0);
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
        const { playerId, pos, angle } = req.body;
        
        const user = users.find(user => user.id === playerId);
        
        if (user) {
            // Update the player's position
            user.pos = pos;
            user.angle = angle;
           // console.log(`Player ${playerId} moved to new position:`, pos);
            //console.log(users); // Log the updated users array for debugging
            const dead =user.dead;
            if(!dead){
            res.send({ message: "Player position updated", playerId, pos,angle });}
            else {  res.send({ message: "user is dead!", playerId, pos,angle,dead });}
        } else {
            // If no player is found with that id
            res.status(404).send({ message: "Player not found" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: "Error processing move" });
    }
});

app.post("/api/killUser", (req, res) => {
  try {
    const { id }= req.body;
    const userFound= users.find(user=>id===user.id)
    if (!userFound)  {res.send({ error: "user not found" ,message:"user not found :O"});return;}
      userFound.dead=true;
      res.send({ message: `user died${userFound.id}` });
  } catch (error) {
    console.error(error);
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
