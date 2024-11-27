import express from 'express';
import bodyParser from 'body-parser';
import session from 'express-session';
import FileStore from 'session-file-store';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

import postsRoute from './routes/postsRoute';
import userRoute from './routes/userRoute';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;
const FileSessionStore = FileStore(session);

const connectToDatabase = async () => {
    try {
        const dbURL = process.env.DB_URL || '';
        await mongoose.connect(dbURL, {

        });
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
};

connectToDatabase();

app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));
app.use(express.static('public'));
app.use(
    session({
        store: new FileSessionStore(),
        secret: process.env.JWT_SECRET || 'default_secret_key',
        resave: false,
        saveUninitialized: false,
        cookie: { secure: false }, 
    })
);

app.use('/api/posts', postsRoute);
app.use('/api/users', userRoute);

app.use((req, res, next) => {
    res.status(404).json({ message: 'Route not found' });
});

app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Internal Server Error', error: err.message });
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
