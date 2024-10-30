import express from 'express';

const app = express();
const port = process.env.PORT || 3001;

console.log("Hi from TypeScript");

app.use(express.static('public'));


app.get('/main', (req, res) => {
    let numberSequence = Array.from({ length: 10 }, (_, i) => i).join(', ');
    res.send(`<h1 style='color: blue'>Hello, world!</h1><h2>From Express</h2><p>${numberSequence}</p>`);
});

app.get('/about', (req, res) => {
    res.send("<h1 style='color: green'>About Us</h1>");
});

app.get('/api/get-hello', (req, res) => {
    try {
        res.send({ message: "Hello from Express" });
    } catch (error) {
        console.error(error);
    }
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
