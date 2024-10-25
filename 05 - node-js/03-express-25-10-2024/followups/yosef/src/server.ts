import express from "express";
const app = express();
const port = process.env.PORT || 5000;



app.get('/', (req, res) => {
    let x = "";
for (let i=0; i<10; i++) {
    x = x + " " + i;
}
res.send(x);
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
