import express from 'express';
const app = express()
const port = process.env.PORT || 3000
console.log("Hi im from typescript")


app.use(express.static('client'))

app.get('/', (req, res) => {
  console.log("hi someone join your website.")
  res.send("Hi im working here")
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});