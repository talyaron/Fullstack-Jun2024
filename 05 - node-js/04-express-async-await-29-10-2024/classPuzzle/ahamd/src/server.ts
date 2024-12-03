import express, { Request, Response } from 'express';
import cors from 'cors';
import path from 'path';

const app = express();


app.use(cors());


app.use(express.static(path.join(__dirname, '../public')));


app.get('/random-number', (req: Request, res: Response) => { 
  const randomNumber = Math.floor(Math.random() * 1000) + 1;
  res.json({ number: randomNumber });
});


const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
