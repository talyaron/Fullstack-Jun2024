import express from 'express';
const app = express()
const port = process.env.PORT || 3000

app.use(express.static('public')) //middleware

//event handler of get method
app.get('/api/press', (req, res)=>{

    try{
        res.send({number: Math.floor(Math.random() * 16777215)});;
    } catch(error){
        console.error(error);
    }
})



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});