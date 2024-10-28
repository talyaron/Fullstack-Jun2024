import express from 'express';
import path from 'path';


const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('public'));



app.get('/rana', (req, res) => {
    console.log("rana zidan"); 
   
    res.sendFile(path.resolve( 'public', 'index.html'));

})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});