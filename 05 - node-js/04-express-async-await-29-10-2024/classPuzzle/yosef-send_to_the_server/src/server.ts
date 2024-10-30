import express from 'express';
const app = express()
const port = process.env.PORT || 3000
let public_array : string[] = [];

app.use(express.json());


app.use(express.static('public')) //middleware

app.get('/api/get-all_post', (req, res) => {
    try{
        // send to the client all information from public array - with foreach method
    
        let x = "";
        public_array.forEach((post) => {
            x=(JSON.stringify(post)); // מדפיס את האובייקט כולו כמחרוזת JSON
        });
        res.send(x.toString); // ��שלח את המי��פו���� כו��ו ללקו�� בתו�� ��רי��ה HTTP ��ק��
        
    }
    catch(error){
        console.log(error);
        res.status(500).send("Internal Server Error");
    }

})

app.post('/api/post', (request, res) => {
    let newPost = request.body;
    console.log("word post received")
    console.log(newPost);
    public_array.push(newPost);
    res.send("post created successfully");

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

//route
app.get('/api/get-hello', (x, y)=>{

    try{
        // setTimeout(() => {
        y.send({message: "Hello from express"});
        // }, 3000);
    } catch(error){
        console.error(error);
    }
})

//server
// app.get('/api/get-randomNumber', (request, res)=>{

   
//        let randomNumber = Math.random();
//         res.send(`<h1> your random number ${randomNumber}</h1>`);
// });

