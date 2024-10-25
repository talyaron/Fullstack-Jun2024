import express from 'express';
const app = express()
const port = process.env.PORT || 3000

app.use(express.static('public')) //middleware


//event handler of get method
app.get('/welcome', (req, res) => {

    res.send(`Welcome`)
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});