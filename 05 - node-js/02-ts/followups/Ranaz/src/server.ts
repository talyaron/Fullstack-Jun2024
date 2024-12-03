import express from 'express';
const app = express()
const port = 3000

app.get('/', (req, res) => {
    console.log("rana zidan");
    res.send('Hello World its rana zidan!!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});