import express from 'express';
import { loginUser } from '../controllers/users/loginUser';
import { signupUser } from '../controllers/users/signupUser';
import { userExists } from '../controllers/users/userExists';
import { getUser } from '../controllers/users/getUser';


const userRouter = express.Router();

userRouter.post('/signup-user', signupUser);
userRouter.post('/login', loginUser);
userRouter.post('/get-user', getUser);
userRouter.get('/userExists', userExists);

export default userRouter;