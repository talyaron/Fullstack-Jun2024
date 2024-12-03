import express from 'express';
import { loginUser } from '../controllers/user/loginUser';
import { signupUser } from '../controllers/user/signupUser';
import { userExists } from '../controllers/user/userExists';


const userRouter = express.Router();

userRouter.post('/signupUser', signupUser);
userRouter.post('/login', loginUser);
userRouter.get('/userExists', userExists);

export default userRouter;