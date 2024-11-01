import express from 'express';
const app = express()
const port = 3000
let public_array : string[] = [];

app.use(express.json()); //middleware to get data from the body
app.use(express.static('public')) //middleware

app.get("/api/get-words", (req, res) => {
    try {
        const x = public_array.join(", "); // חיבור המערך למחרוזת אחת
        res.send({ message: x }); // שלח את המידע כאובייקט JSON
        console.log(x);
    } catch (error) {
        console.log(error);
        res.status(500).send("Internal Server Error");
    }
});



app.post("/api/send-words", (request: any, res: any) => {
    try {
        const newPost = request.body.all_post_inputs; // גישה ל-all_post_inputs
        console.log("word post received");
        console.log(newPost);
        public_array.push(...newPost); // הוספת המילים למערך
        res.send("post created successfully");
    } catch (error) {
        console.log(error);
        res.status(500).send("Internal Server Error");
    }
});



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});


//get = a method of http
//route '/' 

//req = request
//res = response

//event handler of get method
// app.get('/main', (req, res) => {
//     console.log("<h1 style='color: blue'>hello world</h1>");
//     let x:string = '';
//     for (let i = 0; i < 10; i++) {
//         x += `${i} ,`;
//     }
//     res.send(`<h1 style='color: blue'>hello world</h1><h2>from express</h2><p>${x}</p>`)
// })

// app.get('/about', (req, res) => {
//     res.send("<h1 style='color: green'>About us</h1>")
// })

// //route
// app.get('/api/get-hello', (x, y)=>{

//     try{
//         // setTimeout(() => {
//         y.send({message: "Hello from express"});
//         // }, 3000);
//     } catch(error){
//         console.error(error);
//     }
// })

//server
// app.get('/api/get-randomNumber', (request, res)=>{

   
//        let randomNumber = Math.random();
//         res.send(`<h1> your random number ${randomNumber}</h1>`);
// });

