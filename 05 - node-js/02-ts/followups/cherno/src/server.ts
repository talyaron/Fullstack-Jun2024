import express from 'express';
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello World!');
    console.log("new user");
});

app.listen(port, onListen)

function onListen() 
{
    console.log(`Server running on port ${port}`);
}