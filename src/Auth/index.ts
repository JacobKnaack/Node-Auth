
import express from 'express';
import Router from './Router';
import App from './App';

const application = express();
let authApp = new App(application);

authApp.configure(Router);

export default authApp;
