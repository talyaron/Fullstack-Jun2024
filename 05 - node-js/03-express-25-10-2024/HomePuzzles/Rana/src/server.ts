import express from 'express';
import path from 'path';


const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/05 - node-js/03-express-25-10-2024/HomePuzzles/Rana', (req: any, res: { sendFile: (arg0: any) => void; }) => {
    console.log("Rana zidan!");
    res.sendFile(path.resolve('public', 'index.html'));
});

app.listen(port, () => {
    console.log(`Server listening on port${port}`);
});
