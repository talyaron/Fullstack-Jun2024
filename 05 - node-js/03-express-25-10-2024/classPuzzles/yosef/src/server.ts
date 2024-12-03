import express from 'express';
const app = express()
const port = process.env.PORT || 3000

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



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});