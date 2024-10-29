import express from 'express';
const app = express()
const port = process.env.PORT || 3000

console.log("Hi from typescript");



app.use(express.static('public')) //middleware

//get = a method of http
//route '/' 

//req = request
//res = response

//event handler of get method
app.get('/main', (req:any, res:any) => {
    console.log("<h1 style='color: blue'>hello world</h1>");
 
    res.send(`<h1 style='color: blue'>hello world</h1><h2>from express</h2><p>${x}</p>`)
})

app.get('/about', (req, res) => {
    res.send("<h1 style='color: green'>About us</h1>")
})
let x:string = '';
for (let i = 0; i < 10; i++) {
    x += `${i} ,`;
}
//route
app.get('/api/get-hello', (req, res)=>{

    try{
        // setTimeout(() => {
        res.send({message: "Hello from express"});
        // }, 3000);
    } catch(error){
        console.error(error);
    }
})
//route
app.get('/api/rng', (req, res)=>{

    try{
        // setTimeout(() => {
        res.send({message: `is your random number :)`});
        // }, 3000);
    } catch(error){
        console.error(error);
    }
})
app.get('/api/countUp', (req, res)=>{

    try{
        // setTimeout(() => {
        res.send({message: `e`});
        // }, 3000);
    } catch(error){
        console.error(error);
    }
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});