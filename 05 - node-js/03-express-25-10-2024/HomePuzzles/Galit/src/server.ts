import express from 'express';
import path from 'path';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.resolve(__dirname, '../public')));

app.get('/index.html', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../public/view/index.html'));
});

app.get('/about.html', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../public/view/about.html'));
});

app.get('/contact.html', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../public/view/contact.html'));
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
