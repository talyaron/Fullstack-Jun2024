import  express, { response }  from "express";
const app = express();
const port = process.env.PORT || 3000;
app.use(express.json()); 
app.use(express.static("public"));
import multer from 'multer';
import path from 'path';
import fs from 'fs'; 

//npm i multer...
//npm i --save-dev @types/multer

//stuff for image upload
const uploadsDir = path.join(__dirname, 'uploads'); 

if (!fs.existsSync(uploadsDir)) {
    fs.mkdirSync(uploadsDir, { recursive: true }); 
}
app.use('/uploads', express.static(uploadsDir));

app.get('/register', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/register', 'register.html'));
});

app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/login', 'login.html'));
});

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
      cb(null, uploadsDir); 
  },
  filename: (req, file, cb) => {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
      cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname)); 
  }
});
const upload = multer({ storage: storage });

class infoValidator {
  regN: RegExp;
  regE: RegExp;
  regP: RegExp;

  constructor(
  ) {
    this.regN = /^[a-zA-Z\s'-]+$/;
    this.regE = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    this.regP =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
     
  }
  isNameValid(name:string) {
    if (this.regN.test(name) == false) return "invalid name";
    return "";
  }
  isEmailValid(email:string) {
    const emailExist = users.some(user=>email===user.email)
    if (this.regE.test(email) == false)
      return "invalid email : email needs @ and a .com ending";
    if(emailExist)
      return  "invalid email : email already exists!";
    return  "";
  }
  isPasswordValid(password:string) {
    if (this.regP.test(password) == false)
      return "invalid password : password requires one Uppercase letter <br> and one special letter(@#!$%#^&*)";
    return  "";
  }
  isRePasswordValid(rePassword:string,password:string) {
    if (rePassword !== password)
      return "invalid repeat password: required to be the same as password";
    return  "";
  }
}

interface PostRequestBody {
    word: string;
}

interface Post {
  id:string;
  title: string;
  description: string;
  img: string;
}

class User {
  id:string;
  email:string;
  name: string;
  password:string;
  key?: string;
  constructor(email:string,name:string,password:string)
  {
    this.id=crypto.randomUUID();
    this.email=email;
    this.name=name;
    this.password=password;
  }
  assignKey(){
    this.key= `key=${crypto.randomUUID()}`;
  }
}


const posts:Post[]=[];
const users:User[]=[];
const infoValidation: infoValidator = new infoValidator();

app.get("/api/get-posts",(reg,res)=>
{
try {
  
  res.json({ posts });
} catch (error: unknown) {
    if (error instanceof Error) {
        res.status(500).json({ error: error.message });
    } else {
        res.status(500).json({ error: 'An unknown error occurred.' });
    }
}
});

app.post("/api/register-user", (req, res) => {
  try {
    const { name, email, password, rePassword } = req.body;

    const isNameInValid = infoValidation.isNameValid(name);
    const isEmailInValid = infoValidation.isEmailValid(email);
    const isPasswordInValid = infoValidation.isPasswordValid(password);
    const isRepassWordInValid = infoValidation.isRePasswordValid(rePassword, password);
    
    //console.log("Password Validation Result:", isPasswordInValid, `${password}`); // This will show on the server console

    // Check if all validations passed
    if (!isNameInValid && !isEmailInValid && !isPasswordInValid && !isRepassWordInValid) {
      const newUser = new User(email,name,password);
      users.push(newUser);
      res.json({ message: "user info valid on server creating user!" ,users});
     
    } else {
      res.json({
        error: "Some discrepancies occurred",
        isNameInValid,
        isEmailInValid,
        isPasswordInValid,
        isRepassWordInValid,
      });
    }
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: 'An unknown error occurred.' });
    }
  }
});

app.post("/api/add-post", upload.single('image'), (req: express.Request<{}, PostRequestBody>, res: express.Response) => {
  try {
    const { title,description } = req.body;
        const img = req.file ? req.file.filename : ""; // Get the image filename

      if (!title) throw new Error("No word found");
      // Log the full path of the uploaded image
      console.log(`Uploaded image path: ${path.join(uploadsDir, img)}`);

      if (img) {
          console.log(`Received word: ${title} ${description}, Image: ${img}`);
          const newPost = {id:`id=${crypto.randomUUID()}`,title,description, img }; // Create a new post object
          posts.unshift(newPost);
        
          // Here you would typically save newPost to a database or an array
          console.log(newPost); // Log the new post for debugging

          res.json({ message: 'Word and image uploaded successfully!', newPost });
      } else {
        console.log(`Received word: ${title} ${description}, Image: no image`);
        const newPost = {id:`id=${crypto.randomUUID()}`,title,description, img }; // Create a new post object
          posts.unshift(newPost);
      }
  } catch (error: unknown) {
      if (error instanceof Error) {
          res.status(500).json({ error: error.message });
      } else {
          res.status(500).json({ error: 'An unknown error occurred.' });
      }
  }
});


app.listen(port, () => {
    console.log(`Example unstagram app listening on port ${port}`);
  });