import express from 'express';
const app = express();
const port = process.env.PORT || 3000

app.use(express.static('public')) // ?


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});

app.get('/api/get-hello', (req, res)=>{

    try{
        res.send({message: "Hello from express"});
    } catch(error){
        console.error(error);
    }
})


app.get('/api/get-random-number', (req, res)=>{
    try{
        const random = Math.floor(Math.random() * 1000) + 1;
        res.send({message: `${random}` });
    } catch(error){
        console.error(error);
    }
})