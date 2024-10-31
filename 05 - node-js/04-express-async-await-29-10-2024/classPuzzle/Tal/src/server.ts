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
app.get('/main', (req:any, res:any) => {
    console.log("<h1 style='color: blue'>hello world</h1>");
    let x:string = '';
    for (let i = 0; i < 10; i++) {
        x += `${i} ,`;
    }
    res.send(`<h1 style='color: blue'>hello world</h1><h2>from express</h2><p>${x}</p>`)
})

app.get('/about', (req:any, res:any) => {
    res.send("<h1 style='color: green'>About us</h1>")
})

//route
app.get('/api/get-hello', (req:any, res:any)=>{

    try{
        // setTimeout(() => {
        res.send({message: "Hello from express"});
        // }, 3000);
    } catch(error){
        console.error(error);
    }
})

app.get("/api/get-random-number", (req:any, res:any) => {
    try {
        const randomNumber = Math.ceil( Math.random()*1000);
        //bring date from database, caclulte something, etc
        res.send({number: randomNumber});
    } catch (error) {
        console.error(error);
    }
})



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});