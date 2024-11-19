import express from 'express';
import { loginUser } from '../controllers/user/loginUser';
import { signupUser } from '../controllers/user/signupUser';
import { userExists } from '../controllers/user/userExists';
import { getUser } from '../controllers/user/getUser';


const userRouter = express.Router();

userRouter.post('/signup-user', signupUser);
userRouter.post('/login', loginUser);
userRouter.post('/get-user', getUser);
userRouter.get('/userExists', userExists);

export default userRouter;