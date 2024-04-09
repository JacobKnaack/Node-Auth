import express, { Request, Response } from 'express';
import { ConfigParams } from 'express-openid-connect';
import { auth } from 'express-openid-connect';
import { requiresAuth } from 'express-openid-connect';

const config: ConfigParams = {
  authRequired: false,
  auth0Logout: true,
  secret: process.env.SECRET || 'secretstring',
  baseURL: process.env.BASE_URL || 'http://localhost:3000',
  clientID: process.env.CLIENT_ID || 'ID_FROM_AUTH0',
  issuerBaseURL: process.env.ISSUER_BASE_URL || 'https://app.auth0.com',
};

const router = express.Router();

// auth router attaches /login, /logout, and /callback routes to the baseURL
router.use(auth(config));

// req.isAuthenticated is provided from the auth router
router.get('/', (request: Request, response: Response) => {
  response.send(request.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
});
router.get('/profile', requiresAuth(), (request: Request, response: Response) => {
  response.json(request.oidc.user);
});

export default router;