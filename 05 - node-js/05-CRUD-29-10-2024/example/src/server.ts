import express from 'express';
const app = express()
const port = process.env.PORT || 3000



app.use(express.json()); //middleware to get data from the body
app.use(express.static('public')) //middleware



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

const words: string[] = [];
// route to send something to the server
app.post("/api/send-word", (req:any, res:any) => {
    try {
        const data = req.body;

        if(!data.word) throw new Error("No word found");
        words.push(data.word);

        console.log(data);
        res.send({message: "Word received", words});
    } catch (error) {
        console.error(error);
        res.status(500).send({message: "Error"});   
    }
});



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});