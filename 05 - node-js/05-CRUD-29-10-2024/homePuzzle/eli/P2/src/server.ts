import express from "express";
const app = express();
const port = process.env.PORT || 3000;

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
app.post("/api/moveDown", (req, res) => {
    try {
   
    
      res.send({ message: "created new user",  users });
 
  
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
