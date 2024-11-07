import express from 'express';
import bodyParser from 'body-parser';
import session from 'express-session';
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
        store: new FileSessionStore(),
        secret: 'your_secret_key',
        resave: false,
        saveUninitialized: false,
        cookie: { secure: false },
    })
);



app.use('/api/posts', postsRoute);
app.use('/api/users', userRoute);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
