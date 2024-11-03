import express, { response } from "express";
const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());
app.use(express.static("public"));
import multer from "multer";
import path from "path";
import fs from "fs";


//npm i multer...
//npm i --save-dev @types/multer

//stuff for image upload
const uploadsDir = path.join(__dirname, "uploads");

if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
}
app.use("/uploads", express.static(uploadsDir));

app.get("/register", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/register", "register.html"));
});

app.get("/index", (req, res) => {
  res.sendFile(path.join(__dirname, "../public", "index.html"));
});
app.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/login", "login.html"));
});

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadsDir);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(
      null,
      file.fieldname + "-" + uniqueSuffix + path.extname(file.originalname)
    );
  },
});
const upload = multer({ storage: storage });

class infoValidator {
  regN: RegExp;
  regE: RegExp;
  regP: RegExp;

  constructor() {
    this.regN = /^[a-zA-Z\s'-]+$/;
    this.regE = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    this.regP =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
  }
  isNameValid(name: string) {
    if (this.regN.test(name) == false) return "invalid name";
    return "";
  }
  isEmailValid(email: string) {
    const emailExist = users.some((user) => email === user.email);
    if (this.regE.test(email) == false)
      return "invalid email : email needs @ and a .com ending";
    if (emailExist) return "invalid email : email already exists!";
    return "";
  }
  isPasswordValid(password: string) {
    if (this.regP.test(password) == false)
      return "invalid password : password requires one Uppercase letter <br> and one special letter(@#!$%#^&*)";
    return "";
  }
  isRePasswordValid(rePassword: string, password: string) {
    if (rePassword !== password)
      return "invalid repeat password: required to be the same as password";
    return "";
  }
}

interface PostRequestBody {
  word: string;
}

interface Post {
  id: string;
  title: string;
  description: string;
  img: string;
  creatorId:string;
  creatorName:string;
  userMade?: boolean;
}

class User {
  id: string;
  email: string;
  name: string;
  password: string;
  key?: string;
  constructor(email: string, name: string, password: string) {
    this.id = crypto.randomUUID();
    this.email = email;
    this.name = name;
    this.password = password;
  }
  assignKey() {
    this.key = `key=${crypto.randomUUID()}`;
  }
}

const posts: Post[] = [];
const users: User[] = [];
const admin:User= new User("admin","admin","admin" );
const admin2:User= new User("admin2","admin2","admin2" );
users.push(admin,admin2);
const infoValidation: infoValidator = new infoValidator();


app.post(`/api/log-out`, (req, res) => {
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
});


app.post(`/api/check-key`, (req, res) => {
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
});

app.post("/api/register-user", (req, res) => {
  try {
    const { name, email, password, rePassword } = req.body;

    const isNameInValid = infoValidation.isNameValid(name);
    const isEmailInValid = infoValidation.isEmailValid(email);
    const isPasswordInValid = infoValidation.isPasswordValid(password);
    const isRepassWordInValid = infoValidation.isRePasswordValid(
      rePassword,
      password
    );
    if (
      !isNameInValid &&
      !isEmailInValid &&
      !isPasswordInValid &&
      !isRepassWordInValid
    ) {
      const newUser = new User(email, name, password);
      users.push(newUser);
      res.json({ message: "user info valid on server creating user!", users });
    } else {
      if (isEmailInValid) {
        res.json({
          error: `${isEmailInValid}`,
        });
      } else
        res.json({
          error: "Some discrepancies occurred",
          isNameInValid,
          isPasswordInValid,
          isRepassWordInValid,
        });
    }
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: "An unknown error occurred." });
    }
  }
});

app.post(`/api/account-login`, (req, res) => {
  try {
    const { email, password } = req.body;
    const foundEmail = users.find((user) => email === user.email);

    if (foundEmail) {
      const foundPassword: boolean = foundEmail.password === password;

      if (foundPassword) {
        foundEmail.assignKey();
        const key = foundEmail.key;
        res.json({ message: "logging success!", key });
        console.log(foundEmail.name, "was given this key:", key);
        return;

      } else res.json({ error: "wrong password", email, message: "wrong email or password", });
    } else res.json({ error: "no such email", email ,message: "wrong email or password",});

  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: "An unknown error occurred." });
    }
  }
});

app.post(
  "/api/add-post",
  upload.single("image"),
  (req: express.Request<{}, PostRequestBody>, res: express.Response) => {
    try {
      const { title, description,key } = req.body;
      const img = req.file ? req.file.filename : ""; // Get the image filename

      if (!title) throw new Error("No word found");
      // Log the full path of the uploaded image
      console.log(`Uploaded image path: ${path.join(uploadsDir, img)}`);
    const postCreator= users.find(user=>key===user.key)
    if(!postCreator) {  res.json({message:"invalid user key no post made"});return;}
    const creatorId =postCreator.id;
    const creatorName=postCreator.name;
      if (img) {
        console.log(`Received word: ${title} ${description}, Image: ${img}`);
        const newPost = {
          id: `id=${crypto.randomUUID()}`,
          title,
          description,
          img,
          creatorId,
          creatorName,
          
        }; // Create a new post object
        posts.unshift(newPost);

        // Here you would typically save newPost to a database or an array
        console.log(newPost); // Log the new post for debugging

        res.json({ message: "Word and image uploaded successfully!", newPost });
      } else {
        console.log(`Received word: ${title} ${description}, Image: no image by creator id${creatorId}`);
        const newPost = {
          id: `id=${crypto.randomUUID()}`,
          title,
          description,
          img,
          creatorId,
          creatorName,
       
        }; // Create a new post object
        posts.unshift(newPost);
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        res.status(500).json({ error: error.message });
      } else {
        res.status(500).json({ error: "An unknown error occurred." });
      }
    }
  }
);

app.post("/api/get-posts", (req, res) => {
  try {
    const { key } =req.body;
    const keyOfUser = users.find(user=>user.key===key)
    if(!keyOfUser){ res.json({error:"invalid key",throwAway:"bad key"}); return;}
    const postsOfAll = posts.map(post=>{if(post.creatorId===keyOfUser.id){post.userMade=true}else{post.userMade=false}return post;})
    res.json({ postsOfAll });
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: "An unknown error occurred." });
    }
  }
});

app.post("/api/update-post", (req, res) => {
  try {
    const { id, title, desc, img } = req.body;

    const foundPost = posts.find((post) => post.id === id);
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

    if (img) {
      foundPost.img = img; 
    }

    res.json({ message: `Updated Post ${foundPost.id}` });
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: "An unknown error occurred." });
    }
  }
});

app.post("/api/remove-post", (req, res) => {
  try {
    const { postId } = req.body;  
    const foundPostIndex = posts.findIndex(post => post.id === postId);

    if (foundPostIndex !== -1) {
      posts.splice(foundPostIndex, 1);
      res.json({ message: "Post removed successfully" });
    } else {
      res.status(404).json({ error: "Post not found" });
    }
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: "An unknown error occurred." });
    }
  }
});




app.listen(port, () => {
  console.log(`Example unstagram app listening on port ${port}`);
});
