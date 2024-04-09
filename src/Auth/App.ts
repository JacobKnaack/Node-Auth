import { Application, RequestHandler } from 'express';
import http from 'http';

export default class App {
  app: Application;
  constructor(app: Application) {
    this.app = app
  }

  configure(middleware: RequestHandler) {
    this.app.use(middleware);
  }

  start(port: number): http.Server  {
    return this.app.listen(port, () => {
      console.log('Auth server running on port:: ', port);
    });
  }
}