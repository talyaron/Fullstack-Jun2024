import express from 'express';
const spvRouter = express.Router();

spvRouter.post('/signup-provider', signupUser);
spvRouter.post('/login-provider', loginUser);
spvRouter.post('/get-service-provider', getUser);
spvRouter.get('/sp-exists', userExists);
spvRouter.post('/addService', addService)

export default spvRouter;