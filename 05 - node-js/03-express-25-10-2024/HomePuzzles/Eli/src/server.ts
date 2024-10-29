import express from 'express';
import path from 'path';

// import fs from 'fs';


const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('public'));


// "/" is an API that gets the requested data
//req = requested data
//res = responde to the request ===> the data itself



app.get('/', (req, res) => {
    console.log("eldenLord"); 

    res.sendFile(path.resolve( 'public', 'index.html'));
    // response sent
})




app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});