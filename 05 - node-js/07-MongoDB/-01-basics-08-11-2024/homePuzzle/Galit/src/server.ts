import express from 'express';
import bodyParser from 'body-parser';
import session from 'express-session';
import mongoose from 'mongoose';
import FileStore from 'session-file-store';
import postsRoute from './routes/postsRoute';
import userRoute from './routes/userRoute';


const app = express();
const port = process.env.PORT || 3000;
const FileSessionStore = FileStore(session);
app.use(bodyParser.json({ limit: '10mb' })); 
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));
app.use(
    session({
        secret: 'your_secret_key',   
        resave: false,
        saveUninitialized: false,
        cookie: { secure: false },
    })
);

const dbUrl = "mongodb+srv://galitccga:q4wlV111QcHSFkDZ@cluster0.sevm84o.mongodb.net;
const database = 'instagram';

mongoose.connect(`${dbUrl}/${database}`).then(()=>{
    console.info("DB connected")
}).catch((err)=>{
    console.error(err)
}); 

app.use('/api/posts', postsRoute);
app.use('/api/users', userRoute);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
