import express from 'express';
const app = express()
const port = process.env.PORT || 3000

console.log("Hi from typescript");

const x: number = 5;
console.log(x);


app.use(express.static('public'))


app.get('/api/number', (req, res) => {

    try {
        const number = Math.floor(Math.random() * 1000)
        res.send({number: number})
    } catch (error) {
        console.error(error)
    }
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});