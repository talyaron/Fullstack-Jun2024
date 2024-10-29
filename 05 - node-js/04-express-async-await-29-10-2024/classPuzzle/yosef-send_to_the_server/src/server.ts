import express from 'express';
const app = express()
const port = process.env.PORT || 3000

console.log("Hi from typescript");

const x: number = 5;
console.log(x);


app.use(express.static('public')) //middleware

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

//route
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

app.get('/api/get-all_post', (request, res)=>{

   
    let all_post = new Array;
    let text = "";
    for(let i = 0; i < 10; i++){
        all_post.push({id: i, title: `post ${i}`, content: `content ${i}`});
        text = text + `the id = ${i}` + `the title is : ${i} `+ `the content is : ${i}` + `<br />`; 
    }
    res.json(text);
});

app.post('/api/post', (request, res) => {
    let newPost = request.body;
    console.log(newPost);
    res.send("post created successfully");
});




app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});