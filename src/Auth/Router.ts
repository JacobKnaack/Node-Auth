import express, { Request, Response } from 'express';
import { ConfigParams, auth, requiresAuth } from 'express-openid-connect';

const url: string | undefined = process.env.APP_URL;

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
  try {
    let isAuthenticated = request.oidc.isAuthenticated();
    if (!isAuthenticated) {
      response.status(401).redirect('/login');
    } else if (url && isAuthenticated) {
      response.status(301).redirect(url);
    }
  } catch (e) {
    console.log('Auth server error', e);
    response.status(500).send('Authentication Server Error');
  }
});
router.get('/profile', requiresAuth(), (request: Request, response: Response) => {
  response.status(200).json(request.oidc.user);
});

export default router;