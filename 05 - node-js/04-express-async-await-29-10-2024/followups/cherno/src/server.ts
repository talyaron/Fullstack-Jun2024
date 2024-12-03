import express from 'express';
const app = express()
const port = process.env.PORT || 3000
let counter = 0;

app.use(express.static('public')) //middleware

//event handler of get method
app.get('/api/press-button', (req, res)=>{

    try
    {
        counter++;
        res.send({message: `I was pressed ${counter} times!`});
    }
    catch(error)
    {
        console.error(error);
    }
})



app.listen(port, () => 
{
    console.log(`Example app listening on port ${port}`)
});