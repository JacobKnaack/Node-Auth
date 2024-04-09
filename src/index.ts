import dotenv from 'dotenv';
dotenv.config();

import auth from './Auth';

const PORT = process.env.PORT;

if (PORT) {
  auth.start(parseInt(PORT));
} else {
  auth.start(3000);
}